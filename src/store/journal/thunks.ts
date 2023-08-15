import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { AppDispatch, RootState } from "..";
import {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  updateNote,
} from ".";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { loadNotes } from "../../helpers";

type Note = {
  id?: string | undefined;
  title: string;
  body: string;
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
  return async (dispatch: Props, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error("uid does not exist");
    const { notes } = await loadNotes(uid);
    dispatch(setNotes(notes));
  };
};
export const startUpdateNote = () => {
  return async (dispatch: Props, getState) => {
    dispatch(savingNewNote());
    const { uid } = getState().auth;
    const { active: note } = getState().journal;

    const noteToFirestore = { ...note };
    delete noteToFirestore.id;

    const docRef = doc(FirebaseDB, `${uid}/journal/notes/${note.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(note));
  };
};
