import { useState } from "react";
import React from "react";
import { useTask } from "../Context/TaskContext";

const users = ["Ali", "Ahmed", "Sara", "Usman", "Ayesha"];

const emptyForm = {
    title: "",
    description: "",
    priority: "medium",
    dueDate: "",
    assignedTo: "",
};

export default function TaskForm() {
    const { addTask, editTask } = useTask();
    const [form, setForm] = useState(emptyForm);
    const [editingId, setEditingId] = useState(null);

    // Expose startEdit so TaskList can call it
    TaskForm.startEdit = (task) => {
        setForm({
            title: task.title,
            description: task.description,
            priority: task.priority,
            dueDate: task.dueDate,
            assignedTo: task.assignedTo,
        });
        setEditingId(task.id);
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.title || !form.dueDate) return alert("Title and due date are required!");

        if (editingId) {
            editTask(editingId, form);
            setEditingId(null);
        } else {
            addTask(form);
        }

        setForm(emptyForm);
    };

    const handleCancel = () => {
        setForm(emptyForm);
        setEditingId(null);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-gray-600 p-6 rounded shadow mb-6">
            <h2 className="text-xl font-bold mb-4">
                {editingId ? "Edit Task" : "Add Task"}
            </h2>

            <input
                type="text"
                name="title"
                placeholder="Title *"
                value={form.title}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-3"
            />

            <textarea
                name="description"
                placeholder="Description"
                value={form.description}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-3"
                rows={3}
            />

            <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-3"
            >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
            </select>

            <input
                type="date"
                name="dueDate"
                value={form.dueDate}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-3"
            />

            <select
                name="assignedTo"
                value={form.assignedTo}
                onChange={handleChange}
                className="w-full border p-2 rounded mb-4"
            >
                <option value="">-- Assign to User --</option>
                {users.map((user) => (
                    <option key={user} value={user}>{user}</option>
                ))}
            </select>

            <div className="flex gap-2">
                <button
                    type="submit"
                    className="flex-1 bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                >
                    {editingId ? "Update Task" : "Add Task"}
                </button>

                {editingId && (
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="flex-1 bg-gray-200 text-gray-700 p-2 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                )}
            </div>
        </form>
    );
}