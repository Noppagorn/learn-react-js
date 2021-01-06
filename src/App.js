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
  // const nums = [1,2,3,4,5,6,7]
  // const doubled =  nums.map((num) => {
  //   return num * 2
  // })
  // console.log(doubled)

  const jokeComponents = jokesData.map(joke =>{
    return (
      <Joke key={joke.id} question={joke.question} punchLing={joke.punchLine}></Joke>
    )
  })

  return (
    <div>
      {jokeComponents}
    </div>
  );
}

export default App;
