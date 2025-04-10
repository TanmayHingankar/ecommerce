// SpecialOfferBanner.jsx
import React from "react";
import { motion } from "framer-motion";

const SpecialOfferBanner = () => {
  return (
    <motion.div 
      className="bg-gradient-to-r from-pink-500 to-purple-600 text-white py-6 px-4 my-8 rounded-xl mx-4 shadow-lg"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-2xl font-bold">Special Weekend Sale!</h3>
          <p className="text-sm">Get flat 30% off on all ethnic wear</p>
        </div>
        <button className="px-6 py-2 bg-white text-pink-600 rounded-full font-medium hover:bg-gray-100 transition-colors">
          Shop Now
        </button>
      </div>
    </motion.div>
  );
};

export default SpecialOfferBanner;