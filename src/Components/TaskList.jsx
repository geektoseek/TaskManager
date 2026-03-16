import { useTask } from "../Context/TaskContext";
import TaskForm from "./Form";
import React from "react";

export default function TaskList() {
    const { tasks, deleteTask, toggleComplete } = useTask();

    const handleEdit = (task) => {
        TaskForm.startEdit(task);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    if (tasks.length === 0) {
        return <p className="text-center text-gray-400">No tasks yet!</p>;
    }

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id} className="bg-white p-4 rounded shadow mb-3">

                    <h3 className={`text-lg font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
                        {task.title}
                    </h3>

                    <p className="text-gray-500 text-sm">{task.description}</p>
                    <p className="text-sm mt-1">Priority: <span className="font-medium">{task.priority}</span></p>
                    <p className="text-sm">Due: {task.dueDate}</p>
                    <p className="text-sm">Assigned to: <span className="font-medium">{task.assignedTo || "Unassigned"}</span></p>

                    <div className="flex gap-2 mt-3">
                        <button
                            onClick={() => toggleComplete(task.id)}
                            className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm"
                        >
                            {task.completed ? "Undo" : "Complete"}
                        </button>

                        <button
                            onClick={() => handleEdit(task)}
                            className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded text-sm"
                        >
                            Edit
                        </button>

                        <button
                            onClick={() => deleteTask(task.id)}
                            className="bg-red-100 text-red-700 px-3 py-1 rounded text-sm"
                        >
                            Delete
                        </button>
                    </div>

                </div>
            ))}
        </div>
    );
}