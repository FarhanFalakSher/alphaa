import React from "react";
import footerLogo from "../assets/imgfooter.png";
import bottomLogo from "../assets/bottomimg.png";

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white border-t border-[#D4AF37]/20 relative">
      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">
        {/* Logo & Description */}
        <div className="text-center sm:text-left">
          <img
            src={footerLogo}
            alt="Akoya Deluxe Cleaning Logo"
            loading="lazy"
            className="w-24 sm:w-28 mx-auto sm:mx-0 mb-4"
          />
          <p className="text-white/70 leading-relaxed text-sm sm:text-base">
            Luxury garment care redefined. Serving Doha's discerning clients
            with unparalleled quality and service.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-[#D4AF37] mb-6 tracking-wider">
            OUR SERVICES
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            {[
              "Premium Laundry",
              "Dry Cleaning",
              "Steam Pressing",
              "Fragrance Infusion",
              "Couture Care",
              "VIP Club",
            ].map((service, index) => (
              <li
                key={index}
                className={`flex items-center gap-2 transition-transform duration-300 hover:${
                  index % 2 === 0 ? "-translate-x-1" : "translate-x-1"
                } hover:text-yellow-400`}
              >
                <span className="text-yellow-300 text-xl">›</span> {service}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-[#D4AF37] mb-6 tracking-wider">
            CONTACT US
          </h3>
          <ul className="space-y-2 text-gray-300 text-sm sm:text-base">
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#D4AF37] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998..."
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              <span className="hover:text-[#D4AF37] transition-all duration-300">
                Farhan Falaksher
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#D4AF37] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28..."
                ></path>
              </svg>
              <span className="hover:text-[#D4AF37] transition-all duration-300">
                +92 3286626533
              </span>
            </li>
            <li className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-[#D4AF37] flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2..."
                ></path>
              </svg>
              <a
                href="mailto:farhanfalaksher533@gmail.com"
                className="hover:text-yellow-400 transition-all duration-300"
              >
                farhanfalaksher533@gmail.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg sm:text-xl font-medium text-[#D4AF37] mb-6 tracking-wider">
            NEWSLETTER
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-4">
            Subscribe for exclusive offers and garment care tips.
          </p>
          <form className="space-y-3 sm:space-y-4">
            <input
              placeholder="Your email address"
              type="email"
              className="w-full px-4 py-2 sm:py-3 bg-[#2C2C2C] border border-[#D4AF37]/30 rounded text-white placeholder-white/50 focus:outline-none focus:ring-1 focus:ring-[#D4AF37]"
            />
            <button
              type="submit"
              className="w-full px-4 sm:px-6 py-2 sm:py-3 bg-[#D4AF37] text-[#1C1C1C] font-medium rounded hover:scale-105 transition-all duration-500"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-[#D4AF37]/10 py-6 relative">
        <div className="fixed right-4 bottom-4 z-10">
          <img
            src={bottomLogo}
            alt="Akoya Footer Logo"
            loading="lazy"
            className="h-16 w-16 sm:h-20 sm:w-20 rounded-full object-fill shadow-lg hover:scale-110 transition-transform"
          />
        </div>

        <div className="text-center mt-6 sm:mt-0">
          <p className="text-xs sm:text-sm text-gray-500">
            © {new Date().getFullYear()}{" "}
            <span className="text-[#D4AF37] font-semibold">Farhan Falaksher</span>. All rights reserved.
          </p>
          <p className="text-xs sm:text-sm text-gray-400 mt-2">
            Crafted with ❤️ using React & Tailwind CSS
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 mt-4 flex flex-col md:flex-row justify-end items-end gap-4 text-white/50 text-sm sm:text-base">
          <a className="hover:text-[#D4AF37] transition-colors" href="/privacy">Privacy Policy</a>
          <a className="hover:text-[#D4AF37] transition-colors" href="/terms">Terms of Service</a>
          <a className="hover:text-[#D4AF37] transition-colors" href="/sitemap">Sitemap</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
