import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoIosBasket } from "react-icons/io";
import { useNavigate } from "react-router-dom"; // ✅ import navigate hook
import plasticWrap from "../assets/final01.jpg";
import fabricWrap from "../assets/final02.jpg";
import giftBox from "../assets/final03.jpg";

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
  const navigate = useNavigate(); // ✅ add navigate hook

  const handleBookClick = () => {
    navigate("/card"); // ✅ same as Navbar's bookNowClick
  };

  return (
    <section className="bg-[#faf9f7] py-12 px-4 sm:px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* ... (all your existing code unchanged) ... */}

      {/* CTA Button */}
      <div className="text-center mt-12 sm:mt-16">
        <button
          onClick={handleBookClick}
          className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-2 sm:gap-3 text-xs sm:text-sm md:text-base tracking-wider"
        >
          Book Your Order
          <IoIosBasket className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>
    </section>
  );
}

export default FinalTouch;
