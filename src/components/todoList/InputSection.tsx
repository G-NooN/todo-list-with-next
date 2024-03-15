"use client";

import useInput from "@/hooks/useInput";
import { addTodoMutation } from "@/hooks/useTodoQuery";
import { FormEvent } from "react";

const InputSection = () => {
  const { value, valueChangeHandler, resetValue } = useInput({
    title: "",
    content: ""
  });

  const { title, content } = value;

  const { addTodo } = addTodoMutation();

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newTodo = {
      title,
      content,
      isDone: false
    };

    addTodo(newTodo);
    resetValue();
  };

  return (
    <>
      <form className="flex gap-4" onSubmit={submitHandler}>
        <input
          className="border-solid border-2 border-black"
          placeholder="제목"
          name="title"
          onChange={valueChangeHandler}
          required
        />
        <input
          className="border-solid border-2 border-black"
          placeholder="내용"
          name="content"
          onChange={valueChangeHandler}
          required
        />
        <button type="submit" className="border-solid border-2 border-black">
          Add Todo
        </button>
      </form>
    </>
  );
};

export default InputSection;
