import { useState } from "react";
import logo from "../assets/Logo.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black shadow-md shadow-black/25 backdrop-blur-lg">
      {/* Logo */}
      <img
        src={logo}
        alt="Logo"
        className=" hover:cursor-pointer ml-16 h-9 w-auto"
      />

      {/* Navigation Items */}
      <ul className="hidden md:flex space-x-6 text-sm">
        <li className="hover:text-gray-500 hover:cursor-pointer">
          Home<KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </li>
        <li className="hover:text-gray-500 hover:cursor-pointer">About us</li>
        <li className="hover:text-gray-500 hover:cursor-pointer">
          Services <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </li>
        <li className="hover:text-gray-500 hover:cursor-pointer">
          Blog <KeyboardArrowDownIcon></KeyboardArrowDownIcon>
        </li>
        <li className="hover:text-gray-500 hover:cursor-pointer">Contact us</li>
      </ul>

      {/* Sign Up Button */}

      <button className=" hover:cursor-pointer text-sm mr-8 text-white hidden md:block px-4 py-2 bg-[#BB2828] hover:bg-[#bb2828dc]  rounded-4xl">
        Sign Up
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 py-4 text-sm md:hidden ">
          <li className="hover:text-gray-500 hover:cursor-pointer">Home</li>
          <li className="hover:text-gray-500 hover:cursor-pointer">About us</li>
          <li className="hover:text-gray-500 hover:cursor-pointer">Services</li>
          <li className="hover:text-gray-500 hover:cursor-pointer">Blog</li>
          <li className="hover:text-gray-500 hover:cursor-pointer">
            Contact us
          </li>
          <button className="hover:cursor-pointer text-sm text-white px-4 py-2 bg-[#BB2828] hover:bg-[#bb2828dc] rounded-4xl">
            Sign Up
          </button>
          <button className="hover:cursor-pointer text-sm text-white px-4 py-2 bg-[#BB2828] hover:bg-[#bb2828dc] rounded-4xl">
            Book a free trial
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
