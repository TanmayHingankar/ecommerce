// HomeProductSection.jsx
import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

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
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center font-serif">
        {section}
      </h2>
      <div className="relative">
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
        
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-50 shadow-lg hover:scale-110 transition-transform"
            sx={{
              position: "absolute",
              top: "50%",
              right: "0",
              transform: "translate(50%, -50%) rotate(90deg)",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#f5f5f5",
                transform: "translate(50%, -50%) rotate(90deg) scale(1.1)"
              }
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-50 shadow-lg hover:scale-110 transition-transform"
            sx={{
              position: "absolute",
              top: "50%",
              left: "0",
              transform: "translate(-50%, -50%) rotate(-90deg)",
              minWidth: "40px",
              height: "40px",
              borderRadius: "50%",
              bgcolor: "white",
              color: "black",
              "&:hover": {
                bgcolor: "#f5f5f5",
                transform: "translate(-50%, -50%) rotate(-90deg) scale(1.1)"
              }
            }}
            aria-label="previous"
          >
            <ArrowForwardIosIcon sx={{ fontSize: "1rem" }} />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;