import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Facebook, Github, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#171220] text-white pt-16 pb-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-2xl font-black tracking-tighter mb-4 italic">
              shop<span className="text-[#7c3aed]">zone.</span>
            </h2>
            <p className="text-gray-400 text-[11px] leading-relaxed max-w-[200px]">
              Redefining your lifestyle with curated premium products since 2024. Quality you can trust, style you can wear.
            </p>
            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-gray-500 hover:text-[#7c3aed] transition-all transform hover:-translate-y-1">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#7c3aed] transition-all transform hover:-translate-y-1">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#7c3aed] transition-all transform hover:-translate-y-1">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#7c3aed] transition-all transform hover:-translate-y-1">
                <Github size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-gray-300">Explore</h4>
            <ul className="space-y-3 text-gray-500 text-[11px] font-medium">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/shop" className="hover:text-white transition-colors">All Products</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Latest Trends</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-gray-300">Support</h4>
            <ul className="space-y-3 text-gray-500 text-[11px] font-medium">
              <li><Link to="#" className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="#" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] mb-6 text-gray-300">Newsletter</h4>
            <p className="text-gray-500 text-[11px] mb-4 font-medium">Get 10% off on your first order.</p>
            <div className="flex items-center border-b border-gray-700 py-2 group focus-within:border-[#7c3aed] transition-all">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-transparent border-none text-[11px] w-full focus:outline-none text-gray-300 placeholder:text-gray-600 uppercase tracking-tighter"
              />
              <button className="text-[#7c3aed] hover:text-white transition-colors">
                <Mail size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold">
            © 2024 SHOPZONE. ALL RIGHTS RESERVED.
          </p>
          <p className="text-[9px] text-gray-600 uppercase tracking-[0.3em] font-bold">
            DESIGNED FOR EXCELLENCE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;