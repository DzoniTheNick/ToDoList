import React from 'react'
import {TiDelete} from "react-icons/ti";

function Form({task, tasks, setTask, setTasks}) {

    function addTask(){
        
        if(!task){
            alert("Please enter a task!");
        }else{
            const newTask = {
                id: tasks.length,
                value: task
            };
    
            setTasks(oldTasks => [...oldTasks, newTask]);
            setTask("");
        }
    }

    function deleteItem(id){
        const newTasks = tasks.filter(item => item.id !== id);
        setTasks(newTasks);
    }

  return (
    <div className='form'>
        <h1>TO DO LIST</h1>
        <div className='inputField'>
            <input id="taskInput" type="text" placeholder="Enter task" value={task} onChange={e => setTask(e.target.value)}>
            </input>
            <button className='addTask' onClick={addTask}>Add</button>
        </div>
        <div className='itemList'>
            <ul>
                {tasks.map(item => {
                    return(
                        <li key={item.id}>{item.value}<TiDelete className='deleteBtn' onClick={() => deleteItem(item.id)}></TiDelete></li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Form