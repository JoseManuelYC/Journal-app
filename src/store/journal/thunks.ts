import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { AppDispatch, RootState } from "..";
import {
  addNewEmptyNote,
  deleteNoteById,
  savingNewNote,
  setActiveNote,
  setNotes,
  setPhotosToActiveNote,
  setSaving,
  updateNote,
} from ".";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { loadNotes } from "../../helpers";
import { uploadImages } from "../../helpers/uploadImages";

type Note = {
  id?: string | undefined;
  title: string;
  body: string;
  imageUrls: [];
  date: number;
};
type Props = Dispatch<AnyAction>;

export const startNewNote = () => {
  return async (dispatch: AppDispatch, getState: RootState) => {
    dispatch(savingNewNote()); //disable button
    const { uid } = getState().auth;
    const newNote: Note = {
      title: "",
      body: "",
      imageUrls: [],
      date: new Date().getTime(),
    };
    const newDoc = doc(collection(FirebaseDB, `${uid}/journal/notes`));
    await setDoc(newDoc, newNote);
    newNote.id = newDoc.id;
    dispatch(addNewEmptyNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch: Props, getState: RootState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("uid does not exist");
    const { notes } = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
export const startUpdateNote = () => {
  return async (dispatch: Props, getState: RootState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFirestore = { ...(note ?? {}) };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(note));
  };
};

export const startUploadImage = (files = []) => {
  return async (dispatch: Props) => {
    dispatch(setSaving());
    const filesUploadPromises = [];
    for (const file of files) {
      filesUploadPromises.push(uploadImages(file));
    }
    const photoUrls = await Promise.all(filesUploadPromises);
    dispatch(setPhotosToActiveNote(photoUrls));
  };
};
export const startDeleteNote = () => {
  return async (dispatch: Dispatch, getState: RootState) => {
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await deleteDoc(docRef);
    dispatch(deleteNoteById(note.id));
  };
};
