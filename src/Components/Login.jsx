import { useState } from "react";
import React from "react";
import { useAuth } from "../Context/AuthContext";

export default function Login() {
    const { login, error } = useAuth();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        login(email, password);
    };

    return (
        <div className="min-h-screen bg-gray-600 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded shadow w-full max-w-sm">
                <h1 className="text-2xl font-bold text-center mb-2">Task Manager</h1>
                <p className="text-center text-gray-400 text-sm mb-6">Login to continue</p>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border p-2 rounded mb-3"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border p-2 rounded mb-3"
                    />

                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>

                <div className="mt-4 text-xs text-gray-400 text-center">
                    <p>Test accounts:</p>
                    <p>ali@gmail.com / 123456</p>
                    <p>sara@gmail.com / 123456</p>
                </div>
            </div>
        </div>
    );
}