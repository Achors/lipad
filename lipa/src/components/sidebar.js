
import React from 'react';
import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-64 bg-green-800 text-white flex flex-col">
      <aside className="w-64 bg-white shadow-md h-screen p-4">
            <h2 className="text-2xl font-semibold mb-4">Sidebar</h2>
            <ul>
                <li><Link href="/profile">Profile</Link></li>
                <li><Link href="/transactions">Transactions</Link></li>
            </ul>
        </aside>
      <div className="p-6">
        <h1 className="text-2xl font-bold">Lipad</h1>
        <p className="mt-2">My Dashboard</p>
      </div>
    </div>
  );
};