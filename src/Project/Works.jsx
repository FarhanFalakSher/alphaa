import React from "react";
import { motion } from "framer-motion";
import { FaCalendar } from "react-icons/fa";
import { IoBag } from "react-icons/io5";
import { BsLightningCharge } from "react-icons/bs";
import { MdOutlineDone } from "react-icons/md";

function Works() {
  const steps = [
    {
      step: 1,
      title: "Schedule Your Pickup",
      icon: <FaCalendar />,
      video: "src/assets/Pickup (1).mp4",
      bulletPoints: [
        "24/7 booking availability",
        "Recurring pickup scheduling available",
      ],
      description:
        "Book through our app, WhatsApp, or website. We offer flexible 2-hour pickup windows.",
      reverse: false,
    },
    {
      step: 2,
      title: "Professional Collection",
      icon: <IoBag />,
      video: "src/assets/professional_collection.mp4",
      bulletPoints: [
        "Contactless pickup available",
        "Digital receipt provided",
      ],
      description:
        "Our uniformed valets arrive in discreet luxury vehicles with garment bags.",
      reverse: true,
    },
    {
      step: 3,
      title: "Expert Processing",
      icon: <BsLightningCharge />,
      video: "src/assets/ExpertProcessing.mp4",
      bulletPoints: [
        "Individual garment tracking",
        "Quality control at every stage",
      ],
      description:
        "Your garments receive specialized care at our state-of-the-art facility.",
      reverse: false,
    },
    {
      step: 4,
      title: "Luxury Delivery",
      icon: <MdOutlineDone />,
      video: "src/assets/luxury.jpg",
      bulletPoints: [
        "Same-day delivery available",
        "Hanger-ready with protective covers",
      ],
      description:
        "Impeccably packaged garments returned at your preferred time.",
      reverse: true,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2, when: "beforeChildren" } }
  };

  const item = {
    hidden: { y: 50, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { type: "spring", damping: 12, stiffness: 100, duration: 0.5 } }
  };

  return (
    <div className="bg-[#f8f5f2] py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-12 lg:px-24 relative overflow-hidden">
      {/* Decorative background blur circles */}
      <motion.div className="absolute inset-0 opacity-5 pointer-events-none">
        <motion.div className="absolute top-20 left-10 w-32 sm:w-40 h-32 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3, duration: 1 }} />
        <motion.div className="absolute bottom-10 right-10 w-48 sm:w-60 h-48 sm:h-60 rounded-full bg-[#1C1C1C] mix-blend-multiply filter blur-3xl" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, duration: 1 }} />
      </motion.div>

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={container} className="text-center mb-12 sm:mb-16">
          <motion.h2 variants={item} className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light text-[#1C1C1C] mb-2 sm:mb-3">How It Works</motion.h2>
          <motion.p variants={item} className="text-[#D4AF37] text-sm sm:text-base tracking-widest font-medium mb-1">SEAMLESS PICKUP PROCESS</motion.p>
          <motion.div variants={item} className="w-12 h-px bg-[#D4AF37] mx-auto"></motion.div>
        </motion.div>

        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <motion.div className="hidden md:block absolute left-1/2 h-full w-0.5 bg-[#D4AF37] transform -translate-x-1/2" initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true }} transition={{ duration: 1, delay: 0.2 }} />

          {/* Steps */}
          {steps.map((step, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.1 }} variants={container} className={`flex flex-col md:flex-row ${step.reverse ? "md:flex-row-reverse" : ""} items-center gap-6 sm:gap-8 md:gap-12 mb-8 sm:mb-12 md:mb-16`}>
              
              {/* Media */}
              <motion.div variants={item} className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-xl hover:scale-105 transition-all duration-300">
                {step.video.endsWith(".jpg") || step.video.endsWith(".png") ? (
                  <motion.img src={step.video} alt={step.title} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl" />
                ) : (
                  <motion.video src={step.video} className="w-full h-56 sm:h-64 md:h-72 lg:h-80 object-cover rounded-xl" autoPlay loop muted playsInline />
                )}
              </motion.div>

              {/* Text */}
              <motion.div variants={item} className="w-full md:w-1/2 relative mt-4 md:mt-0">
                {/* Step number (desktop) */}
                <motion.div className={`hidden md:flex absolute top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg ${step.reverse ? "right-[-2rem]" : "left-[-2rem]"}`} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ type: "spring", delay: 0.3 }}>
                  {step.step}
                </motion.div>

                {/* Card */}
                <motion.div className="bg-white p-4 sm:p-6 md:p-8 rounded-xl shadow-lg relative z-10">
                  {/* Step number (mobile) */}
                  <motion.div className="md:hidden absolute -top-5 -left-5 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#D4AF37] text-white flex items-center justify-center font-bold shadow-md">
                    {step.step}
                  </motion.div>

                  {/* Title */}
                  <motion.h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[#1C1C1C] mb-2 flex items-center gap-2">
                    <span className="text-[#D4AF37]">{step.icon}</span>
                    {step.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p className="text-sm sm:text-base text-gray-600 mb-2">{step.description}</motion.p>

                  {/* Divider */}
                  <motion.hr className="border-t border-gray-300 my-2 sm:my-3" />

                  {/* Bullet Points */}
                  <motion.ul className="text-sm sm:text-base text-gray-600 space-y-1 sm:space-y-2">
                    {step.bulletPoints.map((point, i) => (
                      <motion.li key={i} className="flex items-start gap-2">
                        <span className="text-[#D4AF37] mt-1"><MdOutlineDone /></span>
                        <span>{point}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        
        <motion.div className="text-center mt-6 sm:mt-8 md:mt-12">
          <a href="/about">
            <motion.button className="px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center gap-2 sm:gap-3 text-sm sm:text-base md:text-lg tracking-wider hover:scale-105 transition-all duration-300 hover:bg-[#D4AF37] hover:text-[#1C1C1C]">
              Schedule Your Pickup +
            </motion.button>
          </a>
        </motion.div>
      </div>
    </div>
  );
}



export default Works;
