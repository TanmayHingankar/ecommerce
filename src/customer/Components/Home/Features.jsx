// Features.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaTruck, FaShieldAlt, FaExchangeAlt, FaHeadset } from "react-icons/fa";

const features = [
  {
    icon: <FaTruck className="text-3xl text-pink-600" />,
    title: "Free Shipping",
    description: "On orders over ₹999"
  },
  {
    icon: <FaShieldAlt className="text-3xl text-pink-600" />,
    title: "Secure Payment",
    description: "100% secure payment"
  },
  {
    icon: <FaExchangeAlt className="text-3xl text-pink-600" />,
    title: "Easy Returns",
    description: "15 days return policy"
  },
  {
    icon: <FaHeadset className="text-3xl text-pink-600" />,
    title: "24/7 Support",
    description: "Dedicated support"
  }
];

const Features = () => {
  return (
    <div className="bg-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="bg-pink-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;