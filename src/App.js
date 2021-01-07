import React from "react"
import './App.css'
import Todo from "./components/Todo"

import "./style/style.css"

import todoData from "./data/todoData"
import TodoItem from "./components/TodoItem"
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : "Tong",
      todos : todoData
    }
  }
  render(){
    const todoItem = this.state.todos.map(item =>{
      return (
        <TodoItem key={item.id} item={item}></TodoItem>
      )
    })
    return (
      <div className="todo-list">
        {todoItem}
      </div>
    )
  }
}


export default App