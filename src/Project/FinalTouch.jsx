import React, { useState } from "react";
import { motion } from "framer-motion";
import plasticWrap from "../assets/final01.jpg";
import fabricWrap from "../assets/final02.jpg";
import giftBox from "../assets/final03.jpg";
import { IoIosBasket } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // ✅ added

const packages = [
  {
    id: 1,
    title: "Plastic Wrap",
    description:
      "Crystal-clear protective wrapping with our embossed gold seal for discreet luxury.",
    features: [
      "Medical-grade transparency",
      "Anti-static interior",
      "Recyclable material",
      "Tamper-evident closure",
    ],
    price: "Included",
    image: plasticWrap,
  },
  {
    id: 2,
    title: "Luxury Fabric Wrap",
    description:
      "Cashmere-lined protective casing with magnetic closure and monogram option.",
    features: [
      "Italian wool exterior",
      "Silk-lined interior",
      "Magnetic seal",
      "Reusable design",
    ],
    price: "+25 QAR",
    image: fabricWrap,
  },
  {
    id: 3,
    title: "Premium Gift Box",
    description:
      "Handcrafted wooden presentation case with velvet interior and scent capsule.",
    features: [
      "Sandalwood construction",
      "French velvet lining",
      "Integrated scent capsule",
      "Heirloom quality",
    ],
    price: "+50 QAR",
    image: giftBox,
  },
];

function FinalTouch() {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const navigate = useNavigate(); // ✅ added

  return (
    <section className="bg-[#faf9f7] py-12 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7130555/pexels-photo-7130555.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight">
            The Final Touch
          </h2>
          <div className="flex justify-center items-center flex-wrap gap-2">
            <div className="w-10 sm:w-12 h-px bg-[#D4AF37]"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#D4AF37] tracking-widest font-medium">
              PACKAGING OPTIONS
            </p>
            <div className="w-10 sm:w-12 h-px bg-[#D4AF37]"></div>
          </div>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {packages.map((pkg, index) => {
            const isSelected = selectedPackage === pkg.id;
            const badgeStyle = {
              backgroundColor: isSelected ? "#1C1C1C" : "#D4AF37",
              color: isSelected ? "#D4AF37" : "#1C1C1C",
            };

            return (
              <motion.div
                key={pkg.id}
                className="relative group hover:translate-y-2 transition-all duration-300"
                onClick={() => setSelectedPackage(pkg.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div
                  className={`bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer transition-all duration-300 h-full flex flex-col ${
                    isSelected
                      ? "ring-4 ring-[#D4AF37]"
                      : "ring-1 ring-[#00000010]"
                  }`}
                >
                  {/* Image */}
                  <div className="relative h-64 sm:h-72 md:h-80 lg:h-94 overflow-hidden group">
                    <img
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[950ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span
                        className="px-3 sm:px-4 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium tracking-wide shadow-md"
                        style={badgeStyle}
                      >
                        {pkg.price}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex-grow flex flex-col">
                    <h3 className="text-lg sm:text-xl font-medium text-[#1C1C1C] mb-2 hover:text-[#D4AF37] transition-all duration-300">
                      {pkg.title}
                    </h3>
                    <p className="text-[#2C2C2C] mb-4 text-sm sm:text-base leading-relaxed">
                      {pkg.description}
                    </p>
                    <div className="mt-auto space-y-2.5">
                      {pkg.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-start hover:translate-x-2 transition-all duration-300"
                        >
                          <svg
                            className="w-4 h-4 text-[#D4AF37] mt-0.5 mr-2.5 flex-shrink-0"
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
                          <span className="text-xs sm:text-sm text-[#1C1C1C] leading-tight">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Highlight Line */}
                  <div
                    className="w-full transition-all duration-300"
                    style={{
                      height: isSelected ? "4px" : "0px",
                      backgroundColor: "#D4AF37",
                    }}
                  />
                </div>

                {/* Selected Ribbon */}
                {isSelected && (
                  <div
                    className="absolute -top-3 -right-8 bg-[#D4AF37] text-white px-6 sm:px-8 py-1 font-medium text-[10px] sm:text-xs shadow-lg rotate-[-45deg]"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    SELECTED
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <a href="/book-now">
            <button
              onClick={(e) => {
                e.preventDefault();   // ✅ stops the <a> redirect
                navigate("/card");    // ✅ same as Navbar’s Book Now
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-2 sm:gap-3 text-xs sm:text-sm md:text-base tracking-wider"
            >
              Book Your Order
              <IoIosBasket className="h-4 w-4 sm:h-5 sm:w-5" />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default FinalTouch;
