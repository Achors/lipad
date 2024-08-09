import React from "react";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-r from-slate-900 to-teal-600 text-white flex flex-col h-screen">
      <div className="p-6">
        <h1 className="text-2xl font-bold">
          Lipad
        </h1>
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
