import { Grid, Typography } from "@mui/material";

type AuthLayoutProps = {
  children: React.ReactNode;
  title: string;
};

export const AuthLayout = ({ children, title }: AuthLayoutProps) => {
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
          width: { sm: 450 },
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
          {title}
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
