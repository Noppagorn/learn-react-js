import logo from './logo.svg';
import './App.css';

import './components/style.css'

import MyInfo from "./components/MyInfo.js"
import Header from "./components/Header.js"
import Hello from "./components/hello.js"
import Footer from "./components/Footer.js"
import Contact from "./components/Contact"
import Todo from "./components/Todo.js"

function App() {
  return (
    <div>
      <Contact></Contact>
      {/* <Header/>
      <Hello/>
      <Footer/>
      <Todo/> */}
    </div>
  );
}

export default App;
