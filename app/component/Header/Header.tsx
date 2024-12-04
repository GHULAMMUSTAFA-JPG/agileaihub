"use client";
import { useState } from "react";
import { IoChevronForward } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

const Header = () => {
  const [emailField, setInputField] = useState("");

  return (
    <div className="bg-white w-full h-full">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Full-screen YouTube video */}
        <iframe
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src="https://www.youtube.com/embed/wmYG1a0QvUA?autoplay=1&mute=1&loop=1&playlist=wmYG1a0QvUA&controls=0&showinfo=0"
          frameBorder="0"
          allow="autoplay; fullscreen"
          title="YouTube video"
        ></iframe>

        {/* Gradient overlay from left (black) to right (transparent) */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black to-transparent z-10"></div>

        {/* Centered content: Text and email input */}
        <div className="text-start absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white z-20">
          <div className="flex items-center mb-4">
            <div className="w-[100px] h-[2px] bg-white"></div>
            <p className="ml-4 font-light tracking-wide uppercase">
              One of the best solutions
            </p>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl font-medium leading-relaxed">
            Providing 360° Solutions
            <br /> For IT Infrastructure
            <br />
            Support Anywhere in The UAE
          </h1>
          <p className="leading-normal font-light text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
          </p>

          {/* Email Input Section */}
          <div className="flex items-center bg-white mt-6 max-w-[400px]">
            {/* Mail Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-sm bg-white pl-3">
              <IoMailOutline className="text-lg text-gray-500" />
            </div>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter your email address"
              value={emailField}
              onChange={(e) => setInputField(e.target.value)}
              className="bg-transparent border-b-2 border-white text-white py-2 px-4 outline-none placeholder:text-gray-500 placeholder:text-md w-[80%]"
            />

            {/* Get Started Button */}
            <button className="text-white flex gap-x-2 px-6 py-2 mr-1 my-1 rounded-sm bg-black items-center justify-center min-w-fit">
              Get Started <IoChevronForward />
            </button>
          </div>

          {/* ---- */}
        </div>
      </div>
    </div>
  );
};

export default Header;
