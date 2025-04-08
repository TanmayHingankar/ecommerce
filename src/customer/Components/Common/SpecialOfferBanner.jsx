// SpecialOfferBanner.jsx (New component for the banner)
import React from "react";
import { Link } from "react-router-dom";

const SpecialOfferBanner = () => {
  return (
    <div className="bg-gradient-to-r from-pink-500 to-purple-600 py-4 px-6 text-white text-center mb-12">
      <div className="max-w-6xl mx-auto">
        <p className="text-xl font-bold mb-2">
          FLAT 10% OFF ON PREPAID ORDERS | Use Code: <span className="bg-white text-pink-600 px-2 py-1 rounded-md ml-2">EXTRA10</span>
        </p>
        <Link 
          to="/shop" 
          className="inline-block mt-2 px-6 py-2 bg-white text-pink-600 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300"
        >
          SHOP NOW
        </Link>
      </div>
    </div>
  );
};

export default SpecialOfferBanner;