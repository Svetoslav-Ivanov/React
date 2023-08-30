import React from "react";
import Task from "../task/Task";

export default function TaskList(props) {


    return props.tasks.map(task => (
        <Task title={task.title} id={task.id} onTaskDelete={(id) => props.onTaskDelete(id)} />
    ));
}