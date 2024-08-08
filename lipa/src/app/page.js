"use client";

import React, { useState } from 'react';
import Dashboard from '../components/dashboard';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true);

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
    <main className="flex flex-col min-h-screen lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-teal-600 p-8 lg:p-12">
        <h1 className="text-white text-2xl lg:text-3xl font-bold mb-4 lg:mb-6 text-center lg:text-left">
          Buy Airtime <br />
          <span className="mt-4 underline">Anywhere in </span>Africa
        </h1>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white p-8 lg:p-12">
        {isLogin ? (
          <>
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl text-slate-950 font-bold">lipad</h1>
            </div>            
            <form className="w-full max-w-md" onSubmit={handleLogin}>
              <h2 className="text-lg lg:text-xl text-Zinc-950 mb-4">Login to your account</h2>
              <div className="flex flex-col mb-4 relative">
                <div className="relative mb-4">
                  <label className="absolute top-2 left-2 text-green-400 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
                    Email/Username
                  </label>
                  <input
                    type="text"
                    required
                    className="pt-6 pb-2 pl-2 border-b-2 border-green-400 bg-transparent focus:outline-none w-full"
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
                    className="pt-6 pb-2 pl-2 border-b-2 border-black bg-transparent focus:outline-none w-full"
                    placeholder=" "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-slate-900 text-white p-2 rounded hover:bg-gray-700 w-full"
              >
                Login to your dashboard
              </button>
              <p className="text-gray-600 mt-4 text-center">
                Don&apos;t have a LIPAD account? Click here to{' '}
                <a href="#" onClick={toggleForm} className="text-green-600 underline">
                  Sign Up
                </a>
              </p>
            </form>
          </>
        ) : (
          <>
            <div className="mb-6">
              <h1 className="text-3xl lg:text-4xl text-slate-950 font-bold">lipad</h1>
            </div>            
            <form className="w-full max-w-md" onSubmit={handleLogin}>
              <h2 className="text-lg lg:text-xl text-Zinc-950 mb-4">Register an Account</h2>
              <div className="flex flex-col mb-4 relative">
                <div className="relative mb-4">
                  <label className="absolute top-2 left-2 text-green-400 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
                    Email/Username
                  </label>
                  <input
                    type="text"
                    required
                    className="pt-6 pb-2 pl-2 border-b-2 border-green-400 bg-transparent focus:outline-none w-full"
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
                    className="pt-6 pb-2 pl-2 border-b-2 border-black bg-transparent focus:outline-none w-full"
                    placeholder=" "
                  />
                </div>
              </div>
              <button
                type="submit"
                className="bg-slate-900 text-white p-2 rounded hover:bg-gray-700 w-full"
              >
                Register Account
              </button>
              <p className="text-gray-600 mt-4 text-center">
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
