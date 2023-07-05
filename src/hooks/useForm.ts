import { ChangeEvent, useEffect, useState } from "react";

type Data = {
  displayName?: string;
  email: string;
  password: string;
};
type FormValidationProps = {
  [key: string]: [(value: string) => boolean, string];
};
type CheckValuesProps = {
  [key: string]: string;
};

export const useForm = (
  initialValue: Data,
  formValidations: FormValidationProps = {}
) => {
  const [formState, setformState] = useState(initialValue);
  const [formValid, setFormValid] = useState({});

  useEffect(() => {
    checkForm();
  }, [formState]);

  const onNewValue = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setformState({
      ...formState,
      [name]: value,
    });
  };

  const onResetForm = () => {
    setformState(initialValue);
  };

  const checkForm = () => {
    const formCheckValid = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckValid[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValid(formCheckValid);
  };

  return {
    ...formState,
    formState,
    onNewValue,
    onResetForm,
    formValid,
    displayNameValid: null,
    emailValid: null,
    passwordValid: null,
    ...formValid,
  };
};
