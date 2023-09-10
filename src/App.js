//import logo from './logo.svg';
import './App.css';
import { Fragment, useEffect, useState } from 'react'
import TodoItem from './components/todoItem';

function App() {
  const [todoItems, setTodoItems] = useState(null)
   
  useEffect(() => {
    //does smt on load
    console.log("Locked and loaded, bozz");
    fetch("http://localhost:8080/api/todoItems")
    .then((response) => response.json())
    .then((data) => {
      console.log("Todo Items list: ", data)
      setTodoItems(data)
    })
  })
  
  
  return (
    <>
      {todoItems ? todoItems.map((todoItem) =>  
      {
        return (
        <TodoItem data={todoItem} key={todoItem.id}/>
        )
      }) 
      : "loading null"}
    </>
  )
}

export default App
