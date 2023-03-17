import Todo from "./Todo"
export default function TodoList({todoList,toggleTodo}) {
  return (
      todoList.map(todo => {
        return < Todo toggleTodo={toggleTodo } key={todo.id} todo={ todo} />
   })
  )
}
