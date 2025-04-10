import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCarouselData"; // Updated path
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = ({ images }) => {
  const navigate = useNavigate();
  
  const items = images.map((item, index) => (
    <motion.div
      key={index}
      className="relative cursor-pointer rounded-xl overflow-hidden"
      onClick={() => navigate(item.path)}
      onDragStart={handleDragStart}
      role="presentation"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <img
        src={item.image}
        alt={item.alt}
        className="w-full h-[500px] object-cover rounded-xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
        <motion.div
          className="text-white"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-2">{item.alt}</h2>
          <button className="px-6 py-2 bg-pink-600 rounded-full hover:bg-pink-700 transition-colors">
            Shop Now
          </button>
        </motion.div>
      </div>
    </motion.div>
  ));

  return (
    <div className="relative">
      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        autoPlayInterval={4000}
        disableButtonsControls
        disableDotsControls
        animationType="fadeout"
        animationDuration={1000}
      />
    </div>
  );
};

export default HomeCarousel;