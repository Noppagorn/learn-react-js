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


import jokesData from "./data/jokesdata"
function App() {
  const jokeComponents = jokesData.map(joke =>{
    return (
      <Joke key={joke.id} joke={joke}></Joke>
    )
  })

  return (
    <div>
      {jokeComponents}
    </div>
  );
}

export default App;
