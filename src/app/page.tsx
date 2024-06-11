import React from "react";
import Home from "@/components/Home";
import Pricing from "@/components/Pricing";
import Document from "@/components/Document";
import { Explore } from "@/components/Explore";
import { Nav } from "@/components/Nav";

const page = () => {
  return (
    <div>
      <main className="min-h-screen bg-gradient-to-br from-teal-300 to-black">
        <div className="flex items-center w-full min-h-screen ">
          <div>
            <Nav />
            <Home />
            <Pricing />
            <Explore />
            <Document/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
