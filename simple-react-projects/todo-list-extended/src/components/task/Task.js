import React from "react";
import { Button } from "@mui/material";

export default function Task(props){
    return(
        <div>
            <h1>{props.title}</h1>
            <Button variant="outlined" size="small" onClick={() => props.onTaskDelete(props.id)}>Delete task</Button>
        </div>
    )
}