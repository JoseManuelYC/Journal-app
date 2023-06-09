import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        backgroundColor: "primary.main",
        padding: 4,
      }}
    >
      <Grid
        item
        sx={{
          boxShadow: "0px 10px 5px rgba(0,0,0,0.2)",
          backgroundColor: "white",
          padding: 3,
          borderRadius: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        xs={3}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login
        </Typography>
        <form>
          <Grid container sx={{ mb: "10px" }}>
            <Grid item xs={12}>
              <TextField
                label="Email"
                type="email"
                placeholder="tucorreo@google.com"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} mt={2}>
              <TextField
                label="Password"
                type="password"
                placeholder="Password"
                fullWidth
              />
            </Grid>
            <Grid container spacing={2} sx={{ mt: "5px" }}>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button variant="contained" fullWidth>
                  <Google />
                  <Typography sx={{ ml: "2px" }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container justifyContent="end" sx={{ mt: "10px" }}>
              <Grid item>
                <Link
                  color="inherit"
                  sx={{ textDecoration: "none" }}
                  to="/auth/register"
                  component={LinkRouter}
                >
                  Crear una cuenta
                </Link>
              </Grid>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  );
};
