import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { cart } = useCart();
    const { isAuthenticated, logout } = useAuth();
    const navigate = useNavigate();

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    const handleAuthAction = () => {
        if (isAuthenticated) {
            logout();
        } else {
            navigate('/login');
        }
    };

    return (
        <nav className="h-[68px] sticky top-0 w-full px-6 md:px-16 lg:px-24 flex items-center justify-between z-50 bg-gradient-to-r from-[#171220] to-[#9266ff] shadow-sm">

            <Link to="/" className="flex items-center gap-2.5 group no-underline">
                <div className="w-10 h-10 bg-gradient-to-br from-[#7c3aed] to-[#9266ff] rounded-xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 shadow-[0_8px_20px_-6px_rgba(124,58,237,0.3)] border border-white/10">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="drop-shadow-sm">
                        <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" /><path d="M3 6h18" /><path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                </div>
                <span className="text-2xl font-[900] tracking-tighter text-white italic antialiased transition-colors duration-300">
                    Shop<span className="text-[#a78bfa] drop-shadow-[0_0_1px_rgba(167,139,250,0.5)]">Zone.</span>
                </span>
            </Link>

            {/* --- MENU LINKS --- */}
            <ul className="hidden md:flex items-center gap-9 text-[15px] font-normal text-white/90">
                <li><Link className="hover:text-white transition-all duration-300" to="/">Home</Link></li>
                <li><Link className="hover:text-white transition-all duration-300" to="/shop">Shop</Link></li>
                <li>
                    <Link className="hover:text-white transition-all duration-300 flex items-center gap-1.5" to="/cart">
                        Cart
                        {cartCount > 0 && (
                            <span className="bg-white text-[#171220] text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[18px] text-center">
                                {cartCount}
                            </span>
                        )}
                    </Link>
                </li>
                <li><Link className="hover:text-white transition-all duration-300" to="/about">About</Link></li>

                <li><Link className="hover:text-white transition-all duration-300" to="/contact">Contact</Link></li>
            </ul>

            {/* --- DYNAMIC BUTTON --- */}
            <button
                onClick={handleAuthAction}
                className={`hidden md:block px-7 py-2 rounded-full text-[14px] font-medium shadow-sm transition-all active:scale-95 ${isAuthenticated
                        ? "bg-red-500 text-white hover:bg-red-600"
                        : "bg-white text-violet-700 hover:bg-opacity-95"
                    }`}
            >
                {isAuthenticated ? "Logout" : "Get started"}
            </button>

            {/* --- MOBILE TOGGLE --- */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>

            {/* --- MOBILE DRAWER --- */}
            <div className={`fixed inset-0 bg-[#7c3aed] z-[100] flex flex-col items-center justify-center space-y-8 text-white transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'} md:hidden`}>
                <button onClick={() => setIsMenuOpen(false)} className="absolute top-6 right-8 text-3xl">&times;</button>
                <Link to="/" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal">Home</Link>
                <Link to="/shop" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal">Shop</Link>
                <Link to="/cart" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal flex items-center gap-2">
                    Cart
                    {cartCount > 0 && (
                        <span className="bg-white text-[#7c3aed] text-xs font-bold px-2 py-0.5 rounded-full">
                            {cartCount}
                        </span>
                    )}
                </Link>
                <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal">About</Link>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="text-xl font-normal">Contact</Link>

                {/* Mobile Logout Button */}
                {isAuthenticated && (
                    <button onClick={() => { logout(); setIsMenuOpen(false); }} className="text-xl font-bold text-red-200">
                        Logout
                    </button>
                )}
            </div>
        </nav>
    )
}

export default Navbar;