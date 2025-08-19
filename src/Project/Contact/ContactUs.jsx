import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const formRef = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const formItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_6k1yfrm", "template_1oecve9", formRef.current, {
        publicKey: "9UYMBIe0T9UTT_SYw",
      })
      .then(() => {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 3000);
      })
      .catch((error) => {
        console.error("Failed to send message:", error.text);
        alert("❌ Failed to send message. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="relative bg-[#f8f5f2] py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-20 left-10 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 sm:w-60 h-40 sm:h-60 rounded-full bg-[#1C1C1C] mix-blend-multiply blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Heading */}
        <motion.div 
          className="text-center mb-12 sm:mb-16 md:mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-light text-[#1C1C1C] mb-3 tracking-tight"
            variants={itemVariants}
          >
            Contact Us
          </motion.h2>
          <motion.div className="flex justify-center items-center flex-wrap gap-2" variants={itemVariants}>
            <div className="w-10 sm:w-12 h-px bg-[#D4AF37]"></div>
            <p className="text-sm sm:text-base md:text-lg text-[#D4AF37] tracking-widest font-medium">
              GET IN TOUCH
            </p>
            <div className="w-10 sm:w-12 h-px bg-[#D4AF37]"></div>
          </motion.div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-16">
          {/* Contact Info */}
          <motion.div initial="hidden" animate="visible" variants={containerVariants}>
            <motion.h3 className="text-lg sm:text-xl font-medium text-[#1C1C1C] mb-6" variants={itemVariants}>
              How to reach us
            </motion.h3>
            <motion.p className="text-sm sm:text-base text-[#2C2C2C] mb-8 leading-relaxed" variants={itemVariants}>
              Our concierge team is available to assist you with any inquiries about our premium laundry services. 
              Reach out via your preferred method and we'll respond promptly.
            </motion.p>

            {/* Contact details */}
            <motion.div className="space-y-6" variants={containerVariants}>
              {/* Location */}
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg mr-4">
                  📍
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-[#1C1C1C]">Location</h4>
                  <p className="text-sm sm:text-base text-[#2C2C2C]">BahawalPur</p>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg mr-4">📞</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-[#1C1C1C]">Phone</h4>
                  <p className="text-sm sm:text-base text-[#2C2C2C]">03286626533</p>
                </div>
              </motion.div>

              {/* Email */}
              <motion.div className="flex items-start" variants={itemVariants}>
                <div className="bg-[#D4AF37]/10 p-3 rounded-lg mr-4">✉️</div>
                <div>
                  <h4 className="text-base sm:text-lg font-medium text-[#1C1C1C]">Email</h4>
                  <p className="text-sm sm:text-base text-[#2C2C2C]">farhanfalaksher533@gmail.com</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg p-6 sm:p-8 lg:p-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h3 className="text-lg sm:text-xl font-medium text-[#1C1C1C] mb-6" variants={formItemVariants}>
              Send us a message
            </motion.h3>
            <motion.form ref={formRef} onSubmit={handleSubmit} className="space-y-6" variants={containerVariants}>
              <motion.div variants={formItemVariants}>
                <label htmlFor="name" className="block text-sm font-medium text-[#2C2C2C] mb-2">Full Name</label>
                <input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#00000010] rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition bg-[#fafafa]"
                  placeholder="Farhan Falaksher"
                  required
                  type="text"
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="email" className="block text-sm font-medium text-[#2C2C2C] mb-2">Email Address</label>
                <input
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#00000010] rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition bg-[#fafafa]"
                  placeholder="farhanfalaksher533@gmail.com"
                  required
                  type="email"
                />
              </motion.div>
              <motion.div variants={formItemVariants}>
                <label htmlFor="message" className="block text-sm font-medium text-[#2C2C2C] mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-[#00000010] rounded-lg focus:ring-2 focus:ring-[#D4AF37] outline-none transition bg-[#fafafa]"
                  placeholder="Write something here"
                  rows="5"
                  required
                />
              </motion.div>
              <motion.button
                type="submit"
                className="w-full px-6 py-3 bg-[#1C1C1C] text-white font-medium rounded-lg transition-all duration-300 flex items-center justify-center"
                variants={formItemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isLoading}
              >
                {isLoading ? "Sending..." : isSubmitted ? "Message Sent!" : "Send Message"}
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
