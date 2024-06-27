import { useState } from "react";

function AddTodo({ handleAddTodo }) {
  const [title, setTitle] = useState("");
  const handleAdd = () => {
    handleAddTodo(title);
    setTitle("");
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter Todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
}

export default AddTodo;
