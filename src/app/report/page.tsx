import { TodoType } from "../types/type";

const ReportPage = async () => {
  const response = await fetch("http://localhost:4000/todoList", {
    next: {
      revalidate: 10
    }
  });
  const todoList = await response.json();

  const doneListCount = todoList.filter(
    (todo: TodoType) => todo.isDone === true
  ).length;
  const workingListCount = todoList.length - doneListCount;

  return (
    <>
      <h1>ReportPage</h1>
      <p>현재까지 {todoList.length} 개의 todolist가 등록되었습니다.</p>
      <p>
        현재까지 {doneListCount}개의 완료 리스트, {workingListCount}개의 할 일
        리스트가 존재합니다.
      </p>
    </>
  );
};

export default ReportPage;
