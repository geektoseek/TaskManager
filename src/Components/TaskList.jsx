import { useTask } from "../context/TaskContext";
import TaskCard from "./TaskCard";
import React from "react";

export default function TaskList() {
    const { tasks } = useTask();

    if (tasks.length === 0) {
        return <p className="text-center text-gray-400 mt-10">No tasks yet. Add one above!</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}