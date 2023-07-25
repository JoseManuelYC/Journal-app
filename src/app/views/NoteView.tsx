import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { ImageGallery } from "../components";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { useForm } from "../../hooks/useForm";
import { useMemo } from "react";

export const NoteView = () => {
  const { active: note } = useSelector((state: RootState) => state.journal);

  const { title, body, date, onNewValue } = useForm(note);
  /*     const dateTitle = useMemo(() => {
    const dateString = new Date(date).toUTCString();
    return dateString;
  }, [date]);  */

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
        <Button sx={{ padding: 2 }}>
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
