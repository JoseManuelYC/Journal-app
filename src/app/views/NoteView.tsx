import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { SaveOutlined, UploadFileOutlined } from "@mui/icons-material";
import { Button, Grid, IconButton, TextField, Typography } from "@mui/material";
import "sweetalert2/dist/sweetalert2.css";
import Swal from "sweetalert2";
import { useForm } from "../../hooks/useForm";
import { ImageGallery } from "../components";
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

  const inputRef = useRef();
  const onFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files;
    if (file?.length === 0) return;
    console.log("Subiendo archivos");
  };

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
        <input
          type="file"
          multiple
          ref={inputRef}
          style={{ display: "none" }}
          onChange={onFileInputChange}
        />
        <IconButton
          color="primary"
          disabled={isSaving}
          onClick={() => inputRef.current.click()}
        >
          <UploadFileOutlined />
        </IconButton>

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
