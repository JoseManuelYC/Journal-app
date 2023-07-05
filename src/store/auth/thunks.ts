import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { signInWithGoogle } from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";

type Props = Dispatch<AnyAction>;

/* export const checkingAuth = (dispatch:Props,{ email, password}) => {
  console.log(email, password);
    dispatch(checkCredentials());
}; */
export const checkingGoogle = async (dispatch: Props) => {
  dispatch(checkCredentials());
  const result = await signInWithGoogle();
  if (!result.ok) return dispatch(logout(result.errorMessage));
  dispatch(login(result));
};
