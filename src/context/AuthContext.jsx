import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        return localStorage.getItem("isLoggedIn") === "true";
    });

    const loginAsGuest = () => {
        setIsAuthenticated(true);
        localStorage.setItem("isLoggedIn", "true");
    };

    const logout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem("isLoggedIn");
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, loginAsGuest, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);