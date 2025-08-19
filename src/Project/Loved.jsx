import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

// Images
import testimonialImage1 from "../assets/pexels-photo-3763188.webp";
import testimonialImage2 from "../assets/pexels-photo-3785077.webp";
import testimonialImage3 from "../assets/pexels-photo-415829.webp";

function Loved() {
  const testimonials = [
    {
      image: testimonialImage1,
      name: "Sheikha Al-Thani",
      title: "Fashion Designer",
      rating: 5,
      text: "Akoya's attention to detail is unmatched. My delicate couture pieces return looking better than when they were new. The only service I trust with my collection."
    },
    {
      image: testimonialImage2,
      name: "Mr. Khalid Al-Mansoori",
      title: "Executive Director",
      rating: 5,
      text: "As someone who wears bespoke suits daily, Akoya's executive service saves me hours each week. Their precision pressing is worth every dirham."
    },
    {
      image: testimonialImage3,
      name: "Mrs. Eleanor Rutherford",
      title: "Diplomat's Wife",
      rating: 4,
      text: "The fragrance infusion option is divine. My clothes return smelling like a Parisian boutique. It's become my signature scent in Doha's social circles."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="bg-[#faf9f7] py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 lg:px-24">
      {/* Header */}
      <header className="text-center mb-8 sm:mb-10 md:mb-14">
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-[#1C1C1C] mb-2 sm:mb-3">
          Loved by Doha's Finest
        </h2>
        <div className="flex justify-center items-center space-x-1 sm:space-x-2 md:space-x-3">
          <div className="w-6 h-px sm:w-8 md:w-10 bg-[#D4AF37]" />
          <p className="text-xs sm:text-sm md:text-base text-[#D4AF37] font-semibold uppercase tracking-widest">
            Client Testimonials
          </p>
          <div className="w-6 h-px sm:w-8 md:w-10 bg-[#D4AF37]" />
        </div>
      </header>

      {/* Carousel */}
      <div className="relative max-w-4xl mx-auto">
        <div className="testimonial-card bg-white shadow-md p-4 sm:p-6 md:p-8 lg:p-10 rounded-xl flex flex-col md:flex-row items-center md:items-start gap-4 sm:gap-6 md:gap-8">
          {/* Client Image */}
          <div className="testimonial-image w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full overflow-hidden border-4 border-[#D4AF37] shadow-lg flex-shrink-0">
            <img
              src={testimonials[currentSlide].image}
              alt={testimonials[currentSlide].name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Testimonial Content */}
          <div className="testimonial-content flex-1 text-center md:text-left mt-2 md:mt-0">
            {/* Star Rating */}
            <div className="text-yellow-500 text-sm sm:text-base md:text-lg mb-2 sm:mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={
                    i < testimonials[currentSlide].rating
                      ? "text-[#D4AF37]"
                      : "text-[#D4AF37]/40"
                  }
                >
                  ★
                </span>
              ))}
            </div>

            {/* Quote */}
            <div className="testimonial-text text-xs sm:text-sm md:text-base lg:text-lg italic text-[#2C2C2C] mb-2 sm:mb-4 md:mb-6 leading-relaxed">
              "{testimonials[currentSlide].text}"
            </div>

            {/* Client Info */}
            <div className="testimonial-client">
              <p className="font-medium text-[#1C1C1C] text-sm sm:text-base md:text-lg">
                {testimonials[currentSlide].name}
              </p>
              <p className="text-xs sm:text-sm md:text-base text-[#D4AF37]">
                {testimonials[currentSlide].title}
              </p>
            </div>
          </div>
        </div>

        {/* Dot Navigation */}
        <div className="testimonial-dots flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 sm:w-3 sm:h-3 md:w-4 md:h-4 rounded-full transition-all ${
                currentSlide === index
                  ? "bg-[#D4AF37] w-5 sm:w-5 md:w-6"
                  : "bg-[#D4AF37]/40 hover:cursor-pointer"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* CTA Button */}
      <a href="/fabric">
        <button className="px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 mt-8 sm:mt-10 md:mt-12 bg-[#1C1C1C] text-white rounded-full font-medium flex items-center mx-auto gap-1 sm:gap-2 md:gap-3 text-xs sm:text-sm md:text-base lg:text-lg tracking-wider hover:scale-105 transition-all duration-300">
          Join Our Discerning Clients <FaArrowRightLong />
        </button>
      </a>
    </section>
  );
}

export default Loved;
