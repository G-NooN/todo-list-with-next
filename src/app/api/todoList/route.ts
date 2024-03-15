export const GET = async (request: Request) => {
  const response = await fetch("http://localhost:4000/todoList");
  const todoList = await response.json();

  if (!todoList) {
    return new Response("Todolist Not Found", { status: 404 });
  }

  return Response.json({ todoList });
};

export const POST = async (request: Request) => {
  const { title, content } = await request.json();

  const response = await fetch("http://localhost:4000/todoList", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title, content, isDone: false })
  });

  const todo = await response.json();

  return Response.json({ todo });
};

export const PATCH = async (request: Request) => {
  const { id, title, contents, isDone } = await request.json();
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id, title, contents, isDone })
  });

  const todo = await response.json();

  return Response.json({ todo });
};

export const DELETE = async (request: Request) => {
  const { id } = await request.json();
  const response = await fetch(`http://localhost:4000/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  });

  const todo = await response.json();

  return Response.json({ todo });
};
