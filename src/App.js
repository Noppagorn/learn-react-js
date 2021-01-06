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
function App() {
  return (
    <div>
      <Joke question="What is the cat?" punchLing="Answer"/>
      <Joke  punchLing="Answer that not have question"/>
      <Joke question="What" punchLing="Answer"/>
      <Joke question="What" punchLing="Answer"/>
      <br/>
    </div>
  );
}

export default App;
