"use client";

import { TodoType } from "@/app/types/type";
import { deleteTodoMutation, updateTodoMutation } from "@/hooks/useTodoQuery";

const TodoListSection = ({
  todoList,
  isCompleted
}: {
  todoList: TodoType[];
  isCompleted: boolean;
}) => {
  const { updateTodo } = updateTodoMutation();
  const { deleteTodo } = deleteTodoMutation();

  return (
    <div className="m-4">
      <h2 className="font-bold">{isCompleted ? "Done" : "Working"}</h2>
      <ul>
        {todoList
          ?.filter((todo) => todo.isDone === isCompleted)
          .map((todo) => (
            <li key={todo.id}>
              <div>
                <h3>제목: {todo.title}</h3>
                <p>내용: {todo.content}</p>
              </div>
              <div className="flex gap-4">
                <button
                  className="border-solid border-2 border-black"
                  onClick={() => updateTodo(todo)}
                >
                  {todo.isDone ? "Change to Working" : "Change to Done"}
                </button>
                <button
                  className="border-solid border-2 border-black"
                  onClick={() => deleteTodo(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoListSection;
