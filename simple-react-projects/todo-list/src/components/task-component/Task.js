import React, { useState } from "react";
import "./Task.css";

export default function Task(props) {

    const [className, setClassName] = useState("task");

    const handleCheckboxChange = () => {
        setClassName(className === "task finished" ? "task" : "task finished");
    };

    return (
        <div className={className}>
            <span>{props.text}</span>
            <input className="checkbox" type="checkbox" onChange={handleCheckboxChange}></input>
        </div>
    )
}