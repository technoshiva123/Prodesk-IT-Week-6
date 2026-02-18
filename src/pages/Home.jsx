import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: "Premium Wireless Headphones", price: "₹2,999", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Smart Watch Series 7", price: "₹4,499", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 3, name: "Minimalist Camera Bag", price: "₹1,299", image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
  { id: 4, name: "Leather Wallet Case", price: "₹899", image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-6 md:px-16 lg:px-24 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Trending Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((item) => (
          <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-100">
            <div className="relative overflow-hidden h-64">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="p-5">
              <h3 className="font-medium text-gray-800 text-lg mb-2">{item.name}</h3>
              <p className="text-[#743ee2] font-bold text-xl mb-4">{item.price}</p>
              <Link to={`/product/${item.id}`} className="block w-full text-center bg-gray-50 text-gray-800 py-2.5 rounded-xl font-medium hover:bg-[#743ee2] hover:text-white transition-colors">
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;