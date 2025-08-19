import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/imglogo - Copy.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const handleNavClick = (to) => {
    setMenuOpen(false);
    if (location.pathname === to) scrollToTop();
    else {
      navigate(to);
      setTimeout(scrollToTop, 100);
    }
  };

  const handleLoginClick = () => {
    setMenuOpen(false);
    navigate("/login");
  };

  const bookNowClick = () => {
    setMenuOpen(false);
    navigate("/card");
  };

  const navItems = [
    { label: "HOME", to: "/" },
    { label: "SERVICES", to: "/services" },
    { label: "ABOUT", to: "/about" },
    { label: "CONTACT", to: "/contact" },
  ];

  const navItemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.1 } }),
  };

  return (
    <motion.div
      className="relative z-50"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 12 }}
    >
      {/* Desktop & Mobile Navbar */}
      <div
        className={`fixed top-0 left-0 w-full px-3 sm:px-6 lg:px-8 py-2 sm:py-3 md:py-4 flex justify-between items-center transition-all duration-300 ${
          isScrolled ? "backdrop-blur-md bg-black/30 shadow-lg" : "bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" onClick={scrollToTop}>
          <motion.img
            src={logo}
            alt="company logo"
            className="w-24 sm:w-28 md:w-32 h-8 sm:h-10 md:h-12 cursor-pointer z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-4 sm:space-x-6 xl:space-x-8 text-white font-semibold text-xs sm:text-sm md:text-base tracking-wider z-10">
          {navItems.map(({ label, to }, index) => (
            <motion.li
              key={label}
              className="cursor-pointer relative group"
              custom={index}
              initial="hidden"
              animate="visible"
              variants={navItemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to={to}
                onClick={() => handleNavClick(to)}
                className={`relative ${location.pathname === to ? "text-[#D4AF37]" : ""}`}
              >
                {label}
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Desktop Buttons */}
        <div className="hidden lg:flex items-center gap-2 sm:gap-3 md:gap-4 z-10">
          <motion.button
            className="px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 text-xs sm:text-sm md:text-base font-medium rounded-full transition-all duration-300 text-white border border-[#D4AF37] hover:bg-[#D4AF37]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            العربية
          </motion.button>
          <motion.button
            className="px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-full transition-all duration-300 text-white border border-[#D4AF37] hover:bg-[#D4AF37]/10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoginClick}
          >
            Client Login
          </motion.button>
          <motion.button
            className="px-3 sm:px-5 md:px-6 py-1.5 sm:py-2 md:py-2.5 text-xs sm:text-sm md:text-base font-medium rounded-full transition-all duration-300 text-black bg-[#D4AF37] hover:bg-[#c9a227]"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={bookNowClick}
          >
            Book Now
          </motion.button>
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="lg:hidden text-white focus:outline-none z-10"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {menuOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
        </motion.button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
            className="fixed top-0 left-0 w-full h-screen bg-[#524020]/95 backdrop-blur-sm z-40 text-white px-4 sm:px-6 py-24 sm:py-28"
          >
            <ul className="space-y-4 sm:space-y-6 text-base sm:text-lg font-semibold">
              {navItems.map(({ label, to }, index) => (
                <motion.li
                  key={label}
                  className="cursor-pointer py-2"
                  onClick={() => handleNavClick(to)}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 300, delay: index * 0.1 }}
                  whileHover={{ x: 6 }}
                >
                  <Link className={`${location.pathname === to ? "text-[#D4AF37]" : ""}`} to={to}>
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
              <motion.button
                className="block w-full px-4 py-2.5 rounded-full text-sm sm:text-base text-white border border-[#D4AF37]"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                العربية
              </motion.button>
              <motion.button
                className="block w-full px-4 py-2.5 rounded-full text-sm sm:text-base text-white border border-[#D4AF37] font-bold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleLoginClick}
              >
                Client Login
              </motion.button>
              <motion.button
                className="block w-full px-4 py-2.5 rounded-full text-sm sm:text-base text-black bg-[#D4AF37] font-semibold"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={bookNowClick}
              >
                Book Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
