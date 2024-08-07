"use client";

import React, { useState } from 'react';
import Dashboard from '../components/dashboard';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setIsAuthenticated(true);
  };

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <main className="flex min-h-screen">
        <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-teal-600 p-12 lg:p-24">
        <h1 className="text-white text-4xl font-bold mb-6">
          Buy Airtime <br />
          <span className="mt-6 underline">Anywhere in </span>Africa
        </h1>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white p-12 lg:p-24">
        {isLogin ? (
          <>
          <div>
            <h1 className="text-4xl text-slate-950 font-bold mb-6">lipad</h1>
          </div>            
            <form className="w-full max-w-md" onSubmit={handleLogin}>
            <h2 className="text-1xl text-Zinc-950 mb-6">Login to your account</h2>
            <div className="flex flex-col mb-4 relative">
  <div className="relative mb-4">
    <label className="absolute top-2 left-2 text-green-400 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
      Email/Username
    </label>
    <input
      type="text"
      required
      className="pt-6 pb-2 pl-2 border-b-2 border-green-400 bg-transparent focus:outline-none w-3/4 mx-auto"
      placeholder=" "
    />
  </div>

  <div className="relative mb-4">
    <label className="absolute top-2 left-2 text-gray-600 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
      Password <span className="text-red-400">*</span>
    </label>
    <input
      type="password"
      required
      className="pt-6 pb-2 pl-2 border-b-2 border-black bg-transparent focus:outline-none w-3/4 mx-auto"
      placeholder=" "
    />
  </div>
</div>

              <button
                type="submit"
                className="bg-slate-900 text-white p-2 rounded hover:bg-gray-00"
              >
                Login to your dashboard
              </button>
              <p className="text-gray-600 mt-4">
                Don&apos;t have a LIPAD account? Click here to{' '}
                <a href="#" onClick={toggleForm} className="text-green-600 underline">
                  Sign Up
                </a>
              </p>
            </form>
          </>
        ) : (
          <>
            <div>
            <h1 className="text-4xl text-slate-950 font-bold mb-6">lipad</h1>
          </div>            
            <form className="w-full max-w-md" onSubmit={handleLogin}>
            <h2 className="text-1xl text-Zinc-950 mb-6">Register an Account</h2>
            <div className="flex flex-col mb-4 relative">
  <div className="relative mb-4">
    <label className="absolute top-2 left-2 text-green-400 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
      Email/Username
    </label>
    <input
      type="text"
      required
      className="pt-6 pb-2 pl-2 border-b-2 border-green-400 bg-transparent focus:outline-none w-3/4 mx-auto"
      placeholder=" "
    />
  </div>

  <div className="relative mb-4">
    <label className="absolute top-2 left-2 text-gray-600 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
      Password <span className="text-red-400">*</span>
    </label>
    <input
      type="password"
      required
      className="pt-6 pb-2 pl-2 border-b-2 border-black bg-transparent focus:outline-none w-3/4 mx-auto"
      placeholder=" "
    />
  </div>
</div>
          <button
                type="submit"
                className="bg-slate-900 text-white p-2 rounded hover:bg-gray-00">
                Register Account
              </button>
              <p className="text-gray-600 mt-4">
                Do you have a LIPAD account? Click here to{' '}
                <a href="#" onClick={toggleForm} className="text-green-600 underline">
                  Sign In
                </a>
              </p>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
