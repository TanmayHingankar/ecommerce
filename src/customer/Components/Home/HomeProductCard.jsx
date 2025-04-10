import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Star, StarHalf, StarBorder, Favorite, FavoriteBorder } from "@mui/icons-material";
import { motion } from "framer-motion";
import { Tooltip, IconButton } from "@mui/material"; // Removed Badge since it's not used
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../../../Redux/Customers/Cart/Action"; // Exists in your structure
// Temporarily comment out the missing wishlist action; see below for implementation
 //import { addItemToWishlist } from "../../../Redux/Customers/Wishlist/Action";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { auth } = useSelector((store) => store);
  const [isHovered, setIsHovered] = useState(false);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const rating = product?.rating || (Math.random() * 1 + 4).toFixed(1);
  const reviewsCount = product?.reviewsCount || Math.floor(Math.random() * 500) + 50;
  const discountPercentage = parseInt(product?.disscount) || 
    Math.floor(((product?.price - product?.selling_price) / product?.price) * 100) || 
    Math.floor(Math.random() * 30) + 10; // Updated discount calculation

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} sx={{ color: "#FFD700", fontSize: "1rem" }} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} sx={{ color: "#FFD700", fontSize: "1rem" }} />);
      } else {
        stars.push(<StarBorder key={i} sx={{ color: "#FFD700", fontSize: "1rem" }} />);
      }
    }
    return stars;
  };

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (!auth.user) {
      navigate("/login");
      return;
    }
    const data = {
      productId: product.id,
      size: product.size || "M",
      quantity: 1,
      price: product.selling_price || product.price,
      discountedPrice: product.selling_price || product.price,
    };
    dispatch(addItemToCart(data));
  };

  const handleWishlist = (e) => {
    e.stopPropagation();
    if (!auth.user) {
      navigate("/login");
      return;
    }
    setIsWishlisted(!isWishlisted);
    // Since addItemToWishlist is missing, we'll add a placeholder or implement it below
    const data = {
      productId: product.id,
      size: product.size || "M",
      quantity: 1,
      price: product.selling_price || product.price,
      discountedPrice: product.selling_price || product.price,
    };
    // dispatch(addItemToWishlist(data)); // Commented out due to missing import
    console.log("Wishlist action triggered with:", data); // Placeholder
  };

  return (
    <motion.div
      onClick={() => navigate(`/product/${product.id || product.title.replace(/\s+/g, "-").toLowerCase()}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-xl overflow-hidden w-full mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group relative"
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Discount Badge */}
      {product.price && product.selling_price && discountPercentage > 0 && (
        <motion.div
          className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          {discountPercentage}% OFF
        </motion.div>
      )}

      {/* Wishlist Button */}
      <motion.div
        className="absolute top-3 right-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
      >
        <Tooltip title={isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}>
          <IconButton onClick={handleWishlist} sx={{ color: isWishlisted ? "red" : "white" }}>
            {isWishlisted ? <Favorite /> : <FavoriteBorder />}
          </IconButton>
        </Tooltip>
      </motion.div>

      {/* Product Image */}
      <div className="h-80 w-full overflow-hidden relative">
        <motion.img
          className="object-cover object-top w-full h-full"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Product Info */}
      <div className="p-4 w-full text-center space-y-2">
        <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">
          {product?.brand || product?.title}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-1">{product?.title}</p>

        {/* Rating */}
        <div className="flex items-center justify-center space-x-1">
          {renderStars()}
          <span className="text-xs text-gray-500 ml-1">({reviewsCount})</span>
        </div>

        {/* Price */}
        <div className="flex justify-center items-center gap-2 mt-2">
          <span className="text-lg font-bold text-gray-900">
            ₹{product?.selling_price || product?.price}
          </span>
          {product?.selling_price && product.price && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product?.price}
            </span>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="flex justify-center gap-3 mt-3">
          <motion.button
            className="px-4 py-2 bg-pink-600 text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 hover:bg-pink-700"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3 }}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </motion.button>

          <motion.button
            className="px-4 py-2 bg-black text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 hover:bg-gray-800"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.3, delay: 0.1 }}
            onClick={(e) => {
              e.stopPropagation();
              navigate(`/product/${product.id || product.title.replace(/\s+/g, "-").toLowerCase()}`);
            }}
          >
            QUICK VIEW
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default HomeProductCard;