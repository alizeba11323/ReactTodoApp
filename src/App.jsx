import { useState } from "react";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = (title) => {
    const todo = { id: crypto.randomUUID(), title, completed: false };
    setTodos((prev) => [todo, ...prev]);
  };
  const handleDeleteTodo = (id) => {
    const filterTodo = todos.filter((todo) => todo.id !== id);
    setTodos(filterTodo);
  };

  const handleUpdateTodo = (id, title) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          title,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const handleCompleteToggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  return (
    <div className="">
      <h1>Todo App</h1>
      <AddTodo handleAddTodo={handleAddTodo} />
      <Todos
        todos={todos}
        handleDeleteTodo={handleDeleteTodo}
        handleUpdateTodo={handleUpdateTodo}
        handleCompleteToggle={handleCompleteToggle}
      />
    </div>
  );
}

export default App;
