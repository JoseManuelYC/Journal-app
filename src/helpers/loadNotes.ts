import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../firebase/config";

interface Note {
  id?: string;
  date?: number;
  title?: string;
  body?: string;
}

export const loadNotes = async (uid: string) => {
  if (!uid) throw new Error("uid does not exist");
  const collectionRef = collection(FirebaseDB, `${uid}/journal/notes`);
  const doc = await getDocs(collectionRef);
  const notes: Note[] = [];
  doc.forEach((data) => {
    notes.push({ id: data.id, ...data.data() });
  });
  return { notes };
};
