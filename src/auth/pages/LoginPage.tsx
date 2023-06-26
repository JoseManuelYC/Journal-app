import { useDispatch } from "react-redux";
import { Link as LinkRouter } from "react-router-dom";
import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm";
import { checkingAuth, checkingGoogle } from "../../store/auth/thunks";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const { email, password, onNewValue } = useForm({
    email: "josemanuel@gmail.com",
    password: "123124123123",
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(checkingAuth(email, password));
  };
  const onGoogleSignIn = () => {
    console.log("Google Sign in");
    dispatch(checkingGoogle());
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
              <Button type="submit" variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button onClick={onGoogleSignIn} variant="contained" fullWidth>
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
