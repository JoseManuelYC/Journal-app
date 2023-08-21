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
      state.messageSaved = "";
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
      state.messageSaved = "";
    },
    setNotes: (state, { payload }) => {
      state.isSaving = false;
      state.notes = payload;
    },
    updateNote: (state, { payload }) => {
      state.isSaving = false;
      state.notes = state.notes.map((note) => {
        if (note.id === payload.id) {
          return payload;
        }
        return note;
      });
      state.messageSaved = `${payload.title}, ha sido actualiado`;
    },
    setSaving: (state) => {
      state.isSaving = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  addNewEmptyNote,
  savingNewNote,
  setActiveNote,
  setNotes,
  updateNote,
  setSaving,
} = journalSlice.actions;
