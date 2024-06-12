"use client";
import React, { useState } from "react";

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState<boolean>(true);

  return (
    <div id="pricing">
      {/* Pricing toggle */}
      <div className="flex justify-center pt-8 max-w-[14rem] m-auto mb-8 lg:mb-16">
        <div className="relative flex w-full p-1 bg-white dark:bg-transparent shadow-lg rounded-md">
          <span
            className="absolute inset-0 m-1 pointer-events-none"
            aria-hidden="true"
          >
            <span
              className={`absolute inset-0 w-1/2 bg-teal-300 rounded-md shadow-sm shadow-teal-950/10 transform transition-transform duration-150 ease-in-out ${
                isAnnual ? "translate-x-0" : "translate-x-full"
              }`}
            ></span>
          </span>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? "text-white" : "text-slate-500 dark:text-slate-400"
            }`}
            onClick={() => setIsAnnual(true)}
            aria-pressed={isAnnual}
          >
            Yearly
            {/* <span className={`${isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'}`}>-20%</span> */}
          </button>
          <button
            className={`relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out ${
              isAnnual ? "text-slate-500 dark:text-slate-400" : "text-white"
            }`}
            onClick={() => setIsAnnual(false)}
            aria-pressed={isAnnual}
          >
            Monthly
          </button>
        </div>
      </div>
      {/* Pricing table */}
      <div className="max-w-sm mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-none p-14 pt-2">
        {/* Table1 */}
        <div className="h-full">
          <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-900 shadow-lg shadow-slate-950/5">
            <div className="mb-5">
              <div className="pb-2 text-slate-900 dark:text-slate-200 font-semibold mb-1">
                Basic
              </div>
              <div className="inline-flex items-baseline mb-2">
                <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl pb-2">
                  {isAnnual ? "Free" : "Free"}
                </span>
              </div>
              <div className="text-sm text-slate-500 mb-5">
                There are many variations available, but the majority have
                suffered.
              </div>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent border-teal-300 border-2 px-3.5 py-2.5 text-md font-medium text-slate-900 shadow-lg shadow-teal-950/10 hover:bg-teal-300 hover:text-slate-900 hover:font-semibold focus-visible:outline-none focus-visible:ring focus-visible:ring-teal-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="/signup"
              >
                Purchase Plan
              </a>
            </div>
            <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
              Consists of:
            </div>
            <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Table 2 */}
        <div className="h-full dark">
          <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-transparent border-black border-4 dark:border-black shadow shadow-slate-950/5">
            <div className="mb-5">
              <div className="pb-2 text-slate-900 dark:text-slate-200 font-semibold mb-1">
                Enterprise
              </div>
              <div className="inline-flex items-baseline mb-2 pb-2">
                <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                  {isAnnual ? "5.80 ALGO" : "28.99 ALGO"}
                </span>
                <span className="text-black font-medium">
                  /{isAnnual ? "yearly" : "monthly"}
                </span>
              </div>
              <div className="text-sm text-white mb-5">
                There are many variations available, but the majority have
                suffered.
              </div>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-black px-3.5 py-2.5 text-md font-medium text-white shadow-lg shadow-teal-950/10 hover:bg-teal-300 hover:text-slate-900 hover:font-semibold focus-visible:outline-none focus-visible:ring focus-visible:ring-teal-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                Purchase Plan
              </a>
              <div className="pt-2 text-slate-900 dark:text-slate-200 font-medium mb-3">
                Consists of:
              </div>
              <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Veecert of certificate</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Veecert of certificate</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Veecert of certificate</span>
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                  </svg>
                  <span>Veecert of certificate</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Table 3 */}
        <div className="h-full">
          <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white dark:bg-black border border-slate-200 dark:border-slate-900 shadow-lg shadow-slate-950/5">
            <div className="mb-5">
              <div className="pb-2 text-slate-900 dark:text-slate-200 font-semibold mb-1">
                Business
              </div>
              <div className="inline-flex pb-2 items-baseline mb-2">
                <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">
                  {isAnnual ? "57.99 ALGO" : "289.94 ALGO"}
                </span>
                <span className="text-teal-300 font-medium">
                  /{isAnnual ? "yearly" : "monthly"}
                </span>
              </div>
              <div className="text-sm text-slate-500 mb-5">
                There are many variations available, but the majority have
                suffered.
              </div>
              <a
                className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-transparent border-teal-300 border-2 px-3.5 py-2.5 text-md font-medium text-slate-500 shadow-lg shadow-teal-950/10 hover:bg-teal-300 hover:text-slate-900 hover:font-semibold focus-visible:outline-none focus-visible:ring focus-visible:ring-teal-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                href="#0"
              >
                Purchase Plan
              </a>
            </div>
            <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">
              Consists of:
            </div>
            <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-3 h-3 fill-teal-500 mr-3 shrink-0"
                  viewBox="0 0 12 12"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                </svg>
                <span>Veecert of certificate</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
