import React from "react";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto px-5">
      {/* Title */}
      <div className="text-center text-2xl pt-10 text-gray-500">
        <p>
          ABOUT <span className="text-gray-700 font-medium">US</span>
        </p>
      </div>

      {/* Content Section */}
      <div className="my-10 flex flex-col md:flex-row gap-10 items-center">
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src={assets.about_image}
            alt="About Us"
            className="w-full md:max-w-[360px] rounded-lg shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2 text-gray-600 space-y-4">
          <p>
            Welcome to <b>Prescripto</b>, your trusted partner in managing your healthcare
            needs conveniently and efficiently. At Prescripto, we understand the challenges
            individuals face when it comes to scheduling doctor appointments and managing
            their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We continuously
            strive to enhance our platform, integrating the latest advancements to improve
            user experience and deliver superior service. Whether you're booking your first
            appointment or managing ongoing care, Prescripto is here to support you every step
            of the way.
          </p>
          <b className="text-gray-700">Our Vision</b>
          <p>
            Our vision at <b>Prescripto</b> is to create a seamless healthcare experience for every
            user. We aim to bridge the gap between patients and healthcare providers, making it
            easier for you to access the care you need, when you need it.
          </p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="text-center text-2xl my-10 text-gray-700 font-semibold">
        <p>Why <span className="text-blue-600">Choose Us</span></p>
      </div>

      {/* Features Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Efficiency */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 text-center 
            transition-all duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
          <b className="text-gray-700">Efficiency:</b>
          <p className="text-gray-600 mt-2 hover:text-white">
            Streamlined appointment scheduling that fits into your busy lifestyle.
          </p>
        </div>

        {/* Convenience */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 text-center 
            transition-all duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
          <b className="text-gray-700">Convenience:</b>
          <p className="text-gray-600 mt-2 hover:text-white">
            Access to a network of trusted healthcare professionals in your area.
          </p>
        </div>

        {/* Personalization */}
        <div className="bg-white border border-gray-300 rounded-lg shadow-md p-5 text-center 
            transition-all duration-300 hover:bg-blue-600 hover:text-white cursor-pointer">
          <b className="text-gray-700">Personalization:</b>
          <p className="text-gray-600 mt-2 hover:text-white">
            Tailored recommendations and reminders to help you stay on top of your health.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
