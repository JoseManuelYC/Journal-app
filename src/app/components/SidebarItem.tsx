import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";

type SidebarProps = {
  title: string;
  body: string;
};

const SidebarItem = ({ title, body }: SidebarProps) => {
  const titleLength = useMemo(() => {
    return title.length > 15 ? title.substring(0, 15) + "..." : title;
  }, [title]);
  return (
    <ListItem disablePadding>
      <ListItemButton>
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
