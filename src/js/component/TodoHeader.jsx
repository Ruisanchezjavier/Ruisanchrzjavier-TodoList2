import React, {useState} from "react";
import "../../styles/TodoHeader.css"





const TodoHeader = ({todos, setTodos}) => {
    const [newTask, setNewTask] = useState("")
    const [idCounter, setIdCounter] = useState(0);

    const addTask = () => {

      let newTodoObject = {
          id: idCounter,
          label: newTask, 
      };
    

      fetch('https://playground.4geeks.com/todo/todos/Javi', {
        method: 'POST',
        body: JSON.stringify(newTodoObject),
        headers: {"Content-Type": 'application/json'}
      })
      .then(response => {
        if (!response.ok) throw Error(response.statusText)
            return(response.json())
      }) 
      .then(data => {
        setTodos([...todos, data]);
        setIdCounter(idCounter + 1);
      })
      .catch(error => console.log(error))         
    }
    //text validation
    const checkTextBox = () => {  
        let textbox = document.querySelector(".task-input");
        if (textbox.value === "") {
            alert("Please add a task.")
        } else {
            addTask();
            setNewTask("");
        }
    }


	return (
		<>
		<header className="header">
            <h1>todos</h1>
            <input
            className="task-input"
            type="text"
            placeholder="What needs to be done?"
             value={newTask}
             onChange={event => setNewTask(event.target.value)}
            />
            <button
             onClick={checkTextBox}
            >Add Task</button>
        </header>
		</>
	);
};

export default TodoHeader;