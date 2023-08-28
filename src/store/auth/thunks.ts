import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import {
  checkWithEmailAndPassword,
  credentialsWithEmailAndPassword,
  logoutFirebase,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkCredentials, login, logout } from "./authSlice";
import { clearNotesLogout } from "../journal";

type Props = Dispatch<AnyAction>;
type Credentials = {
  email: string;
  password: string;
  displayName: string;
};
interface checkLogInProps {
  email: string;
  password: string;
}

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
export const checkLogIn = ({ email, password }: checkLogInProps) => {
  return async (dispath: Props) => {
    dispath(checkCredentials());
    const { displayName, ok, errorMessage, uid, photoURL } =
      await checkWithEmailAndPassword({ email, password });
    if (!ok) return dispath(logout({ errorMessage }));
    dispath(login({ email, password, uid, displayName, photoURL }));
  };
};
export const startLogOut = () => {
  return async (dispatch: Dispatch) => {
    try {
      await logoutFirebase();
      dispatch(logout(null));
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(error.message);
      }
    }
    dispatch(clearNotesLogout());
  };
};
