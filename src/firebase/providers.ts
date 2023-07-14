import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { FirebaseAuth } from "./config";
type Credentials = {
  email: string;
  password: string;
  displayName: string;
};
type checkCredendtialsProps = {
  email: string;
  password: string;
};

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(FirebaseAuth, googleProvider);
    /*     const credentials = GoogleAuthProvider.credentialFromResult(result);
    console.log({ credentials }); */
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorMessage = error.message;

    return {
      ok: false,
      errorMessage,
    };
  }
};

export const credentialsWithEmailAndPassword = async ({
  email,
  password,
  displayName,
}: Credentials) => {
  try {
    const resp = await createUserWithEmailAndPassword(
      FirebaseAuth,
      email,
      password
    );
    const { uid, photoURL } = resp.user;
    await updateProfile(FirebaseAuth.currentUser, { displayName });

    return {
      ok: true,
      email,
      displayName,
      password,
      uid,
      photoURL,
    };
  } catch (error) {
    console.log(error);
    return {
      ok: false,
      errorMessage: (error.message = "This email is already in use"),
    };
  }
};
export const checkWithEmailAndPassword = async ({
  email,
  password,
}: checkCredendtialsProps) => {
  try {
    const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
    const { displayName, uid, photoURL } = res.user;
    return {
      ok: true,
      displayName,
      uid,
      photoURL,
    };
  } catch (error) {
    return {
      ok: false,
      errorMessage: (error.message = "User Not Found"),
    };
  }
};
export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut();
};
