import logo from './logo.svg';
import './App.css';
import React, { Component } from "react"


import './components/style.css'

import MyInfo from "./components/MyInfo.js"
// import Header from "./components/Header.js"
import Hello from "./components/hello.js"
import Footer from "./components/Footer.js"
import Contact from "./components/Contact"
import Todo from "./components/Todo.js"
import Joke from "./components/Joke"
import TodoItem from "./components/TodoItem"

import jokesData from "./data/jokesdata"
import todoData from './data/todoData';



class App extends React.Component{
  constructor(){
    super()
    this.state = {
      name : "tong",
      age : 23,
      answer : "Yes"
    }
  }
  getJokeComponent(){
    const jokeComponents = jokesData.map(joke =>{
      return (
        <Joke key={joke.id} joke={joke}></Joke>
        )
      })
    return jokeComponents
  }
  render(){
    return (
    <div>
      <Header username="vschool"></Header>

      <h1>{this.state.name}</h1>
      <h3>{this.state.age}</h3>

      <h3>{this.state.answer}</h3>
      <Todo items={todoData}></Todo>
      <Greeting></Greeting>
    </div>
    )
  }
}

class Header extends React.Component {
  render(){
    return (
    <header>
        <p>Welcome, {this.props.username}!</p>
      </header>
    )
  }
}

class Greeting extends Component {
  render () {
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12){
      timeOfDay = "morning"
    }
    else if (hours >= 12 && hours < 17){
      timeOfDay = "afternoon"
    }
    else{
      timeOfDay = "night"
    }

    return (
      <h1> Good {timeOfDay} to you, sir or madam!</h1>
    )
  }
}
export default App;
