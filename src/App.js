import React from "react";
import AddTodoForm from "./components/Add todo";
import TodoList from "./components/todo-list";

function App() {
  return(
    <div className="section">
      <AddTodoForm/>
      <TodoList/>
      </div>
  )
  
}
export default App;
