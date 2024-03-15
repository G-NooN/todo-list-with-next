"use client";

import InputSection from "@/components/todoList/InputSection";
import TodoListSection from "@/components/todoList/TodoListSection";
import { getTodoList } from "@/hooks/useTodoQuery";
import { useRouter } from "next/navigation";

const CSRPage = () => {
  const router = useRouter();
  const { todoList, isLoading, isError } = getTodoList();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러...</div>;
  }

  return (
    <>
      <InputSection />
      <TodoListSection todoList={todoList} isCompleted={false} />
      <TodoListSection todoList={todoList} isCompleted={true} />
      <button
        className="border-solid border-2 border-black"
        onClick={() => {
          router.push("/report");
        }}
      >
        Show Report
      </button>
    </>
  );
};

export default CSRPage;
