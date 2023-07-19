import { createSlice } from "@reduxjs/toolkit";

export const journalSlice = createSlice({
  name: "journal",
  initialState: {
    isSaving: false,
    messageSaved: "",
    notes: [],
    active: null,
  },
  reducers: {
    addNewEmptyNote: (state, { payload }) => {
      state.notes.push(payload);
      state.isSaving = false;
    },
    savingNewNote: (state) => {
      state.isSaving = true;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    setNotes: (state, { payload }) => {
      state.isSaving = false;
      state.notes = payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addNewEmptyNote, savingNewNote, setActiveNote, setNotes } =
  journalSlice.actions;
