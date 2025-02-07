import React, { useState } from "react";
import { Button } from "@mui/material";
import LeadsFeature from "../assets/LeadsFeature.png";

const features = [
  { id: 1, text: "CRM", desc: "Comprehensive CRM Solution" },
  { id: 2, text: "Leads", desc: "Effective Leads Management" },
  { id: 3, text: "Communication", desc: "Comprehensive CRM Solution" },
  { id: 4, text: "CRM", desc: "Comprehensive CRM Solution" },
];

const FeatureSlider = () => {
  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="max-w-6xl mx-auto p-6 z-10">
      {/* Heading */}
      <h2 className="text-3xl font-light text-center my-6">
        Beyond Management: <span className="text-[#BB2828]">Real</span> Results.
      </h2>

      {/* Buttons */}
      <div className="flex justify-center gap-3 mb-8">
        {features.map((feature) => (
          <button
            className={`hover:cursor-pointer text-sm mr-8 text-[#FD4646] px-4 py-1.5 rounded-4xl transition-all duration-300 ${
              selectedFeature.id === feature.id
                ? "bg-gradient-to-r from-[#680F0F] to-[#FD4646] hover:bg-[#bb2828dc] text-white"
                : "bg-white text-[#FD4646] hover:bg-[#f5f5f5] border border-[#FD4646]"
            }`}
            key={feature.id}
            onClick={() => setSelectedFeature(feature)}
          >
            {feature.text}
          </button>
        ))}
      </div>

      {/* Features & Image Section */}
      <div className="flex flex-col md:flex-row items-center  gap-30">
        {/* Left Side - Feature Bars */}
        <div className="w-full md:w-1/2 space-y-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className={`p-3 border rounded-lg transition-all duration-300 ${
                selectedFeature.id === feature.id
                  ? "bg-gradient-to-r from-[#680F0F] to-[#FD4646] text-white"
                  : " bg-white"
              }`}
            >
              {feature.desc}
            </div>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src={LeadsFeature}
            alt="Feature Illustration"
            className="w-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureSlider;
