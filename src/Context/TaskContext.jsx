import { createContext, useContext, useState } from "react";
import React from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, { ...task, id: Date.now(), completed: false }]);
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((t) => t.id !== id));
    };

    const toggleComplete = (id) => {
        setTasks(tasks.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t
        ));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTask() {
    return useContext(TaskContext);
}