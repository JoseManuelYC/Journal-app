import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { AccountCircleOutlined } from "@mui/icons-material";
import { Link as LinkRouter } from "react-router-dom";
export const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container sx={{ mb: "10px" }}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              placeholder="Your name"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} mt={2}>
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
          <Grid container spacing={2} sx={{ mt: "6px" }}>
            <Grid item xs={12}>
              <Button variant="contained" fullWidth>
                <Typography mr={1}>Create Account</Typography>
                <AccountCircleOutlined />
              </Button>
            </Grid>
          </Grid>
          <Grid container justifyContent="end" sx={{ mt: "10px" }}>
            <Grid item>
              <Link
                color="inherit"
                sx={{ textDecoration: "none" }}
                to="/auth/login"
                component={LinkRouter}
              >
                <Typography mt={2}>Do you have an account?</Typography>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
