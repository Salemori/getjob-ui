import React from "react";
import logo from "../assets/getajob_logo-removebg-preview.svg";

const Header = () => {
  return (
    <header className="bg-transparent p-4 flex items-center justify-between font-[Graphik] font-[400] text-[16px]">
     
      <div className="flex items-center">
        <img src={logo} alt="Get A Job Logo" className="h-10 w-auto" />
      </div>

      
      <nav className="hidden md:flex space-x-6 text-gray-700">
        <p className="cursor-pointer ">Companies</p>
        <p className="cursor-pointer ">Candidates</p>
        <p className="cursor-pointer ">Assessments</p>
        <p className="cursor-pointer ">Post a Job</p>
        <p className="cursor-pointer ">Career Advice</p>
      </nav>

      {/* Authentication Links */}
      <div className="flex items-center space-x-4">
        <a
          href="#"
          className=" hover:underline font-medium hidden md:block"
        >
          Sign Up
        </a>
        <button className="px-4 py-2 bg-[#06942A33] text-[#06942A] rounded-[25px] shadow-md ">
          Log In
        </button>
      </div>
    </header>
  );
};

export default Header;