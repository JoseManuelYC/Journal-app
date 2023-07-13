import { Routes, Route } from "react-router-dom";
import { AuthRoutes } from "../auth/routes/AuthRoutes";
import { JournalRoute } from "../app/routes/JournalRoute";
import CheckingAuth from "../UI/components/CheckingAuth";
import { useUser } from "../hooks/useUser";

export const AppRouter = () => {
  const { status } = useUser();
  if (status === "checking") {
    return <CheckingAuth />;
  }

  return (
    <Routes>
      {status === "autenticated" ? (
        <Route path="/auth/*" element={<AuthRoutes />} />
      ) : (
        <Route path="/*" element={<JournalRoute />} />
      )}
    </Routes>
  );
};
