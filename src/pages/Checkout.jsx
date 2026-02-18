import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { cart } = useCart();
    const [orderPlaced, setOrderPlaced] = useState(false);

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-white">
                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <h2 className="text-3xl font-black tracking-tighter mb-2 italic">Order Placed!</h2>
                <p className="text-gray-500 mb-8">Thank you for shopping. Your premium items will arrive soon.</p>
                <Link to="/shop" className="bg-[#7c3aed] text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-all">
                    Back to Shop
                </Link>
            </div>
        );
    }

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 bg-white">
                <h2 className="text-3xl font-black tracking-tighter mb-2 italic text-[#171220]">
                    Your Cart is <span className="text-[#7c3aed]">Empty.</span>
                </h2>
                <p className="text-gray-500 mb-8">You need to add items before checking out.</p>
                <Link to="/shop" className="bg-[#171220] text-white px-8 py-3 rounded-full font-bold hover:bg-[#7c3aed] transition-all">
                    Go to Shop
                </Link>
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-16 min-h-[80vh]">
            <h1 className="text-4xl font-black tracking-tighter mb-12 italic text-[#171220]">
                Check<span className="text-[#7c3aed]">out.</span>
            </h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

                <div className="lg:col-span-2 space-y-8">
                    <form onSubmit={handlePlaceOrder} className="space-y-6">
                        <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                                <span className="w-7 h-7 bg-[#7c3aed] text-white text-xs rounded-full flex items-center justify-center">1</span>
                                Shipping Details
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <input type="text" placeholder="Full Name" required className="md:col-span-2 bg-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-violet-200 border-none shadow-sm" />
                                <input type="email" placeholder="Email Address" required className="md:col-span-2 bg-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-violet-200 border-none shadow-sm" />
                                <input type="text" placeholder="Address" required className="md:col-span-2 bg-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-violet-200 border-none shadow-sm" />
                                <input type="text" placeholder="City" required className="bg-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-violet-200 border-none shadow-sm" />
                                <input type="text" placeholder="Pincode" required className="bg-white p-4 rounded-2xl outline-none focus:ring-2 focus:ring-violet-200 border-none shadow-sm" />
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-[40px] border border-gray-100 shadow-sm">
                            <h3 className="text-lg font-bold mb-6 flex items-center gap-3">
                                <span className="w-7 h-7 bg-[#7c3aed] text-white text-xs rounded-full flex items-center justify-center">2</span>
                                Payment Method
                            </h3>
                            <div className="p-5 border-2 border-[#7c3aed] bg-violet-50 rounded-2xl flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="w-4 h-4 rounded-full bg-[#7c3aed] border-4 border-white shadow-sm"></div>
                                    <span className="font-bold text-sm text-[#7c3aed]">Cash on Delivery</span>
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400">Default</span>
                            </div>
                        </div>

                        <button type="submit" className="w-full bg-[#171220] text-white py-5 rounded-[25px] font-black uppercase tracking-widest hover:bg-[#7c3aed] transition-all shadow-xl shadow-violet-100">
                            Confirm Order • ₹{totalPrice.toLocaleString()}
                        </button>
                    </form>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-[#171220] text-white p-8 rounded-[40px] sticky top-24 shadow-2xl">
                        <h3 className="text-xl font-bold mb-8 italic">Order Summary</h3>
                        <div className="space-y-6 max-h-[400px] overflow-y-auto mb-8 pr-2 custom-scrollbar">
                            {cart.map((item) => (
                                <div key={item.id} className="flex justify-between items-center text-sm border-b border-white/5 pb-4">
                                    <div className="flex gap-4">
                                        <div className="relative">
                                            <img src={item.image} className="w-14 h-14 object-cover rounded-xl" alt={item.title} />
                                            <span className="absolute -top-2 -right-2 bg-[#7c3aed] text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center border-2 border-[#171220]">
                                                {item.quantity}
                                            </span>
                                        </div>
                                        <div className="max-w-[120px]">
                                            <p className="font-bold truncate">{item.title}</p>
                                            <p className="text-gray-500 text-xs">Premium Choice</p>
                                        </div>
                                    </div>
                                    <span className="font-black text-[#a78bfa]">₹{(item.price * item.quantity).toLocaleString()}</span>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 border-t border-white/10 pt-6">
                            <div className="flex justify-between text-gray-400 text-xs uppercase tracking-tighter">
                                <span>Subtotal</span>
                                <span>₹{totalPrice.toLocaleString()}</span>
                            </div>
                            <div className="flex justify-between text-gray-400 text-xs uppercase tracking-tighter">
                                <span>Shipping</span>
                                <span className="text-green-400 font-bold">FREE</span>
                            </div>
                            <div className="flex justify-between text-2xl font-black pt-4 border-t border-white/5 mt-4">
                                <span>Total</span>
                                <span className="text-[#7c3aed]">₹{totalPrice.toLocaleString()}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Checkout;