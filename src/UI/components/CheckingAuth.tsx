import { CircularProgress, Grid } from "@mui/material";

const CheckingAuth = () => {
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
      }}
    >
      <Grid container direction="row" justifyContent="center">
        <CircularProgress color="success" />
      </Grid>
    </Grid>
  );
};

export default CheckingAuth;
