import React, { useState } from "react";
import Task from "../task-component/Task";
import "./PaperPage.css"

export default function PaperPage() {

    const [tasks, setTasks] = useState([]);
    const [finished, setFinished] = useState(false);
    const [newTaskText, setNewTaskText] = useState("");

    let key = 1;

    const handleTaskNameInput = (event) => {
        const text = event.target.value;
        setNewTaskText(text)
    }

    const handleNewTaskSubmit = () => {
        if (newTaskText.trim()) {
            setTasks([...tasks, newTaskText])
            setNewTaskText("")
        }
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleNewTaskSubmit();
        }
    }

    return (
        <div className="paper-page">
            <ul className="tasks-list">
                
                    {
                        tasks.map((t) => (
                            <li className="task"><Task key={key++} text={t} /></li>
                        ))

                    }
                
            </ul>

            <div className="new-task-form">
                <input onKeyDown={handleKeyDown} onInput={handleTaskNameInput} className="new-task-input" type="text" placeholder="Enter a new task" value={newTaskText}></input>
                <button className="new-task-submit-button" onClick={handleNewTaskSubmit}>Submit</button>
            </div>
        </div>
    );
}