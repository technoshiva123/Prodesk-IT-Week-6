import React from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { loginAsGuest } = useAuth();
    const navigate = useNavigate();

    const handleLogin = () => {
        loginAsGuest();
        navigate('/checkout');
    };

    return (
        <div className="min-h-[70vh] flex items-center justify-center bg-white px-6">
            <div className="max-w-md w-full text-center space-y-8 p-12 border border-gray-100 rounded-[40px] shadow-2xl shadow-violet-100/50">
                <div className="inline-block p-4 bg-violet-50 rounded-2xl mb-4">
                    <h2 className="text-3xl font-black italic tracking-tighter text-[#171220]">
                        Shop<span className="text-[#7c3aed]">Zone.</span>
                    </h2>
                </div>
                <p className="text-gray-400 text-sm font-medium">Log in as a guest to proceed with your premium purchase.</p>
                <button
                    onClick={handleLogin}
                    className="w-full bg-[#7c3aed] text-white py-4 rounded-2xl font-bold hover:bg-[#6d28d9] transition-all shadow-lg shadow-violet-200 active:scale-95"
                >
                    Login as Guest
                </button>
            </div>
        </div>
    );
};

export default Login;