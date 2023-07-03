import { ChangeEvent, useEffect, useState } from "react";

type Data = {
  displayName?: string;
  email: string;
  password: string;
};

export const useForm = (initialValue: Data, formValidations = {}) => {
  const [formState, setformState] = useState(initialValue);
  const [formValid, setFormValidation] = useState({});

  useEffect(() => {
    createValidators();
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

  const createValidators = () => {
    const formCheckValues = {};

    for (const formField of Object.keys(formValidations)) {
      const [fn, errorMessage] = formValidations[formField];

      formCheckValues[`${formField}Valid`] = fn(formState[formField])
        ? null
        : errorMessage;
    }
    setFormValidation(formCheckValues);
  };

  return {
    ...formState,
    formState,
    onNewValue,
    onResetForm,
    formValid,
    ...formValid,
  };
};
