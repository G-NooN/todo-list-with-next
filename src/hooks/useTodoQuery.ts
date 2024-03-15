"use client";

import { TodoType } from "@/app/types/type";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const getTodoList = () => {
  const {
    data: todoList,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["todoList"],
    queryFn: async () => {
      const response = await fetch("http://localhost:3000/api/todoList");
      const { todoList } = await response.json();

      return todoList;
    }
  });

  return { todoList, isLoading, isError };
};

export const addTodoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: addTodo } = useMutation({
    mutationFn: async ({
      title,
      content
    }: {
      title: string;
      content: string;
    }) => {
      await fetch("http://localhost:3000/api/todoList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ title, content, isDone: false })
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todoList"] });
    }
  });

  return { addTodo };
};

export const updateTodoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: updateTodo } = useMutation({
    mutationFn: async ({ id, title, content, isDone }: TodoType) => {
      await fetch(`http://localhost:3000/api/todoList/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, title, content, isDone: !isDone })
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todoList"] });
    }
  });

  return { updateTodo };
};

export const deleteTodoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: deleteTodo } = useMutation({
    mutationFn: async (id: string) => {
      await fetch(`http://localhost:3000/api/todoList/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ id })
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["todoList"] });
    }
  });

  return { deleteTodo };
};
