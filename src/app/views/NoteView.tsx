import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.css";
import { ImageGallery } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "../../hooks/useForm";
import { useEffect } from "react";
import { startUpdateNote } from "../../store/journal/thunks";
import { setActiveNote } from "../../store/journal";

export const NoteView = () => {
  const dispatch = useDispatch();
  const {
    active: note,
    messageSaved,
    isSaving,
  } = useSelector((state: RootState) => state.journal);

  const { title, body, date, onNewValue, formState } = useForm(note);
  useEffect(() => {
    dispatch(setActiveNote(formState));
  }, [formState]);

  useEffect(() => {
    if (messageSaved.length > 0) {
      Swal.fire("Nota actualizada", messageSaved, "success");
    }
  }, [messageSaved]);

  /*     const dateTitle = useMemo(() => {
    const dateString = new Date(date).toUTCString();
    return dateString;
  }, [date]);  */

  const onNewNote = () => {
    dispatch(startUpdateNote());
  };
  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ mb: 3 }}
    >
      <Grid item>
        <Typography fontSize={39} fontWeight="light">
          {date}
        </Typography>
      </Grid>
      <Grid item>
        <Button disabled={isSaving} sx={{ padding: 2 }} onClick={onNewNote}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container sx={{ mt: 1 }}>
        <TextField
          type="text"
          fullWidth
          placeholder="Which is the title?"
          variant="filled"
          label="Title"
          sx={{ border: "none", mb: 1 }}
          name="title"
          value={title}
          onChange={onNewValue}
        />
        <TextField
          type="text"
          fullWidth
          placeholder="What Happend"
          multiline
          variant="filled"
          minRows={4}
          name="body"
          value={body}
          onChange={onNewValue}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
