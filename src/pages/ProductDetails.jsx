import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const localProducts = [
  { id: 1, name: "Premium Wireless Headphones", price: 2999, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Smart Watch Series 7", price: 4499, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 3, name: "Minimalist Camera Bag", price: 1299, image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=500" },
  { id: 4, name: "Leather Wallet Case", price: 899, image: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500" },
];

const ProductDetails = () => {
  const { id } = useParams();
  const location = useLocation();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);


  const queryParams = new URLSearchParams(location.search);
  const isFromShop = queryParams.get('source') === 'api';

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);

    const fetchProduct = async () => {

      if (isFromShop) {
        try {
          const res = await fetch(`https://dummyjson.com/products/${id}`);
          const data = await res.json();
          if (data.id) {
            setProduct({
              id: data.id,
              name: data.title,
              price: data.price,
              image: data.thumbnail,
              description: data.description,
              isApi: true
            });
          }
        } catch (err) {
          console.error("API Error", err);
        }
      } else {

        const foundLocal = localProducts.find((p) => p.id === parseInt(id));
        if (foundLocal) {
          setProduct(foundLocal);
        }
      }
      setLoading(false);
    };

    fetchProduct();
  }, [id, isFromShop]);

  if (loading) return <div className="min-h-screen flex items-center justify-center font-bold text-[#7c3aed]">Loading Product...</div>;
  if (!product) return <div className="text-center py-20">Product Not Found!</div>;

  return (
    <div className="min-h-screen bg-white max-w-7xl mx-auto px-6 md:px-16 lg:px-24 py-16">
      <Link to={product.isApi ? "/shop" : "/"} className="text-gray-400 hover:text-[#7c3aed] flex items-center gap-2 mb-10 transition-all font-medium">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
        Back to {product.isApi ? "Shop" : "Home"}
      </Link>

      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-16 items-center">
        <div className="w-full bg-[#f8f7ff] rounded-[40px] p-10 border border-gray-50 shadow-sm aspect-square flex items-center justify-center overflow-hidden">
          <img src={product.image} alt={product.name} className="max-w-full h-auto object-contain hover:scale-110 transition-transform duration-700" />
        </div>

        <div>
          <span className="text-[#7c3aed] font-bold text-xs uppercase tracking-widest mb-4 block">Premium Collection</span>
          <h1 className="text-4xl md:text-5xl font-black text-[#171220] mb-6 leading-tight">{product.name}</h1>
          <p className="text-4xl font-black text-gray-900 mb-8">{product.isApi ? `$${product.price}` : `₹${product.price}`}</p>
          <div className="h-[1px] bg-gray-100 w-full mb-8"></div>
          <p className="text-gray-500 text-lg leading-relaxed mb-10">{product.description || "Top-tier quality product selected for our trending collection."}</p>
          <button onClick={() => addToCart(product)} className="w-full sm:w-auto bg-gradient-to-r from-[#171220] to-[#7c3aed] text-white px-12 py-5 rounded-2xl font-bold text-lg shadow-xl shadow-violet-200 active:scale-95 transition-all">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;