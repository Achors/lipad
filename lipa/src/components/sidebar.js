
import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-green-800 text-white flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Lipad</h1>
        
      </div>
      <aside className="w-64 bg-white shadow-md h-screen p-4">
            <h2 className="text-2xl font-semibold mb-4">My Dashboard</h2>
            <p className="mt-2"></p>
        </aside>
    </div>
  );
};