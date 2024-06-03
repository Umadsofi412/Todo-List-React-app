import './App.css';
import TodoCreate from './compnents/TodoCreate';
import TodoList from './compnents/TodoList';
import { useState } from 'react';
const App = () => {
  const [todos,setTodos] = useState([])

  const createTodo = (title) =>{
    const newTodo = {id: crypto.randomUUID(),title:title, compeleted: false}
    const UpdateTodos = [...todos,newTodo]
    setTodos(UpdateTodos)
  }
  const removeTodo = (id) => {
    const UpdateTodos = todos.filter((todo) => todo.id !== id);
    setTodos(UpdateTodos);
  }
  const changeTodo = (id, title,compeleted = false) => {
    const UpdateTodos = todos.map((todo) => {
      if(todo.id === id){
        return{...todo, title, compeleted}
      }
      return todo;
    });
    setTodos(UpdateTodos);
  };
    

  return (
    <main className='main'>
      <h1>React Todo</h1>
      <TodoCreate createTodo = {createTodo} />
      <TodoList  todos ={todos} removeTodo= {removeTodo} changeTodo = {changeTodo} />
    </main>
  )
}

export default App;
