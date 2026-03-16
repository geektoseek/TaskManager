import { TaskProvider } from "./Context/TaskContext";
import TaskForm from "./Components/Form";
import React from "react";
import TaskList from "./Components/TaskList";

export default function App() {
  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-600 py-10 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Task Manager</h1>
        <div className="max-w-xl mx-auto">
          <TaskForm />
          <TaskList />
        </div>
      </div>
    </TaskProvider>
  );
}