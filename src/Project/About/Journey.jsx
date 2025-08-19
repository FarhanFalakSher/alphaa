import React from 'react';
import { motion } from 'framer-motion';

function Fabric() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
      transition: { duration: 0.3 }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const dividerVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Title */}
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-light mb-4"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Meet Our Fabric Specialists
        </motion.h2>
        
        {/* Divider */}
        <motion.div 
          className="w-20 sm:w-24 h-px bg-[#D4AF37] mx-auto my-6"
          variants={dividerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        />
        
        {/* Subtitle */}
        <motion.p 
          className="text-[#2C2C2C] max-w-2xl mx-auto mb-10 text-sm sm:text-base md:text-lg"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Our team of garment care experts brings decades of combined experience in handling luxury fabrics
        </motion.p>
        
        {/* Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {/* Specialist 1 */}
          <motion.div 
            className="bg-[#f8f5f2] p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div variants={imageVariants} whileHover="hover">
              <img 
                alt="Ahmed Al-Mansoori" 
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#D4AF37]" 
                src="https://images.pexels.com/photos/769772/pexels-photo-769772.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </motion.div>
            <h4 className="text-lg sm:text-xl font-medium">Ahmed Al-Mansoori</h4>
            <p className="text-[#D4AF37] mb-3 sm:mb-4 text-sm sm:text-base">Head of Couture Care</p>
            <p className="text-[#2C2C2C] text-xs sm:text-sm">20+ years in luxury garment care</p>
          </motion.div>
          
          {/* Specialist 2 */}
          <motion.div 
            className="bg-[#f8f5f2] p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div variants={imageVariants} whileHover="hover">
              <img 
                alt="Layla Hassan" 
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#D4AF37]" 
                src="https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </motion.div>
            <h4 className="text-lg sm:text-xl font-medium">Layla Hassan</h4>
            <p className="text-[#D4AF37] mb-3 sm:mb-4 text-sm sm:text-base">Fabric Technology Expert</p>
            <p className="text-[#2C2C2C] text-xs sm:text-sm">Fabric scientist and preservation expert</p>
          </motion.div>
          
          {/* Specialist 3 */}
          <motion.div 
            className="bg-[#f8f5f2] p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div variants={imageVariants} whileHover="hover">
              <img 
                alt="Yousef Ibrahim" 
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-full mx-auto mb-6 object-cover border-4 border-[#D4AF37]" 
                src="https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              />
            </motion.div>
            <h4 className="text-lg sm:text-xl font-medium">Yousef Ibrahim</h4>
            <p className="text-[#D4AF37] mb-3 sm:mb-4 text-sm sm:text-base">Operations Director</p>
            <p className="text-[#2C2C2C] text-xs sm:text-sm">Ensuring seamless service delivery</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default Fabric;
