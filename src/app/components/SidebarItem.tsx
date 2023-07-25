import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal";

type SidebarProps = {
  title: string;
  body: string;
  id: string;
  date: number;
  imageUrls: [];
};

const SidebarItem = ({
  title,
  body,
  id,
  date,
  imageUrls = [],
}: SidebarProps) => {
  const dispatch = useDispatch();

  const titleLength = useMemo(() => {
    return title.length > 15 ? title.substring(0, 15) + "..." : title;
  }, [title]);
  const onNewNote = () => {
    /*     const activeNote = {
      title,
      body,
      id,
      date,
      imageUrls,
    }; */
    dispatch(
      setActiveNote({
        title,
        body,
        id,
        date,
        imageUrls,
      })
    );
  };
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onNewNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText primary={titleLength} />
          <ListItemText secondary={body} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
