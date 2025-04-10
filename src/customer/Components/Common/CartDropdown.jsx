import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const CartDropdown = ({ onClose }) => {
  const { cart } = useSelector((state) => state);

  return (
    <motion.div
      className="absolute right-0 mt-2 w-72 bg-white rounded-md shadow-lg py-4 z-50 border border-pink-100"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      onMouseLeave={onClose}
    >
      {cart.cart?.totalItem > 0 ? (
        <>
          <div className="px-4 py-2 text-gray-700 font-medium border-b border-pink-100">
            Cart ({cart.cart.totalItem} items)
          </div>
          <div className="max-h-60 overflow-y-auto">
            {cart.cart.items?.map((item, index) => (
              <div
                key={index}
                className="flex items-center px-4 py-3 hover:bg-pink-50 transition-colors duration-200"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-12 h-12 object-cover rounded-md mr-3"
                />
                <div>
                  <p className="text-sm text-gray-700 line-clamp-1">{item.title}</p>
                  <p className="text-xs text-pink-600">₹{item.selling_price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="px-4 py-2 border-t border-pink-100">
            <Link
              to="/cart"
              className="block w-full text-center py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200"
              onClick={onClose}
            >
              View Cart
            </Link>
          </div>
        </>
      ) : (
        <div className="px-4 py-4 text-center text-gray-600">
          Your cart is empty
        </div>
      )}
    </motion.div>
  );
};

export default CartDropdown;