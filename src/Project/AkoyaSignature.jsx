import React from "react";
import { motion } from "framer-motion";

function AkoyaSignature() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        when: "beforeChildren",
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  const item = {
    hidden: { y: 25, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
      },
    },
  };

  return (
    <div className="py-12 md:py-16 lg:py-20 bg-gray-100 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
        className="text-center mb-12 md:mb-16"
      >
        <motion.h2
          variants={item}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
        >
          Akoya Signature Fragrances
        </motion.h2>
        <motion.p
          variants={item}
          className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto"
        >
          Premium scents crafted to elevate your laundry experience
        </motion.p>
      </motion.div>

      {/* Product Cards */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10"
      >
        {[
          {
            title: "Moony Akoya",
            img: "https://lundary.vercel.app/home/moony.jpg",
            desc: "A soft, dreamy scent that refreshes your laundry grace.",
          },
          {
            title: "Orchid Akoya",
            img: "https://lundary.vercel.app/home/orchard.jpg",
            desc: "Elegant floral notes to enhance freshness in every fabric.",
          },
          {
            title: "Elixr by Akoya",
            img: "https://lundary.vercel.app/home/elixr.jpg",
            desc: "A rich and luxurious blend for a signature fragrance finish.",
          },
          {
            title: "Imperial Akoya",
            img: "https://lundary.vercel.app/home/imperial.jpg",
            desc: "Royal and bold—crafted for the finest laundry experience.",
          },
        ].map((product, index) => (
          <motion.div key={index} variants={item}>
            <ProductCard
              title={product.title}
              img={product.img}
              desc={product.desc}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}

function ProductCard({ title, img, desc }) {
  return (
    <motion.div
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full"
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
      }}
    >
      <motion.img
        className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover"
        src={img}
        alt={title}
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] },
        }}
      />
      <div className="p-4 sm:p-6 flex flex-col justify-between flex-grow">
        <motion.h3
          className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 hover:text-[#D4AF37]"
          whileHover={{
            x: 3,
            transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
          }}
        >
          {title}
        </motion.h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4">{desc}</p>
        <div className="flex justify-between items-center">
          <span className="text-base sm:text-lg font-bold text-[#D4AF37]">
            7 QAR
          </span>
          <motion.a
            href="/card"
            className="bg-[#D4AF37] text-[#1C1C1C] rounded-2xl px-3 sm:px-4 py-1 sm:py-2 text-sm sm:text-base"
            whileHover={{
              scale: 1.04,
              transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
            }}
            whileTap={{
              scale: 0.95,
              transition: { duration: 0.3 },
            }}
          >
            Add
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
}

export default AkoyaSignature;
