import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import { homeCarouselData } from "../customer/Components/Carousel/HomeCarouselData"; // Corrected path
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import SpecialOfferBanner from "../customer/Components/Common/SpecialOfferBanner";
import { motion } from "framer-motion";
import Newsletter from "../customer/Components/Common/Newsletter";
import Testimonials from "../customer/Components/Home/Testimonials";
import Features from "../customer/Components/Home/Features";

console.log("HomeCarousel:", HomeCarousel);
console.log("homeCarouselData:", homeCarouselData);
console.log("HomeProductSection:", HomeProductSection);
console.log("SpecialOfferBanner:", SpecialOfferBanner);
console.log("Newsletter:", Newsletter);
console.log("Testimonials:", Testimonials);
console.log("Features:", Features);

const Homepage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="bg-gradient-to-b from-pink-50 to-white pb-20">
      {/* Hero Carousel */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <HomeCarousel images={homeCarouselData} />
      </motion.div>

      {/* Special Offers */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <SpecialOfferBanner />
        </motion.div>

        {/* Featured Categories */}
        <div className="space-y-16 py-10">
          <motion.div variants={itemVariants}>
            <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HomeProductSection data={sareePage1} section={"Premium Sarees"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HomeProductSection data={dressPage1} section={"Women's Dresses"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HomeProductSection data={gounsPage1} section={"Women's Gowns"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
          </motion.div>
          <motion.div variants={itemVariants}>
            <HomeProductSection data={lengha_page1} section={"Designer Lehengas"} />
          </motion.div>
        </div>

        {/* Features Section */}
        <motion.div variants={itemVariants}>
          <Features />
        </motion.div>

        {/* Testimonials */}
        <motion.div variants={itemVariants}>
          <Testimonials />
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <Newsletter />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Homepage;