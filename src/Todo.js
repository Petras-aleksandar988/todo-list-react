export default function Todo({ todo, toggleTodo }) {
  // function handleChange() {
  //   toggleTodo(todo.id)
  // }
  return (
    
      <label >
        <input
          type="checkbox"
          onClick={() => {
            toggleTodo(todo.id);
          }}
          defaultChecked={todo.change}
          />
          <div>{todo.name}</div>
      </label>
    
  );
}
