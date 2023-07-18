import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { AppDispatch } from "..";
import { addNewEmptyNote, savingNewNote, setActiveNote } from ".";

type Note = {
  id?: string | undefined;
  title: string;
  body: string;
  date: number;
};

export const startNewNote = () => {
  return async (dispatch: AppDispatch, getState) => {
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
    dispatch(savingNewNote());
  };
};
