import { useTask } from "../context/TaskContext";
import React from "react";

export default function TaskCard({ task }) {
    const { toggleComplete, deleteTask } = useTask();

    const priorityColor = {
        high: "text-red-500",
        medium: "text-yellow-500",
        low: "text-green-500",
    };

    return (
        <div className={`bg-white p-4 rounded-lg shadow mb-3 border-l-4 ${task.completed ? "border-green-400 opacity-60" : "border-blue-400"}`}>
            <div className="flex justify-between items-start">
                <div className="flex-1">
                    <h3 className={`font-semibold text-lg text-black ${task.completed ? "line-through text-gray-400" : ""}`}>
                        {task.title}
                    </h3>
                    {task.description && <p className="text-gray-500 text-sm mt-1">{task.description}</p>}
                    <div className="flex gap-4 mt-2 text-sm">
                        <span className={`font-medium ${priorityColor[task.priority]}`}>
                            {task.priority.toUpperCase()}
                        </span>
                        <span className="text-gray-400">📅 {task.dueDate}</span>
                    </div>
                </div>

                <div className="flex gap-2 ml-4">
                    <button
                        onClick={() => toggleComplete(task.id)}
                        className="bg-green-100 text-green-600 px-3 py-1 rounded text-sm hover:bg-green-200"
                    >
                        {task.completed ? "Undo" : "Done"}
                    </button>
                    <button
                        onClick={() => deleteTask(task.id)}
                        className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-200"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}