import { ChangeEvent, useState } from "react";

type InitialState = {
  title: string;
  content: string;
};

const useInput = (initialState: InitialState) => {
  const [value, setValue] = useState<InitialState>({
    title: "",
    content: ""
  });

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValue((prev) => ({ ...prev, [name]: value }));
  };

  const resetValue = () => {
    setValue(initialState);
  };

  return { value, valueChangeHandler, resetValue };
};

export default useInput;
