// HomeProductCard.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { Star, StarHalf, StarBorder } from "@mui/icons-material";

const HomeProductCard = ({ product }) => {
  const navigate = useNavigate();
  const rating = product?.rating || (Math.random() * 1 + 4).toFixed(1); // 4-5 star rating
  const reviewsCount = product?.reviewsCount || Math.floor(Math.random() * 500) + 50;
  const discountPercentage = product?.discountPercentage || Math.floor(Math.random() * 30) + 10;

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(<Star key={i} sx={{ color: '#FFD700', fontSize: '1rem' }} />);
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(<StarHalf key={i} sx={{ color: '#FFD700', fontSize: '1rem' }} />);
      } else {
        stars.push(<StarBorder key={i} sx={{ color: '#FFD700', fontSize: '1rem' }} />);
      }
    }

    return stars;
  };

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className="cursor-pointer flex flex-col items-center bg-white rounded-xl overflow-hidden w-full mx-auto transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl group relative"
    >
      {/* Discount Badge */}
      {product.discountedPrice && (
        <div className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
          {discountPercentage}% OFF
        </div>
      )}

      {/* Product Image */}
      <div className="h-80 w-full overflow-hidden relative">
        <img
          className="object-cover object-top w-full h-full transition-all duration-500 group-hover:scale-110"
          src={product?.image || product?.imageUrl}
          alt={product?.title}
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
            ₹{product?.discountedPrice || product?.price}
          </span>
          {product?.discountedPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹{product?.price}
            </span>
          )}
        </div>

        {/* CTA Button */}
        <button className="mt-3 px-4 py-2 bg-black text-white text-sm font-medium rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 hover:bg-gray-800">
          QUICK VIEW
        </button>
      </div>
    </div>
  );
};

export default HomeProductCard;