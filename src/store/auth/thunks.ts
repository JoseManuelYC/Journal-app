import { checkCredentials } from "./authSlice";

export const checkingAuth = (email: string, password: string) => {
  console.log({ email, password });
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};
export const checkingGoogle = () => {
  return async (dispatch) => {
    dispatch(checkCredentials());
  };
};
