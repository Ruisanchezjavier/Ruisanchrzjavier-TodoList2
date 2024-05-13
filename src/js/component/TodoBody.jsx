import React, {useEffect, useState} from "react";
import "../../styles/TodoBody.css"
                        // display the tasks /
                        // each task will need a delete button /
                        

// the delete button will appear only on hover 

// be able to delete a task by clicking the trash icon
// we will use array.filter() to help with removing the task object
//creating a finction to delete the task, it will require the id



                        // a conditinal will be needed: / 
                        // if there ara tasks, list them /
                        // otherwise, display "No task. Add a task" /


const TodoBody = ({todos, setTodos}) => {

    //useEffect -> allows us to synchronize a component with an external system
    // We can use useEffect to make a fetch call and retrieve our todo list

    //useEffect has 2 parameters (callback function, dependency array)
    // the callback function will be where we use our fetch call and process the response
    //the dependency array is used to determine how the browser will rerender information

      useEffect(() => {
           fetch('https://playground.4geeks.com/todo/users/Javi')
           .then(response => response.json())
           .then(data => {
              setTodos(data.todos)
           })
           .catch(error => console.log('Error: ', error))

         
      }, [])

    // create a useEffect to Delete a task
    


    const deleteTask = (selectedTodoId) => {

        // filter the todos and keep any todo that does not match the id
        // assign it to a new array variable
        // then we call setTodos to set the filtered array

        let updatedTodos = todos.filter(todo => todo.id !== selectedTodoId);
        setTodos(updatedTodos);
    }

    let renderTasks = todos.map( todo => {
        return (
       <li key={todo.id} className="task-item">
         <span className="task">{todo.label}</span>
         <span>
            <svg xmlns="http://www.w3.org/2000/svg" 
                 width="18" 
                 height="18" 
                 fill="currentColor" 
                 className="bi bi-trash-fill" 
                 viewBox="0 0 16 16"
                 onClick={() => deleteTask(todo.id)}> 
                
               
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0"/>
            </svg>
        </span>
       </li>

        );
    })


    return (
		<>
		<section className="main">
            <ul className="task-list">
                 {todos.length !== 0 ? renderTasks : "No tasks, Add a task."}
            </ul>
        </section>
		</>
	);
};

export default TodoBody;