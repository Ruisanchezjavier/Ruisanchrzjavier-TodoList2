import React, {useState} from "react";
import "../../styles/TodoHeader.css"





const TodoHeader = ({todos, setTodos}) => {
    const [newTask, setNewTask] = useState("")
    const [idCounter, setIdCounter] = useState(0);

    const addTask = () => {
      console.log("creating new task: ", newTask);


      let newTodoObject = {
          id: idCounter,
          label: newTask, 
      };
      console.log("new object:", newTodoObject)

       setTodos([...todos, newTodoObject]);
        setIdCounter([idCounter + 1]);
        }
    

    const checkTextBox = () => {
        let textBox = document.querySelector(".task-input")
        if (textBox.value === "") {
        alert("Please add task.") 
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