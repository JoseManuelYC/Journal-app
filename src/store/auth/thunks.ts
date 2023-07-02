import { signInWithGoogle } from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";

export const checkingAuth = (email: string, password: string) => {
  console.log({ email, password });
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};
export const checkingGoogle = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));
    dispatch(login(result));
  };
};
