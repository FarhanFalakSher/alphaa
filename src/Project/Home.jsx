import React, { useState, useEffect, useRef } from 'react';
import 'flickity/css/flickity.css';
import Flickity from 'flickity';
import { motion } from 'framer-motion';
import heroc1 from '../assets/heroc1.jpg';
import heroc2 from '../assets/heroc2.jpg';
import heroc3 from '../assets/heroc3.jpg';
import introVideo from '../assets/intro.mp4';
import SignatureLine from './SignatureLine';
import AkoyaSignature from './AkoyaSignature';
import FinalTouch from './FinalTouch';
import Works from './Works';
import Loved from './Loved';
import AkoyaClub from './AkoyaClub';

function Home() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);
  const flktyRef = useRef(null);

  const slides = [
    {
      image: heroc1,
      title: "Premium Garment Care",
      subtitle: "Expert cleaning for your most delicate fabrics",
      cta: "Schedule Pickup"
    },
    {
      image: heroc2,
      title: "Eco-Conscious Cleaning",
      subtitle: "Sustainable methods without compromising quality",
      cta: "Schedule Pickup"
    },
    {
      image: heroc3,
      title: "Precision Pressing",
      subtitle: "Impeccable finishes for business and formalwear",
      cta: "Schedule Pickup"
    }
  ];

  useEffect(() => {
    if (videoEnded && carouselRef.current && !flktyRef.current) {
      flktyRef.current = new Flickity(carouselRef.current, {
        wrapAround: true,
        autoPlay: 3200,
        imagesLoaded: true,
        prevNextButtons: false,
        pageDots: false,
        selectedAttraction: 0.018,
        friction: 0.28
      });
      flktyRef.current.on('change', (index) => setCurrentIndex(index));
      return () => flktyRef.current?.destroy();
    }
  }, [videoEnded]);

  const handleDotClick = (index) => flktyRef.current?.select(index);
  const navigateSlide = (direction) => {
    if (direction === 'prev') flktyRef.current?.previous();
    if (direction === 'next') flktyRef.current?.next();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { when: 'beforeChildren', staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }
  };

  return (
    <>
      {/* HERO (shorter height like your screenshot) */}
      <div
        className="
          relative w-full overflow-hidden
          h-[70vh] sm:h-[75vh] md:h-[80vh] lg:h-[85vh]
        "
      >
        {!videoEnded ? (
          <video
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            onEnded={() => setVideoEnded(true)}
          >
            <source src={introVideo} type="video/mp4" />
          </video>
        ) : (
          <>
            {/* make the carousel fill the hero height */}
            <div ref={carouselRef} className="absolute inset-0 w-full h-full">
              {slides.map((slide, index) => (
                <div key={index} className="absolute inset-0 w-full h-full">
                  <motion.img
                    src={slide.image}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                    animate={{ scale: currentIndex === index ? 1.05 : 0.98 }}
                    transition={{ duration: 1.4, ease: [0.25, 1, 0.5, 1] }}
                  />

                  <motion.div
                    className="absolute inset-0 bg-black/40"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: currentIndex === index ? 0.6 : 0.4 }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  />

                  <motion.div
                    className="absolute inset-0 flex flex-col justify-center items-start text-white px-4 sm:px-8 md:px-16 lg:px-24"
                    variants={containerVariants}
                    initial="hidden"
                    animate={currentIndex === index ? 'visible' : 'hidden'}
                  >
                    <motion.h2
                      className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-light mb-3 sm:mb-4 max-w-full sm:max-w-xl"
                      variants={itemVariants}
                    >
                      {slide.title}
                    </motion.h2>

                    <motion.p
                      className="text-sm sm:text-base md:text-lg lg:text-xl text-[#D4AF37] mb-4 sm:mb-6 max-w-full sm:max-w-lg"
                      variants={itemVariants}
                    >
                      {slide.subtitle}
                    </motion.p>

                    <a href="/card">
                      <motion.button
                        className="bg-[#1C1C1C] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-xs sm:text-sm md:text-lg font-medium transition-colors hover:bg-[#2b2b2b]"
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                      >
                        {slide.cta}
                      </motion.button>
                    </a>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Carousel Dots */}
            <div className="absolute bottom-4 sm:bottom-6 md:bottom-10 left-0 right-0 flex justify-center gap-3 sm:gap-4 md:gap-6">
              {slides.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className="rounded-full w-2.5 h-2.5 sm:w-3 sm:h-3"
                  animate={
                    currentIndex === index
                      ? { scale: 1.4, backgroundColor: 'rgba(255,255,255,1)' }
                      : { scale: 1, backgroundColor: 'rgba(255,255,255,0.5)' }
                  }
                  transition={{ duration: 0.4, ease: [0.33, 1, 0.68, 1] }}
                />
              ))}
            </div>

            {/* Prev/Next Buttons */}
            <motion.button
              onClick={() => navigateSlide('prev')}
              className="absolute top-1/2 left-2 sm:left-3 md:left-5 -translate-y-1/2 bg-[#1c1c1c80] rounded-full p-2 sm:p-3 md:p-4 transition-colors hover:bg-[#1c1c1ccc]"
              whileHover={{ scale: 1.05, x: -1 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>

            <motion.button
              onClick={() => navigateSlide('next')}
              className="absolute top-1/2 right-2 sm:right-3 md:right-5 -translate-y-1/2 bg-[#1c1c1c80] rounded-full p-2 sm:p-3 md:p-4 transition-colors hover:bg-[#1c1c1ccc]"
              whileHover={{ scale: 1.05, x: 1 }}
              whileTap={{ scale: 0.96 }}
            >
              <svg className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 text-white" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </>
        )}
      </div>

      {/* Sections */}
      <SignatureLine />
      <AkoyaSignature />
      <FinalTouch />
      <Works />
      <Loved />
      <AkoyaClub />
    </>
  );
}

export default Home;
