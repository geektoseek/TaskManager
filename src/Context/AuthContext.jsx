import { createContext, useContext, useState } from "react";
import React from "react";

const AuthContext = createContext();

const users = [
    { email: "ali@gmail.com", password: "123456", name: "Ali" },
    { email: "sara@gmail.com", password: "123456", name: "Sara" },
    { email: "ahmed@gmail.com", password: "123456", name: "Ahmed" },
];

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [error, setError] = useState("");

    const login = (email, password) => {
        const found = users.find(
            (u) => u.email === email && u.password === password
        );
        if (found) {
            setCurrentUser(found);
            setError("");
        } else {
            setError("Invalid email or password!");
        }
    };

    const logout = () => {
        setCurrentUser(null);
    };

    return (
        <AuthContext.Provider value={{ currentUser, login, logout, error }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}