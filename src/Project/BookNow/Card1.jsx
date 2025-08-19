import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card1 = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [progress] = useState(16.6667);
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      name: "Iron Only",
      description: "Ironing without washing",
      price: "15 QAR",
    },
    {
      id: 2,
      name: "Washing & Iron",
      description: "Complete washing with ironing",
      price: "25 QAR",
    },
    {
      id: 3,
      name: "Dry Clean",
      description: "Professional dry cleaning",
      price: "35 QAR",
    },
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
  };

  const handleNext = () => {
    if (!selectedService) return;

    localStorage.setItem("selectedService", JSON.stringify(selectedService));

    navigate("/cloth");
  };

  return (
    <div
      className="min-h-screen py-8 sm:py-12 pt-16 sm:pt-20 px-3 sm:px-4 lg:px-8 relative"
      style={{
        background:
          "linear-gradient(rgb(44, 36, 22) 0%, rgb(74, 59, 42) 30%, rgb(107, 91, 71) 60%, rgb(249, 247, 244) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#D4AF37]/10 via-[#D4AF37]/5 to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 h-24 sm:h-32 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-[#B8941F] mix-blend-multiply filter blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-28 sm:w-40 h-28 sm:h-40 rounded-full bg-[#D4AF37] mix-blend-multiply filter blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-1/2 right-1/4 w-20 sm:w-28 h-20 sm:h-28 rounded-full bg-[#F4E4B8] mix-blend-multiply filter blur-2xl animate-pulse delay-3000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 h-1.5 sm:h-2">
                <div
                  className="bg-[#D4AF37] h-full transition-all duration-300"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>

              <div
                className="p-4 sm:p-6 text-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgb(44, 36, 22) 0%, rgb(74, 59, 42) 50%, rgb(107, 91, 71) 100%)",
                }}
              >
                <h2 className="text-lg sm:text-2xl font-light text-[#D4AF37]">
                  AKOYA PREMIUM LAUNDRY
                </h2>
                <p className="text-gray-300 mt-1 text-sm sm:text-base">
                  Step 1 of 6
                </p>
              </div>

              <div className="p-4 sm:p-6 lg:p-8">
                <div className="space-y-6" dir="ltr">
                  <h3 className="text-lg sm:text-xl font-light text-gray-700 text-center sm:text-left">
                    Choose Service Type:
                  </h3>

                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service) => (
                      <div
                        key={service.id}
                        className={`p-4 sm:p-6 border rounded-xl cursor-pointer transition-all min-h-[120px] flex items-center ${
                          selectedService?.id === service.id
                            ? "border-[#D4AF37] bg-[#F9F7F4] shadow-md"
                            : "border-gray-200 hover:border-gray-300 hover:shadow-sm"
                        }`}
                        onClick={() => handleServiceSelect(service)}
                        tabIndex="0"
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            handleServiceSelect(service);
                          }
                        }}
                      >
                        <div className="flex flex-col items-center text-center w-full">
                          <h4 className="font-medium text-base sm:text-lg">
                            {service.name}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                            {service.description}
                          </p>
                          {selectedService?.id === service.id && (
                            <p className="text-xs sm:text-sm text-[#D4AF37] font-medium mt-2">
                              {service.price}
                            </p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
                  <button
                    type="button"
                    className={`w-full sm:w-auto sm:ml-auto px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all ${
                      selectedService
                        ? "bg-[#D4AF37] hover:bg-[#B8941F] text-white"
                        : "bg-gray-300 cursor-not-allowed text-gray-600"
                    }`}
                    onClick={handleNext}
                    disabled={!selectedService}
                    tabIndex="0"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg sticky top-20 max-h-[85vh] overflow-hidden flex flex-col">
              <div className="p-4 sm:p-6 border-b border-gray-100">
                <h3 className="text-lg sm:text-xl font-bold text-center text-[#D4AF37]">
                  Order Summary
                </h3>
              </div>

              <div className="flex-1 overflow-y-auto scrollbar-hide p-4 sm:p-6">
                <div className="space-y-3">
                  {selectedService ? (
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">
                            {selectedService.name}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {selectedService.description}
                          </p>
                        </div>
                        <span className="font-medium text-[#D4AF37]">
                          {selectedService.price}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-8 text-gray-500">
                      <p>No service selected yet</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="border-t border-gray-200 p-4 sm:p-6 bg-gray-50 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Subtotal:</span>
                  <span className="font-medium">
                    {selectedService ? selectedService.price : "0 QAR"}
                  </span>
                </div>

                <div className="flex justify-between font-bold text-lg">
                  <span className="text-gray-700">Total:</span>
                  <span className="text-[#D4AF37]">
                    {selectedService ? selectedService.price : "0 QAR"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
