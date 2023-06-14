import { Box, Toolbar } from "@mui/material";
import { NavBar, Sidebar } from "../components";

type JournalLayoutProps = {
  children: React.ReactNode;
};

const drawerWidth = 240;

export const JournalLayout = ({ children }: JournalLayoutProps) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavBar drawerWidth={drawerWidth} />
      <Sidebar drawerWidth={drawerWidth} />
      <Box component="main" flexGrow={1} padding={3}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
};
