import { ChangeEvent, useState } from "react";

type Data = {
  email: string;
  password: string;
};

export const useForm = (initialValue: Data) => {
  const [formState, setformState] = useState(initialValue);

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

  return {
    ...formState,
    formState,
    onNewValue,
    onResetForm,
  };
};
