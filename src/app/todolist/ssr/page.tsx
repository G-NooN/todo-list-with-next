import { TodoType } from "@/app/types/type";
import Link from "next/link";

const SSRPage = async () => {
  const response = await fetch("http://localhost:4000/todoList", {
    cache: "no-cache"
  });
  const { todoList } = await response.json();

  return (
    <div>
      <h1>SSRPage</h1>
      <ul>
        {todoList.map((todo: TodoType) => (
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.content}</p>
            <p>{todo.isDone ? "Done" : "Working"}</p>
          </li>
        ))}
      </ul>
      <Link href={"/report"}>Show Report</Link>
    </div>
  );
};

export default SSRPage;
