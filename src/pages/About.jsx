import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-white font-sans relative overflow-hidden">

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] opacity-[0.15] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#7c3aed_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      <section className="pt-36 pb-16 px-6 text-center relative z-10">
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-violet-50 border border-violet-100 animate-fade-in">
          <span className="text-[#7c3aed] font-bold text-[10px] uppercase tracking-[0.3em]">Premium Experience • Since 2024</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-[#171220] tracking-tighter leading-[1.1] max-w-4xl mx-auto">
          Elevating Your <br />
          <span className="relative inline-block mt-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7c3aed] to-[#b088f9]">Lifestyle.</span>
            <svg className="absolute -bottom-2 left-0 w-full h-2 text-violet-200" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </span>
        </h1>

        <p className="text-gray-400 text-sm md:text-base mt-8 max-w-xl mx-auto font-medium leading-relaxed italic">
          "Discover a new era of curated shopping where quality meets modern aesthetics.
          We are redefining the standard of excellence for you."
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-auto md:h-[480px]">

          <div className="md:col-span-2 bg-[#171220] rounded-[32px] p-8 flex flex-col justify-end text-white relative overflow-hidden group shadow-2xl shadow-violet-900/10 transition-all hover:scale-[1.01]">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#7c3aed] filter blur-[90px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <h3 className="text-2xl font-bold mb-3 relative z-10">The ShopZone Philosophy</h3>
            <p className="text-gray-400 text-sm leading-relaxed relative z-10 max-w-sm">
              Hum sirf products nahi bechte, ek quality standard set karte hain. Har item carefully select kiya gaya hai taaki aapko mile best experience.
            </p>
          </div>

          <div className="md:col-span-2 bg-gray-100 rounded-[32px] overflow-hidden relative group">
            <img
              src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Store"
            />
            <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-all"></div>
          </div>

          <div className="bg-[#f8f7ff] rounded-[32px] p-6 border border-violet-50 flex flex-col justify-center items-center text-center hover:bg-white transition-all hover:shadow-lg hover:shadow-violet-100">
            <span className="text-4xl font-black text-[#7c3aed]">99%</span>
            <p className="text-[#171220] font-extrabold text-[10px] uppercase tracking-widest mt-2 opacity-50">Satisfaction</p>
          </div>

          <div className="bg-[#7c3aed] rounded-[32px] p-6 flex flex-col justify-center items-center group hover:bg-[#6d28d9] transition-all cursor-pointer shadow-lg shadow-violet-200">
            <Link to="/shop" className="text-white flex flex-col items-center">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="mb-2 group-hover:translate-x-1 transition-transform">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
              <span className="font-bold text-[10px] uppercase tracking-widest">Shop Now</span>
            </Link>
          </div>

          <div className="md:col-span-2 bg-gray-50 rounded-[32px] p-6 flex items-center justify-between border border-gray-100 px-10 hover:bg-white transition-all">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-200 overflow-hidden shadow-sm">
                  <img src={`https://i.pravatar.cc/100?img=${i + 15}`} alt="user" />
                </div>
              ))}
            </div>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-tighter">Trusted by 10k+ customers globally</p>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-24 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          {[
            { title: "Fast Shipping", desc: "Aapke orders ko hum priority dete hain. Delivery itni fast ki aap hairan reh jayenge." },
            { title: "Premium Support", desc: "Humara support 24/7 available hai. Koi bhi sawal ho, hum bas ek click dur hain." },
            { title: "Secure Payment", desc: "Aapka data aur payment details SSL encrypted hain. Shop with 100% confidence." }
          ].map((feat, i) => (
            <div key={i} className="group cursor-default">
              <h4 className="text-[#171220] font-black text-sm uppercase tracking-widest mb-3 group-hover:text-[#7c3aed] transition-colors">{feat.title}</h4>
              <p className="text-gray-400 text-xs leading-relaxed font-medium">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;