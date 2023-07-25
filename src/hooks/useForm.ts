import { ChangeEvent, useEffect, useMemo, useState } from "react";

type Data = {
  displayName?: string;
  email?: string;
  password?: string;
  title?: string;
  body?: string;
  date?: number;
};
type FormValidationProps = {
  [key: string]: [(value: string) => boolean, string];
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
  useEffect(() => {
    setformState(initialValue);
  }, [initialValue]);

  const isFormValid = useMemo(() => {
    for (const formCheck of Object.keys(formValid)) {
      if (formValid[formCheck] === null) return true;
    }
    return false;
  }, [formValid]);

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
    const formCheckValues = {};
    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];
      formCheckValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValid(formCheckValues);
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
    isFormValid,
  };
};
