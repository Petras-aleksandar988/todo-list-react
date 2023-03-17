import "./App.css"
import TodoList from "./TodoList";
import { useState, useRef ,useEffect} from "react";
import { v4 as uuidv4 } from "uuid";
function App() {
  const inputRef = useRef()
  const [todos, setTodos] = useState([])
  const storageKey = "todos"

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(storageKey))
    
     if(storageTodos) setTodos(storageTodos)
    
  }, [])
  
  
  useEffect(() => {
    
      localStorage.setItem(storageKey, JSON.stringify(todos))
    
  }
    , [todos])
  
  
  function toggleTodo(id) {
    const newTodos = [...todos]
    
    const todo = newTodos.find((todo) => todo.id === id);
    todo.change = !todo.change
    
    setTodos(newTodos)
    
  }
  // add Todo
  function handleAddTodo(e) {
    const name = inputRef.current.value
    if (name === "") return 
    setTodos(prevTodos => {
      return [...prevTodos,{id:uuidv4(), name: name, change: false}]
    })
    inputRef.current.value = null
  }
  // "delete Todo
  function handleDeleteTodo() {
    const incompleteTodos = todos.filter(todo => !todo.change)
    console.log(incompleteTodos);
    setTodos(incompleteTodos)
  }
  return (
    <>
      <TodoList toggleTodo={toggleTodo} todoList={todos} />
      <div  >
        <input ref={inputRef} type="text" />
        <button onClick={handleAddTodo}>Add Todo</button>
        <button onClick={handleDeleteTodo}>Delete Todo</button>
      </div>
      <div className="left-todo">{todos.filter((todo) => !todo.change).length} left to do</div>
    </>
  );
}

export default App;


