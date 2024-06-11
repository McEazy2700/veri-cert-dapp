"use client";
import React from "react";

export const Nav = () => {

  return (
    <header className="w-full">
      <nav className="py-7 lg:px-14 px-7">
        <div className="flex justify-between items-center gap-8 text-base">
          {/* Logo */}
          <h1>Veecert</h1>

        {/* Nav Links */}
        <div className="space-x-12 lg:flex hidden items-center">
          <a href="#home" className="text-gray-200 hover:text-white transition duration-200">Home</a>
          <a href="#pricing" className="text-gray-200 hover:text-white transition duration-200">Pricing</a>
          <a href="#explore" className="text-gray-200 hover:text-white transition duration-200">Explore</a>
          <a href="#admin" className="text-gray-200 hover:text-white transition duration-200">Admin</a>
        </div>

          {/* Button */}
          <div className="space-x-12 lg:flex hidden items-center">
            <button className="text-bold px-4 py-3 leading-none text-gray-200 transition-all duration-100 shadow-lg rounded-lg focus:outline-none focus:shadow-outline bg-transparent hover:bg-slate-900 hover:text-white hover:font-bold">
              Sign-up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
