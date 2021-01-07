import React from "react"
import './App.css'
import Todo from "./components/Todo"

import "./style/style.css"

import todoData from "./data/todoData"
import TodoItem from "./components/TodoItem"


import ClickMe from "./components/ClickMe"
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : "Tong",
      todos : todoData,
      count : 0
    }
    this.handleClickCounting = this.handleClickCounting.bind(this)
    this.handleResetButton = this.handleResetButton.bind(this)
  }

  handleClickCounting (){
    this.setState((prevState) =>{
      return {
          count : prevState.count + 1
      }
    })
  }

  handleResetButton(){
    this.setState((prevState) => {
      return {
        count : 0
      }
    })
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
        <h1>{this.state.count}</h1>
        <div>
          <button onClick={this.handleClickCounting}>Change!</button>
          <button onClick={this.handleResetButton} style={{margin:"10px"}}>Reset</button>
        </div>
      </div>
    )
  }
}
export default App