import React, { useState } from "react";
import { motion } from "framer-motion";

// Animation variants for smooth fade-up effect
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const OurServices = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const filters = [
    "All",
    "Dry Cleaning",
    "Pressing",
    "Specialty",
    "Traditional",
    "Express",
    "Add-on",
  ];

  // Dummy services data (replace with your real services)
  const servicesData = [
    {
      title: "Premium Dry Cleaning",
      description: "Luxury dry cleaning service for delicate fabrics.",
      price: "$15",
      image: "https://via.placeholder.com/400x250",
      emoji: "🧺",
      tags: ["dry cleaning"],
    },
    {
      title: "Express Pressing",
      description: "Quick pressing for wrinkle-free garments.",
      price: "$8",
      image: "https://via.placeholder.com/400x250",
      emoji: "👔",
      tags: ["pressing", "express"],
    },
    {
      title: "Traditional Laundry",
      description: "Classic wash and fold with extra care.",
      price: "$10",
      image: "https://via.placeholder.com/400x250",
      emoji: "👕",
      tags: ["traditional"],
    },
  ];

  // Filter services
  const filteredServices =
    activeFilter === "All"
      ? servicesData
      : servicesData.filter(
          (service) =>
            service.tags?.includes(activeFilter.toLowerCase()) ||
            service.title.toLowerCase().includes(activeFilter.toLowerCase())
        );

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-16 lg:px-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-10 left-6 sm:top-20 sm:left-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 w-44 sm:w-60 h-44 sm:h-60 rounded-full bg-[#1C1C1C] mix-blend-multiply filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight">
            Our Services
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-2 sm:gap-4">
            <div className="w-10 sm:w-12 h-px bg-[#D4AF37]"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#D4AF37] tracking-widest font-medium">
              LUXURY GARMENT CARE
            </p>
            <div className="w-10 sm:w-12 h-px bg-[#D4AF37]"></div>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10 sm:mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium capitalize transition-colors ${
                filter === activeFilter
                  ? "bg-[#1C1C1C] text-[#D4AF37]"
                  : "bg-white text-[#1C1C1C] hover:bg-[#1C1C1C]/10"
              }`}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-40 sm:h-48 overflow-hidden">
                <img
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  src={service.image}
                />
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#D4AF37] text-[#1C1C1C] text-lg sm:text-xl w-10 sm:w-12 h-10 sm:h-12 rounded-full flex items-center justify-center shadow-lg">
                  {service.emoji}
                </div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3 gap-2">
                  <h3 className="text-lg sm:text-xl font-medium text-[#1C1C1C]">
                    {service.title}
                  </h3>
                  <span className="text-[#D4AF37] font-medium text-sm sm:text-base">
                    From {service.price}
                  </span>
                </div>
                <p className="text-[#2C2C2C] mb-4 text-sm sm:text-base">
                  {service.description}
                </p>
                <div className="h-px bg-[#D4AF37]/30 my-3 sm:my-4"></div>
                <a href="/card">
                  <button className="w-full px-4 py-2 sm:py-2.5 bg-[#D4AF37] text-[#1C1C1C] rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-[#1C1C1C] hover:text-[#D4AF37] transition-colors text-sm sm:text-base">
                    Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
