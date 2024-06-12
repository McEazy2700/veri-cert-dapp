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
            <a href="/" className="transition hover:scale-110 duration-200">
              Home
            </a>
            <a href="/#pricing" className="transition hover:scale-110 duration-200">
              Pricing
            </a>
            <a href="/explore" className="transition hover:scale-110 duration-200">
              Explore
            </a>
            <a href="/admin" className="transition hover:scale-110 duration-200">
              Admin
            </a>
          </div>

          {/* Button */}
          <div className="space-x-12 lg:flex hidden items-center">
            <button className="text-bold px-4 py-3 leading-none transition-all duration-100 shadow-lg rounded-lg focus:outline-none focus:shadow-outline bg-transparent hover:font-bold">
              Sign-up
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
