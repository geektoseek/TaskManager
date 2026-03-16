import { TaskProvider } from "./Context/TaskContext";
import { AuthProvider, useAuth } from "./Context/AuthContext";
import TaskForm from "./Components/Form";
import React from "react";
import TaskList from "./Components/TaskList";
import Login from "./Components/Login";

function AppContent() {
  const { currentUser, logout } = useAuth();

  if (!currentUser) {
    return <Login />;
  }

  return (
    <TaskProvider>
      <div className="min-h-screen bg-gray-700 py-10 px-4">

        <div className="max-w-xl mx-auto flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Task Manager</h1>
          <div className="flex items-center gap-3">
            <span className="text-white text-sm">👋 {currentUser.name}</span>
            <button
              onClick={logout}
              className="bg-red-100 text-red-600 px-3 py-1 rounded text-sm hover:bg-red-200"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="max-w-xl mx-auto">
          <TaskForm />
          <TaskList />
        </div>

      </div>
    </TaskProvider>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}