import React from 'react';

const Contact = () => {
    return (
        <div className="p-8 bg-gray-50 min-h-screen font-sans flex flex-col items-center justify-center">
            <div className="max-w-3xl w-full bg-white rounded-3xl p-10 shadow-sm border border-gray-100">
                {/* Heading & Subtext */}
                <h1 className="text-4xl font-black text-gray-900 mb-2 text-center">Get in Touch</h1>
                <p className="text-gray-500 text-center mb-10 italic">We'd love to hear from you. Send us a message!</p>
                
                {/* Requirement: Static Form */}
                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Full Name</label>
                            <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#7c3aed] transition-all" required />
                        </div>
                        <div className="space-y-2">
                            <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                            <input type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#7c3aed] transition-all" required />
                        </div>
                    </div>
                    
                    <div className="space-y-2">
                        <label className="text-xs font-bold text-gray-400 uppercase tracking-widest ml-1">Your Message</label>
                        <textarea rows="5" placeholder="How can we help you?" className="w-full p-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:border-[#7c3aed] transition-all resize-none"></textarea>
                    </div>
                    
                    {/* Submit Button with your Theme Gradient */}
                    <button type="submit" className="w-full bg-gradient-to-r from-[#171220] to-[#7c3aed] text-white py-4 rounded-2xl font-bold text-lg tracking-wide hover:shadow-xl hover:shadow-violet-200 active:scale-[0.98] transition-all">
                        Send Message
                    </button>
                </form>

                {/* Optional: Static Contact Info */}
                <div className="mt-12 pt-8 border-t border-gray-100 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest mb-1">Email</p>
                        <p className="text-sm font-medium text-gray-700">support@shopzone.com</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest mb-1">Phone</p>
                        <p className="text-sm font-medium text-gray-700">+1 (234) 567-890</p>
                    </div>
                    <div>
                        <p className="text-xs font-bold text-[#7c3aed] uppercase tracking-widest mb-1">Office</p>
                        <p className="text-sm font-medium text-gray-700">Bento Street, Tech City</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;