import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as LinkRouter } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const LoginPage = () => {
  return (
    <AuthLayout title="Login">
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
                <Typography mt={2}>Create an account!</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
