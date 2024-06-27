import { useState } from "react";

function Todo({
  todo,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCompleteToggle,
}) {
  const [checked, setChecked] = useState(todo.completed);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState(todo?.title);
  const handleShow = () => {
    setShow((prev) => !prev);
    setTitle(todo.title);
  };
  const handleUpdate = () => {
    handleUpdateTodo(todo.id, title);
    setShow(false);
  };
  return (
    <div
      style={{
        padding: "10px",
        border: "2px solid gray",
        marginTop: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <input
        type="checkbox"
        checked={checked}
        value={checked}
        onChange={() => {
          setChecked((prev) => !prev);
          handleCompleteToggle(todo.id);
        }}
      />
      {show ? (
        <>
          <input
            type="text"
            placeholder="Enter Todo title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <button onClick={handleUpdate}>Update</button>
        </>
      ) : (
        <p style={{ textDecoration: todo?.completed ? "line-through" : "" }}>
          {todo?.title}
        </p>
      )}

      <div>
        <button onClick={() => handleDeleteTodo(todo?.id)}>Delete</button>
        {show ? (
          <button onClick={handleShow}>Cancel</button>
        ) : (
          <button onClick={handleShow}>Edit</button>
        )}
      </div>
    </div>
  );
}

export default Todo;
