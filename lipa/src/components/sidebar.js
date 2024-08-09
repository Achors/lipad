import React from "react";
import Image from 'next/image';

export default function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-r from-slate-900 to-teal-600 text-white flex flex-col h-screen">
      <div className="relative mb-6 flex items-center justify-center mt-10">
            <Image 
              src="/dash bd.png"
              alt="Dash BD Logo"
              width={130}
              height={105}  
              className="absolute z-0"
            />
            <Image 
              src="/dash logo.png"
              alt="Dash Logo"
              width={108}
              height={101}  
              className="z-10"
            />
          </div>


      <aside className="p-4">
        <h2 className="text-2xl font-semibold mb-4">
          My Dashboard
        </h2>
        <p className="text-base mt-2">
          Dashboard Content
        </p>
      </aside>
    </div>
  );
}
