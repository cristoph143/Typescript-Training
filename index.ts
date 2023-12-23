import axios from "axios";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

const url = "https://jsonplaceholder.typicode.com/todos/1";

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const complete = todo.completed;
  logTodo(id, title, complete);
});

const logTodo = (id: number, title: string, completed: boolean) => {
    console.log(`This ID is ${id} with title ${title} is complete ${completed}`);

};
