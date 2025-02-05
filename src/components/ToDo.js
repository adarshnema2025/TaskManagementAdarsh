import React from 'react'
import { useState } from 'react'
import Progress from './Progress';
const ToDo = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value);
        // Logs input value on change
    };
    function sub(e) {
        e.preventDefault(); // Prevent form submission refresh

        if (text.trim() === "") return; // Prevent empty tasks

        setTodo([...todo, text]); // Append new task to todo array
        setText("");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={text} onChange={handleChange}></input>
                        <button className="btn btn-outline-success" type="submit" onClick={sub}>Add Task</button>
                    </form>
                </div>

            </nav>
           
            <Progress tasks={todo} />


        </div>
    )
}

export default ToDo
