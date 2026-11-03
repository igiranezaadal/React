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
    function deleteTask(index){
        const updatedTasks=task.filter((_, i)=> i !== index);
        setTasks(updatedTasks);
    }
    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index - 1]] =
            [updatedTasks[index - 1], updatedTasks[index]] ;
            setTasks(updatedTasks);
        }
    }
    function moveTaskDown(index){
        if(index<task.length - 1){
            const updatedTasks = [...task];
            [updatedTasks[index], updatedTasks[index + 1]] =
            [updatedTasks[index + 1], updatedTasks[index]] ;
            setTasks(updatedTasks);
        }
    }

    return(
    <>
        <nav className="App-header">
            <h1 className="App-title">📑</h1>
            <section className="App-nav">
                <span className="nav-item">Order</span>
                <span className="nav-item">Plan</span>
                <span className="nav-item">contacts</span>
                <span className="nav-item">about us</span>
            </section>
        </nav>
        <div className="to-do-list">
            <h1>To-do-list</h1>
            <div className="">
                <input type="text" placeholder="Enter a task..." value={newTask}
                onChange={HandleInputChange} />
                <button
                    className="add-button"
                    onClick={addTask}
                    >
                    Add
                </button>
            </div>
            <ol>
                {task.map((task,index)=> //fix error here
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
    </>
);
}

export default ToDoList