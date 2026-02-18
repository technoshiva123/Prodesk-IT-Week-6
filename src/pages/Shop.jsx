import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const { addToCart } = useCart();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.products);
                setLoading(false);
            })
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#7c3aed]"></div>
        </div>
    );

    return (
        <div className="p-8 bg-gray-50 min-h-screen font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-2 text-center">Featured Collection</h1>
                <p className="text-gray-500 text-center mb-12">Discover our latest premium arrivals</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 flex flex-col">

                            <div className="relative overflow-hidden h-64 bg-[#f8f7ff]">
                                <img
                                    src={product.thumbnail}
                                    alt={product.title}
                                    className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-md px-3 py-1 rounded-full shadow-sm">
                                    <p className="text-[#7c3aed] font-bold text-sm">${product.price}</p>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <h2 className="text-lg font-bold text-[#171220] mb-1 line-clamp-1">{product.title}</h2>
                                <p className="text-gray-400 text-sm mb-6 line-clamp-2 leading-relaxed">
                                    {product.description || "Premium quality product for your daily needs."}
                                </p>

                                <div className="mt-auto space-y-3">
                                    <button
                                        onClick={() => addToCart({
                                            id: product.id,
                                            name: product.title,
                                            price: product.price,
                                            image: product.thumbnail
                                        })}
                                        className="w-full bg-gradient-to-r from-[#171220] to-[#7c3aed] text-white py-3.5 rounded-2xl font-bold text-sm tracking-wide hover:shadow-lg hover:shadow-violet-200 active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                                    >
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></svg>
                                        Add to Cart
                                    </button>

                                    <Link
                                        to={`/product/${product.id}?source=api`}
                                        className="block text-center text-xs font-bold text-gray-400 hover:text-[#7c3aed] uppercase tracking-widest transition-colors"
                                    >
                                        View Details
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;