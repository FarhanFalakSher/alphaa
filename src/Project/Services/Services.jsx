import React, { useEffect, useRef, useState } from 'react';
import 'flickity/css/flickity.css';
import Flickity from 'flickity';
import { motion, AnimatePresence } from 'framer-motion';
import heroc1 from '../../assets/heroc2.jpg';
import heroc2 from '../../assets/heroc3.jpg';
import heroc3 from '../../assets/heroc1.jpg';
import OurServices from './OurServices';
import Need from './Need';

function Services() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHoveringArrows, setIsHoveringArrows] = useState(false);
  const carouselRef = useRef(null);
  const flktyRef = useRef(null);

  const slides = [
    {
      image: heroc1,
      title: 'Premium Garment Care',
      subtitle: 'Expert cleaning for your most delicate fabrics',
      cta: 'Book a Collection',
      textPosition: 'center',
    },
    {
      image: heroc2,
      title: 'Luxury Laundry Services',
      subtitle: 'Sustainable methods without compromising quality',
      cta: 'Book a Collection',
      textPosition: 'center',
    },
    {
      image: heroc3,
      title: 'Precision Fabric Care',
      subtitle: 'Impeccable finishes for business and formalwear',
      cta: 'Book a Collection',
      textPosition: 'center',
    },
  ];

  useEffect(() => {
    if (carouselRef.current) {
      flktyRef.current = new Flickity(carouselRef.current, {
        wrapAround: true,
        autoPlay: 5000,
        imagesLoaded: true,
        percentPosition: false,
        prevNextButtons: false,
        pageDots: false,
        pauseAutoPlayOnHover: true,
      });

      flktyRef.current.on('change', (index) => {
        setCurrentIndex(index);
      });

      return () => {
        if (flktyRef.current) {
          flktyRef.current.destroy();
        }
      };
    }
  }, []);

  const handleDotClick = (index) => {
    if (flktyRef.current) {
      flktyRef.current.select(index);
      flktyRef.current.playPlayer();
    }
  };

  const prevSlide = () => {
    if (flktyRef.current) {
      flktyRef.current.previous();
      flktyRef.current.playPlayer();
    }
  };

  const nextSlide = () => {
    if (flktyRef.current) {
      flktyRef.current.next();
      flktyRef.current.playPlayer();
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  const arrowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' } },
    hover: { scale: 1.1, backgroundColor: 'rgba(28,28,28,0.8)', transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const buttonHover = { scale: 1.05, backgroundColor: '#c9a227', transition: { duration: 0.2 } };
  const buttonTap = { scale: 0.98 };

  return (
    <>
      <div className="w-full h-[70vh] sm:h-[80vh] md:h-screen overflow-hidden relative">
        <div ref={carouselRef} className="w-full h-full">
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full relative">
              <motion.img
                src={slide.image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
                transition={{ duration: 5, ease: 'linear' }}
              />
              <div className="absolute inset-0 bg-black/40" />

              {/* Text Overlay */}
              <div
                className={`absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-6 md:px-12 lg:px-24 ${
                  slide.textPosition === 'left'
                    ? 'items-start text-left'
                    : slide.textPosition === 'right'
                    ? 'items-end text-right'
                    : 'items-center text-center'
                }`}
              >
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <motion.h2
                    variants={itemVariants}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light mb-4 sm:mb-6 max-w-lg sm:max-w-2xl"
                  >
                    {slide.title}
                  </motion.h2>

                  {/* Subtitle */}
                  <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6 sm:mb-10"
                  >
                    <motion.div
                      className="hidden sm:block h-[2px] bg-[#D4AF37]"
                      initial={{ width: 0 }}
                      animate={{ width: 70 }}
                      transition={{ duration: 0.5 }}
                    />
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-[#F5DEB3] tracking-wide drop-shadow-md px-2 sm:px-0">
                      {slide.subtitle}
                    </p>
                    <motion.div
                      className="hidden sm:block h-[2px] bg-[#D4AF37]"
                      initial={{ width: 0 }}
                      animate={{ width: 70 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    />
                  </motion.div>

                  <a href="/card">
                    <motion.button
                      variants={itemVariants}
                      whileHover={buttonHover}
                      whileTap={buttonTap}
                      className="bg-[#D4AF37] hover:bg-[#c9a227] text-[#1C1C1C] px-6 sm:px-8 py-2 sm:py-3 rounded-full text-base sm:text-lg font-medium"
                    >
                      {slide.cta}
                    </motion.button>
                  </a>
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Dots */}
        <motion.div
          className="absolute bottom-6 sm:bottom-10 left-0 right-0 flex justify-center items-center gap-2 sm:gap-3 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {slides.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`transition-all duration-300 cursor-pointer ${
                currentIndex === index
                  ? 'w-5 sm:w-6 h-2.5 sm:h-3 rounded-full bg-yellow-400'
                  : 'w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-white bg-opacity-70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>

        {/* Arrows */}
        <AnimatePresence>
          <motion.button
            onClick={prevSlide}
            className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 z-20 
              bg-[#1c1c1c80] rounded-full p-2 sm:p-3 md:p-4 flex items-center justify-center"
            aria-label="Previous slide"
            variants={arrowVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onMouseEnter={() => setIsHoveringArrows(true)}
            onMouseLeave={() => setIsHoveringArrows(false)}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>

          <motion.button
            onClick={nextSlide}
            className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 z-20 
              bg-[#1c1c1c80] rounded-full p-2 sm:p-3 md:p-4 flex items-center justify-center"
            aria-label="Next slide"
            variants={arrowVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
            whileTap="tap"
            onMouseEnter={() => setIsHoveringArrows(true)}
            onMouseLeave={() => setIsHoveringArrows(false)}
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        </AnimatePresence>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <motion.span
            className="text-2xl sm:text-3xl md:text-4xl text-white block"
            animate={{ y: [0, 10, 0], opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            ↓
          </motion.span>
        </motion.div>
      </div>
      <OurServices />
      <Need />
    </>
  );
}

export default Services;
