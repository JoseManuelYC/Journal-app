//React Router
import { Link as LinkRouter } from "react-router-dom";
//Components MUI
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { AccountCircleOutlined } from "@mui/icons-material";
//Components
import { AuthLayout } from "../layout/AuthLayout";
//Custom Hook
import { useForm } from "../../hooks/useForm";

const formData = {
  displayName: "Jose Yanez",
  email: "joseyanez@google.com",
  password: "123456",
};

const formValidations = {
  email: [(value) => value.includes("@"), "the mail is wrong"],
  password: [
    (value) => value.length >= 6,
    "The password must have more than 6 characters",
  ],
  displayName: [(value) => value.length >= 1, "username is required"],
};

export const RegisterPage = () => {
  const {
    displayName,
    email,
    password,
    onNewValue,
    formState,
    displayNameValid,
  } = useForm(formData, formValidations);
  console.log(displayNameValid);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formState);
  };

  return (
    <AuthLayout title="Register">
      <form onSubmit={onSubmit}>
        <Grid container sx={{ mb: "10px" }}>
          <Grid item xs={12}>
            <TextField
              label="Name"
              type="text"
              placeholder="Your name"
              fullWidth
              name="displayName"
              value={displayName}
              onChange={onNewValue}
            />
          </Grid>
          <Grid item xs={12} mt={2}>
            <TextField
              label="Email"
              type="email"
              placeholder="tucorreo@google.com"
              fullWidth
              name="email"
              value={email}
              onChange={onNewValue}
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
          <Grid container spacing={2} sx={{ mt: "6px" }}>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" fullWidth>
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
