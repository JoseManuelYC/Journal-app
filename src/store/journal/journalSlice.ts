import { Action, createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    note: [],
    active: null,
  },
  reducers: {
    addNewEmptyNote: (state, action) => {
      state.note.push(action.payload);
      state.isSaving = false;
    },
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, savingNewNote, setActiveNote } =
  journalSlice.actions;
