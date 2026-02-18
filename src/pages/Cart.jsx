import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, addToCart, clearCart } = useCart();

    const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

    if (cart.length === 0) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
                <div className="bg-gray-50 p-10 rounded-[40px] text-center border-2 border-dashed border-gray-200">
                    <h2 className="text-3xl font-black text-[#171220] mb-4">Aapka Cart Khaali Hai!</h2>
                    <p className="text-gray-500 mb-8 text-lg">Lagt hai aapne abhi tak kuch pasand nahi kiya.</p>
                    <Link to="/shop" className="bg-[#7c3aed] text-white px-8 py-4 rounded-2xl font-bold shadow-lg shadow-violet-200 hover:scale-105 transition-all inline-block">
                        Shopping Shuru Karein
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white py-12 px-6 md:px-16 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-start mb-10 border-b border-gray-100 pb-6">
                    <div>
                        <h1 className="text-4xl font-black text-[#171220]">Shopping Cart</h1>
                        <p className="text-gray-500 mt-1 font-medium">{cart.length} items aapke cart mein hain</p>
                    </div>
                    <button
                        onClick={clearCart}
                        className="group flex items-center gap-2 text-gray-400 hover:text-red-500 transition-all duration-300 pt-2"
                    >
                        <span className="text-xs font-bold uppercase tracking-widest">Clear All</span>
                        <div className="p-2 bg-gray-50 group-hover:bg-red-50 rounded-lg transition-colors">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                        </div>
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
                    <div className="lg:col-span-2 space-y-6">
                        {cart.map((item) => (
                            <div key={item.id} className="flex items-center gap-6 bg-gray-50 p-6 rounded-3xl border border-gray-100 group transition-all hover:bg-white hover:shadow-xl">
                                <div className="w-24 h-24 bg-white rounded-2xl overflow-hidden p-2 flex-shrink-0 border border-gray-100">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                                </div>

                                <div className="flex-grow">
                                    <h3 className="text-xl font-bold text-[#171220] mb-1 line-clamp-1">{item.name}</h3>
                                    <p className="text-[#7c3aed] font-bold">₹{item.price}</p>
                                </div>

                                <div className="flex items-center gap-4 bg-white px-4 py-2 rounded-xl border border-gray-100 shadow-sm">
                                    <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 font-black text-xl">-</button>
                                    <span className="font-bold text-[#171220] min-w-[20px] text-center">{item.quantity}</span>
                                    <button onClick={() => addToCart(item)} className="text-gray-400 hover:text-[#7c3aed] font-black text-xl">+</button>
                                </div>

                                <button onClick={() => removeFromCart(item.id)} className="text-gray-300 hover:text-red-500 transition-colors p-2">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" /></svg>
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="lg:col-span-1 lg:-mt-2">
                        <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-[0_20px_50px_rgba(124,58,237,0.06)] sticky top-6">
                            <h2 className="text-2xl font-black text-[#171220] mb-8 flex items-center gap-2">
                                Order Summary
                                <span className="w-2 h-2 rounded-full bg-[#7c3aed]"></span>
                            </h2>

                            <div className="space-y-5 mb-8">
                                <div className="flex justify-between text-gray-500 font-medium">
                                    <span>Items Total</span>
                                    <span className="text-[#171220]">₹{totalPrice.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-gray-500 font-medium">
                                    <span>Discount</span>
                                    <span className="text-green-500">- ₹0.00</span>
                                </div>
                                <div className="flex justify-between text-gray-500 font-medium">
                                    <span>Delivery Charge</span>
                                    <span className="text-[#171220]">FREE</span>
                                </div>

                                <div className="pt-5 border-t border-dashed border-gray-200 mt-5">
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Total Amount</p>
                                            <p className="text-3xl font-black text-[#171220]">₹{totalPrice.toLocaleString()}</p>
                                        </div>
                                        <div className="text-right">
                                            <span className="text-[10px] bg-green-100 text-green-600 px-2 py-1 rounded-md font-bold uppercase">Incl. Taxes</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button className="w-full bg-gradient-to-r from-[#171220] to-[#7c3aed] text-white py-5 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-violet-200 transition-all active:scale-[0.98] flex items-center justify-center gap-3 mb-6">
                                Proceed to Checkout
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
                            </button>

                            <div className="flex items-center justify-center gap-4">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4 opacity-50 grayscale" alt="paypal" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-3 opacity-50 grayscale" alt="visa" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-4 opacity-50 grayscale" alt="mastercard" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;