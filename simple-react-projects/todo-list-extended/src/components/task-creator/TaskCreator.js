import React, { useState } from "react";
import { Button } from "@mui/material";

export default function TaskCreator(props) {

    const [title, setTitle] = useState("");

    const changeTitle = (event) => {
        setTitle(event.target.value);
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            handleTaskCreate();
        }
    }

    const handleTaskCreate = () => {
        if (title.trim().length > 0) {
            props.onTaskCreate(title);
            setTitle("");
        }
    }

    return (
        <>
            <input onInput={changeTitle} onKeyDown={handleKeyDown} type="text" placeholder="Enter task name" value={title}></input>
            <Button variant="outlined" onClick={handleTaskCreate} size="small">Create task</Button>
        </>
    )
}