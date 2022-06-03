import './App.css';
import React, {useState} from 'react';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Form from './components/Form';

function App() {

  //State hook
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <div className="App">
      <NavBar></NavBar>
      <Form task={task} tasks={tasks} setTask={setTask} setTasks={setTasks}></Form>
      <Footer></Footer>
    </div>
  );
}

export default App;
