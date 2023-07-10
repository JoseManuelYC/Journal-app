import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  credentialsWithEmailAndPassword,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";

type Props = Dispatch<AnyAction>;
type Credentials = {
  email: string;
  password: string;
  displayName: string;
};

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
export const startCredentialsEmailPassword = ({
  email,
  password,
  displayName,
}: Credentials) => {
  return async (dispatch: Props) => {
    dispatch(checkCredentials());
    const { ok, uid, errorMessage, photoURL } =
      await credentialsWithEmailAndPassword({
        email,
        password,
        displayName,
      });
    if (!ok) return dispatch(logout({ errorMessage }));
    dispatch(login({ email, uid, displayName, photoURL }));
  };
};
