export type TodoType = {
  id: number;
  todo: string;
  completed: boolean;
  userId: number;
};

export type TodoListType = {
  todos: TodoType[];
};

export default async function getTodos() {
  const res = await fetch('https://dummyjson.com/todos');
  const data: TodoListType = await res.json();

  return data;
}
