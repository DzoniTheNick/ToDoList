import './App.css';
import React, {useState} from 'react';
import Footer from "./components/Footer";
import NavBar from './components/NavBar';
import Form from './components/Form';
import About from './components/About';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  //State hook
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  return (
    <BrowserRouter className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={
          <Form task={task} tasks={tasks} setTask={setTask} setTasks={setTasks}></Form>
        }>
        </Route>
        <Route path="/about" element={
          <About></About>
        }>
        </Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
