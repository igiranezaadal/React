import React, {useState} from "react";

function ToDoList(){
    const [task,setTasks]=useState(["Eat Break fast", "Take a shower", "Work the dog"]);
    const [newTask,setNewTasks]=useState('');

    function HandleInputChange(event){
        setNewTasks(event.target.value);
    }
    function addTask(){
        setTasks(t=> [...t,newTask])
        setNewTasks("")
    }
    function deleteTask(){}
    function moveTaskUp(){}

    return(
    <div className="to-do-list">
        <h1>To-do-list</h1>
        <div className="">
            <input 
            type="text"
            placeholder="Enter a task..." 
            value={newTask}
            onChange={HandleInputChange} />
            <button
                className="add-button"
                onClick={addTask}
                >
                Add
            </button>
        </div>
        <ol>
            {task.map((task,index)=>
                <li key={index}>
                    <span className="text">{task}</span>
                    <button 
                        className="delete-button"
                        onClick={()=>deleteTask(index)}
                        >
                        delete
                    </button>
                    <button 
                        className="move-button"
                        onClick={()=>moveTaskUp(index)}>
                        ☝🏿
                    </button>
                    <button 
                        className="move-button"
                        onClick={()=>moveTaskDown(index)}>
                        👇🏿
                    </button>
                </li>
            )}
        </ol>
    </div>
);
}

export default ToDoList