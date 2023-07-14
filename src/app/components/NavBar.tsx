import { LoginOutlined, MenuOutlined } from "@mui/icons-material";
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { startLogOut } from "../../store/auth/thunks";

export const NavBar = ({ drawerWidth = 240 }) => {
  const dispatch = useDispatch();

  const onLogOut = () => {
    dispatch(startLogOut());
  };
  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton color="inherit" sx={{ mr: "2px", display: { sm: "none" } }}>
          <MenuOutlined />
        </IconButton>
        <Grid
          container
          alignItems="center"
          direction="row"
          justifyContent="space-between"
        >
          <Typography variant="h6" noWrap component="div">
            Journal-App
          </Typography>
          <IconButton onClick={onLogOut}>
            <LoginOutlined color="error" />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
