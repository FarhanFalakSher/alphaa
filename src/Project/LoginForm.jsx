import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const hello = (e) => {
    e.preventDefault(); // prevent default form submission
    alert("Thanks for logging in!");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f9f7f4] to-[#f1ece5] flex items-center justify-center p-4 sm:p-6 relative">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 text-[#D4AF37] hover:text-yellow-600 flex items-center z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 sm:h-6 sm:w-6 mr-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
            clipRule="evenodd"
          />
        </svg>
        Back
      </button>

      {/* Background Circle */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 md:w-40 h-24 sm:h-32 md:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
      </div>

      {/* Form Container */}
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl bg-white rounded-xl mt-12 shadow-lg overflow-hidden border border-gray-100">
        <div className="bg-[#1C1C1C] p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-light text-[#D4AF37] tracking-wide">
            AKOYA PREMIUM LAUNDRY
          </h2>
          <div className="mt-2 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"></div>
          <p className="mt-2 text-gray-300 text-sm sm:text-base md:text-lg">Sign in to your account</p>
        </div>

        <div className="p-6 sm:p-8 md:p-10">
          <form>
            {/* Email Field */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1" htmlFor="email">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <input
                  id="email"
                  type="email"
                  placeholder="farhanfalaksher533@gmail.com"
                  required
                  className="block w-full pl-10 sm:pl-12 md:pl-14 pr-4 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200"
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-4 sm:mb-6">
              <label className="block text-sm sm:text-base md:text-lg font-medium text-gray-700 mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    ></path>
                  </svg>
                </div>
                <input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  required
                  className="block w-full pl-10 sm:pl-12 md:pl-14 pr-4 py-2.5 sm:py-3 md:py-3.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition duration-200"
                />
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex flex-col sm:flex-row items-center justify-between mb-4 sm:mb-6">
              <div className="flex items-center mb-2 sm:mb-0">
                <input
                  id="remember"
                  type="checkbox"
                  name="remember"
                  className="h-4 w-4 sm:h-5 sm:w-5 text-[#D4AF37] focus:ring-[#D4AF37] border-gray-300 rounded"
                />
                <label htmlFor="remember" className="ml-2 text-sm sm:text-base md:text-lg text-gray-700">
                  Remember me
                </label>
              </div>
              <div className="text-sm sm:text-base md:text-lg">
                <a className="font-medium text-[#D4AF37] hover:text-yellow-600" href="/forgot-password">
                  Forgot password?
                </a>
              </div>
            </div>

            {/* Sign In Button */}
            <button
              onClick={hello}
              type="submit"
              className="w-full flex justify-center py-2.5 sm:py-3 md:py-3.5 px-4 sm:px-6 md:px-8 border border-transparent rounded-lg shadow-sm text-sm sm:text-base md:text-lg font-medium text-white bg-gradient-to-r from-[#D4AF37] to-[#F1C232] hover:from-[#C9A227] hover:to-[#E0B82D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#D4AF37] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Sign in
            </button>
          </form>

          {/* Divider */}
          <div className="mt-4 sm:mt-6 relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm sm:text-base md:text-lg">
              <span className="px-2 bg-white text-gray-500">New to AKOYA?</span>
            </div>
          </div>

          {/* Sign Up Link */}
          <div className="mt-4 sm:mt-6 text-center">
            <a
              className="font-medium text-[#D4AF37] hover:text-yellow-600 border-b border-transparent hover:border-[#D4AF37] transition duration-200 text-sm sm:text-base md:text-lg"
              href="/login"
            >
              Create your account
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
