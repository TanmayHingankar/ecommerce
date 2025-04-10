import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ShoppingBag, User, Search, Menu, X } from "react-feather";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import CartDropdown from "./CartDropdown";


const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { cart } = useSelector((state) => state);
  const { auth } = useSelector((state) => state);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const categories = [
    { name: "Women", subcategories: ["Sarees", "Kurtas", "Lehengas", "Gowns"] },
    { name: "Men", subcategories: ["Kurtas", "Sherwanis", "Jackets"] },
    { name: "Kids", subcategories: ["Girls", "Boys", "Infants"] },
    { name: "Home & Living", subcategories: ["Bed Sheets", "Curtains", "Cushions"] },
    { name: "Beauty", subcategories: ["Makeup", "Skincare", "Haircare"] },
  ];

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <motion.img
              src="https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png"
              alt="Shweta Fashion"
              className="h-10 w-10"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <span className="ml-2 text-2xl font-bold text-pink-600">Shweta</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <div key={category.name} className="relative group">
                <button className="text-gray-700 hover:text-pink-600 font-medium flex items-center transition-colors duration-200">
                  {category.name}
                  <svg
                    className="ml-1 h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <motion.div
                  className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {category.subcategories.map((subcategory) => (
                    <Link
                      key={subcategory}
                      to={`/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(" ", "-")}`}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                    >
                      {subcategory}
                    </Link>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          {/* Search and Icons */}
          <div className="flex items-center space-x-6">
            <motion.button
              className="p-2 text-gray-600 hover:text-pink-600"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              <Search size={20} />
            </motion.button>

            <div className="relative">
              <motion.button
                className="p-2 text-gray-600 hover:text-pink-600 relative"
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <User size={20} />
              </motion.button>
              {isUserMenuOpen && <UserDropdown onClose={() => setIsUserMenuOpen(false)} />}
            </div>

            <div className="relative">
              <motion.button
                className="p-2 text-gray-600 hover:text-pink-600 relative"
                onClick={() => setIsCartOpen(!isCartOpen)}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <ShoppingBag size={20} />
                {cart.cart?.totalItem > 0 && (
                  <span className="absolute -top-1 -right-1 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                    {cart.cart.totalItem}
                  </span>
                )}
              </motion.button>
              {isCartOpen && <CartDropdown onClose={() => setIsCartOpen(false)} />}
            </div>

            {/* Mobile menu button */}
            <motion.button
              className="md:hidden p-2 text-gray-600 hover:text-pink-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white shadow-lg px-4 py-6"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          {categories.map((category) => (
            <div key={category.name} className="border-b border-pink-100 last:border-b-0">
              <button
                className="w-full text-left py-3 text-gray-700 hover:text-pink-600 font-medium flex justify-between items-center"
                onClick={() => navigate(`/${category.name.toLowerCase()}`)}
              >
                {category.name}
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
              <div className="pl-4">
                {category.subcategories.map((subcategory) => (
                  <Link
                    key={subcategory}
                    to={`/${category.name.toLowerCase()}/${subcategory.toLowerCase().replace(" ", "-")}`}
                    className="block py-2 text-sm text-gray-600 hover:text-pink-600 hover:bg-pink-50 transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {subcategory}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;