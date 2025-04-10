// HomeProductSection.jsx
import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button } from "@mui/material";
import { ArrowForwardIos, ArrowBackIos } from "@mui/icons-material";
import { useState } from "react";
import { motion } from "framer-motion";
const HomeProductSection = ({ section, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0: { items: 2 },
    568: { items: 3 },
    1024: { items: 5 }
  };

  const items = data?.slice(0, 10).map((item, index) => (
    <div key={index} className="px-2 h-full">
      <HomeProductCard product={item} />
    </div>
  ));

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 my-12">
      <motion.h2 
        className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {section}
      </motion.h2>
      
      <motion.div 
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={800}
        />
        
        {/* Navigation Buttons */}
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 shadow-lg hover:scale-110 transition-transform nav-button"
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(50%, -50%)",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#f5f5f5",
                transform: "translate(50%, -50%) scale(1.1)"
              }
            }}
            aria-label="next"
          >
            <ArrowForwardIos sx={{ fontSize: "1rem" }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 shadow-lg hover:scale-110 transition-transform nav-button"
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translate(-50%, -50%)",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#f5f5f5",
                transform: "translate(-50%, -50%) scale(1.1)"
              }
            }}
            aria-label="previous"
          >
            <ArrowBackIos sx={{ fontSize: "1rem" }} />
          </Button>
        )}
      </motion.div>
    </div>
  );
};

export default HomeProductSection;