// Newsletter.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiMail } from "react-icons/fi";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    console.log("Subscribed with:", email);
    setSubscribed(true);
    setEmail("");
    setTimeout(() => setSubscribed(false), 3000);
  };

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl p-8 shadow-lg">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-2xl font-bold text-white mb-2">Stay Updated</h3>
            <p className="text-pink-100">Subscribe to our newsletter for the latest trends and exclusive offers.</p>
          </div>
          
          <form onSubmit={handleSubmit} className="flex w-full md:w-auto">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FiMail className="text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-3 rounded-l-full w-full focus:outline-none"
                placeholder="Your email address"
              />
            </div>
            <button 
              type="submit"
              className="bg-black text-white px-6 py-3 rounded-r-full hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.div>

        {subscribed && (
          <motion.div 
            className="mt-4 text-center text-white bg-green-500 py-2 px-4 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
          >
            Thank you for subscribing!
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Newsletter;