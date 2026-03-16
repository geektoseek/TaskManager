import { useState } from "react";
import React from "react";
import { useTask } from "../Context/TaskContext";

export default function TaskForm() {
    const { addTask } = useTask();
    const [form, setForm] = useState({ title: "", description: "", priority: "medium", dueDate: "" });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.dueDate) return alert("Title and Due Date are required!");
        addTask(form);
        setForm({ title: "", description: "", priority: "medium", dueDate: "" });
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-600 p-6 rounded-lg shadow mb-6">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>

            <input
                className="w-full border rounded p-2 mb-3"
                placeholder="Task Title *"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
            />

            <textarea
                className="w-full border rounded p-2 mb-3"
                placeholder="Description"
                rows={3}
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
            />

            <select
                className="w-full border rounded p-2 mb-3"
                value={form.priority}
                onChange={(e) => setForm({ ...form, priority: e.target.value })}
            >
                <option value="low">Low Priority</option>
                <option value="medium">Medium Priority</option>
                <option value="high">High Priority</option>
            </select>

            <input
                type="date"
                className="w-full border rounded p-2 mb-4"
                value={form.dueDate}
                onChange={(e) => setForm({ ...form, dueDate: e.target.value })}
            />

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
                Add Task
            </button>
        </form>
    );
}