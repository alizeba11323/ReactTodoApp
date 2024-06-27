import Todo from "./Todo";

function Todos({
  todos,
  handleDeleteTodo,
  handleUpdateTodo,
  handleCompleteToggle,
}) {
  return (
    <div>
      {todos?.map((todo) => (
        <Todo
          key={todo?.id}
          todo={todo}
          handleDeleteTodo={handleDeleteTodo}
          handleUpdateTodo={handleUpdateTodo}
          handleCompleteToggle={handleCompleteToggle}
        />
      ))}
    </div>
  );
}

export default Todos;
