import logo from './logo.svg';
import './App.css';



import './components/style.css'

import MyInfo from "./components/MyInfo.js"
import Header from "./components/Header.js"
import Hello from "./components/hello.js"
import Footer from "./components/Footer.js"
import Contact from "./components/Contact"
import Todo from "./components/Todo.js"
import Joke from "./components/Joke"
import TodoItem from "./components/TodoItem"

import jokesData from "./data/jokesdata"
import todoData from './data/todoData';
function App() {
  const jokeComponents = jokesData.map(joke =>{
    return (
      <Joke key={joke.id} joke={joke}></Joke>
    )
  })

  return (
    <div>
      <Todo items={todoData}></Todo>
    </div>
  );
}

export default App;
