import React from "react";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import sign01 from "../assets/sign01.jpg";
import sign02 from "../assets/sign02.jpg";
import sign03 from "../assets/sign03.jpg";

function SignatureLine() {
  const navigate = useNavigate();

  const cards = [
    {
      img: sign01,
      title: "The Platinum Care",
      icon: "✨",
      desc:
        "Our highest tier service for your most precious garments. Hand-washed, steamed, and wrapped in protective tissue.",
      to: "/our",
    },
    {
      img: sign02,
      title: "Executive Collection",
      icon: "👔",
      desc:
        "Precision care for business attire. Perfect creases, stain removal, and fabric revitalization for your professional image.",
      to: "/our",
    },
    {
      img: sign03,
      title: "Couture Preservation",
      icon: "🧵",
      desc:
        "Specialized care for designer pieces and delicate fabrics. Museum-quality cleaning to maintain texture and color integrity.",
      to: "/our",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.18, when: "beforeChildren" },
    },
  };

  const item = {
    hidden: { y: 22, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
      className="bg-white px-4 sm:px-6 md:px-10 lg:px-20 xl:px-28 py-12 md:py-16"
    >
      {/* Header */}
      <motion.div variants={item} className="text-center mb-12 md:mb-16">
        <h1 className="text-[34px] md:text-[44px] lg:text-[56px] leading-tight font-light text-[#1C1C1C]">
          Signature Lines
        </h1>

        {/* gold divider + subtitle exactly like screenshot */}
        <div className="mt-3 flex items-center justify-center gap-4">
          <span className="h-px w-12 md:w-16 bg-[#D4AF37]" />
          <p className="text-[#D4AF37] tracking-[0.35em] text-xs md:text-sm font-medium">
            THE AKOYA COLLECTION
          </p>
          <span className="h-px w-12 md:w-16 bg-[#D4AF37]" />
        </div>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {cards.map((card, i) => (
          <motion.article
            key={card.title}
            variants={item}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.35 }}
            className="relative rounded-2xl overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,.12)]"
          >
            {/* Keep all cards same size; aspect-[4/3] matches screenshot proportions */}
            <div className="relative aspect-[4/3] md:aspect-[5/4]">
              <img
                src={card.img}
                alt={card.title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* stronger bottom gradient for legibility */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/85 via-black/55 to-transparent" />

              {/* badge */}
              <div className="absolute top-4 left-4 md:top-5 md:left-5">
                <div className="h-11 w-11 md:h-12 md:w-12 rounded-full bg-[#D4AF37] text-white grid place-items-center text-2xl shadow-lg">
                  <span aria-hidden>{card.icon}</span>
                </div>
              </div>

              {/* copy block — aligned to same paddings for all */}
              <div className="absolute inset-x-4 md:inset-x-5 bottom-4 text-white">
                <h3 className="text-xl md:text-2xl font-medium mb-1.5">
                  {card.title}
                </h3>
                <p className="text-white/90 text-sm md:text-base leading-relaxed line-clamp-3">
                  {card.desc}
                </p>

                <motion.button
                  onClick={() => navigate(card.to)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-3 inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm md:text-base font-medium"
                  style={{
                    backgroundColor: "rgb(212, 175, 55)",
                    color: "rgb(28, 28, 28)",
                  }}
                >
                  Discover <FaArrowRightLong className="translate-y-[1px]" />
                </motion.button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* View All */}
      <motion.div variants={item} className="mt-10 md:mt-12 text-center">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/services")}
          className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#1C1C1C] px-6 md:px-8 py-2.5 text-sm md:text-base text-[#1C1C1C] hover:bg-[#1C1C1C] hover:text-white transition-colors"
        >
          View All Collection <FaArrowRightLong />
        </motion.button>
      </motion.div>

      {/* Services teaser (kept minimal + aligned) */}
      <motion.div variants={item} className="text-center mt-14 md:mt-20">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-[#1C1C1C]">
          How Would You Like It Washed?
        </h2>
        <p className="text-[#D4AF37] font-semibold tracking-wide uppercase text-sm md:text-base mt-2">
          Choose your experience
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 mt-6 md:mt-8">
        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          className="rounded-3xl bg-[#F5E1DA] p-6 md:p-8 text-center shadow-[0_10px_20px_rgba(0,0,0,.08)]"
        >
          <div className="text-4xl md:text-5xl mb-3">🧼</div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
            Standard Wash
          </h3>
          <p className="mt-2 text-[#2C2C2C] text-sm md:text-base">
            Our signature 48-hour service with gentle cleaning, eco-friendly
            detergents, and basic folding.
          </p>
          <p className="mt-2 text-[#D4AF37] font-medium">From 50 QAR</p>
        </motion.div>

        <motion.div
          variants={item}
          whileHover={{ y: -4 }}
          className="rounded-3xl bg-[#F5E1DA] p-6 md:p-8 text-center shadow-[0_10px_20px_rgba(0,0,0,.08)]"
        >
          <div className="text-4xl md:text-5xl mb-3">⚡</div>
          <h3 className="text-xl md:text-2xl font-semibold text-[#1C1C1C]">
            Express Wash
          </h3>
          <p className="mt-2 text-[#2C2C2C] text-sm md:text-base">
            Need it fast? Get 24-hour turnaround, priority processing, and
            premium care.
          </p>
          <p className="mt-2 text-[#D4AF37] font-medium">From 80 QAR</p>
        </motion.div>
      </div>

      <motion.div variants={item} className="text-center mt-8 md:mt-12">
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate("/services")}
          className="rounded-full bg-[#D4AF37] text-[#1C1C1C] font-semibold px-6 md:px-8 py-2.5 text-sm md:text-base shadow-md"
        >
          Continue to Garment Selection
        </motion.button>
      </motion.div>
    </motion.section>
  );
}

export default SignatureLine;
