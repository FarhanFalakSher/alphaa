import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const AkoyaClub = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const badgeVariants = {
    hidden: { scale: 0, rotate: -30 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
        delay: 0.5,
      },
    },
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.2 },
  };

  const buttonTap = {
    scale: 0.98,
  };

  const hello = () => navigate("/our");
  const Hello = () => navigate("/journey");

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-[#1C1C1C] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10 bg-[url('./home/exclusive.jpg')]"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 items-center"
        >
          {/* Left image */}
          <motion.div className="relative" variants={itemVariants}>
            <motion.div
              variants={imageVariants}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                alt="VIP Laundry Service"
                className="w-full h-64 sm:h-80 md:h-auto object-cover"
                src="src/assets/luxury.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-transparent to-transparent"></div>
            </motion.div>
            <motion.div
              variants={badgeVariants}
              className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 bg-[#D4AF37] text-[#1C1C1C] px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold flex items-center shadow-lg text-sm sm:text-base"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>
              EXCLUSIVE
            </motion.div>
          </motion.div>

          {/* Right content */}
          <motion.div variants={containerVariants}>
            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl font-light text-[#D4AF37] mb-3 sm:mb-4 tracking-tight"
            >
              Akoya Club
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-white/80 mb-1 sm:mb-2 tracking-widest font-medium"
            >
              FOR THE FEW WHO KNOW
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="w-16 sm:w-20 h-0.5 bg-[#D4AF37] my-4 sm:my-6"
            ></motion.div>
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg text-white/90 mb-6 sm:mb-8 leading-relaxed"
            >
              Our invitation-only membership program offers unparalleled benefits
              for those who demand the absolute best in garment care and
              convenience.
            </motion.p>

            {/* Features list */}
            <motion.ul
              variants={containerVariants}
              className="space-y-3 sm:space-y-4 mb-8 sm:mb-10"
            >
              {[
                "Priority scheduling with 2-hour pickup windows",
                "Dedicated garment concierge",
                "Complimentary fragrance infusion",
                "Luxury packaging as standard",
                "Bi-annual complimentary couture care",
                "Exclusive seasonal offers",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start text-sm sm:text-base text-white/90"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-[#D4AF37] mr-2 sm:mr-3 mt-0.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* Buttons */}
            <motion.div
              variants={containerVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.button
                onClick={Hello}
                variants={itemVariants}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] rounded-full font-medium flex items-center justify-center gap-2 hover:bg-[#D4AF37] transition-all duration-500 hover:text-black text-sm sm:text-base"
              >
                Request Invitation
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </motion.button>

              <motion.button
                onClick={hello}
                variants={itemVariants}
                whileHover={buttonHover}
                whileTap={buttonTap}
                className="px-6 sm:px-8 py-2.5 sm:py-3 bg-[#D4AF37] text-[#1C1C1C] rounded-full font-medium flex items-center justify-center gap-2 text-sm sm:text-base"
              >
                Learn More
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 sm:h-5 sm:w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AkoyaClub;
