//Hooks
import { useMemo } from "react";
//React Redux
import { useDispatch, useSelector } from "react-redux";
//React Router
import { Link as LinkRouter } from "react-router-dom";
//Components MUI
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
//Redux Toolkit
import { /* checkingAuth */ checkingGoogle } from "../../store/auth/thunks";
import { RootState } from "../../store";
//Commponents
import { AuthLayout } from "../layout/AuthLayout";
//Custom Hooks
import { useForm } from "../../hooks/useForm";

export const LoginPage = () => {
  const { status } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { email, password, onNewValue } = useForm({
    email: "josemanuel@gmail.com",
    password: "123124123123",
  });

  const isAuth = useMemo(() => status === "checking", [status]); //Save the status every time it changes
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // dispatch(checkingAuth(email, password));
  };
  const onGoogleSignIn = () => {
    console.log("Google Sign in");
    checkingGoogle(dispatch);
  };
  return (
    <AuthLayout title="Login">
      <form onSubmit={onSubmit}>
        <Grid container sx={{ mb: "10px" }}>
          <Grid item xs={12}>
            <TextField
              label="Email"
              type="email"
              placeholder="tucorreo@google.com"
              name="email"
              value={email}
              onChange={onNewValue}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={onNewValue}
              fullWidth
            />
          </Grid>
          <Grid container spacing={2} sx={{ mt: "5px" }}>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuth}
                type="submit"
                variant="contained"
                fullWidth
              >
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                disabled={isAuth}
                onClick={onGoogleSignIn}
                variant="contained"
                fullWidth
              >
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
