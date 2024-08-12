"use client";

import React, { useState } from 'react';
import Dashboard from '../components/dashboard';
import Image from 'next/image';
import axios from 'axios';

export default function Home() {
  const [isLogin, setIsLogin] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const validateForm = () => {
    let emailError = '';
    let passwordError = '';

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailPattern.test(email)) {
      emailError = 'Please enter a valid email.';
    }

    if (!password || password.length < 6) {
      passwordError = 'Password must be at least 6 characters long.';
    }

    if (emailError || passwordError) {
      setErrors({ email: emailError, password: passwordError });
      return false;
    }

    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const api = axios.create({
        baseURL: 'http:localhost:3000',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setIsAuthenticated(true);
    }
  };

  const handleRegister = (e) => {
    e.preventDefault();
    if (validateForm()) {
      const api = axios.create({
        baseURL: 'http:localhost:3000',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      alert("Registration successful! Please log in.");
      setIsLogin(true); 
    }
  };

  if (isAuthenticated) {
    return <Dashboard />;
  }

  return (
    <main className="flex flex-col min-h-screen overflow-hidden lg:flex-row">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-slate-900 to-teal-600 p-8 lg:p-12 relative h-screen">
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <Image
            src="/africa.png"
            alt="Background"
            layout="fill"
            className="object-cover"
          />
        </div>
        <h1 className="text-white text-3xl lg:text-5xl font-bold mb-4 lg:mb-6 text-left relative z-10">
            Buy Airtime <br />
            <span style={{ textDecoration: 'underline', textUnderlineOffset: '15px' }}>
              Anywhere in 
            </span>
             <span className="inline-block px-2"> Africa</span>
          </h1>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white p-8 lg:p-12 h-screen">
        {isLogin ? (
          <>
            <div className="mb-6 flex items-center justify-center">
              <Image 
                src="/logo.png"
                alt="Lipad Logo"
                width={128}
                height={128}  
                className="w-32 lg:w-40 h-auto" 
              />
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`pt-6 pb-2 pl-2 border-b-2 ${errors.email ? 'border-red-400' : 'border-green-400'} bg-transparent focus:outline-none w-full`}
                    placeholder=" "
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="relative mb-4">
                  <label className="absolute top-2 left-2 text-gray-600 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`pt-6 pb-2 pl-2 border-b-2 ${errors.password ? 'border-red-400' : 'border-black'} bg-transparent focus:outline-none w-full`}
                    placeholder=" "
                  />
                  {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="bg-slate-900 text-white py-2 px-4 rounded-full hover:bg-gray-700 w-full"
              >
                Login to your dashboard
              </button>
              <p className="text-slate-900 mt-4 text-center">
                Don&apos;t have a LIPAD account? Click here to{' '}
                <a href="#" onClick={toggleForm} className="text-green-600 underline">
                  Sign Up
                </a>
              </p>
            </form>
          </>
        ) : (
          <>
            <div className="mb-6 flex items-center justify-center">
              <Image 
                src="/logo.png"
                alt="Lipad Logo"
                width={128}
                height={128}  
                className="w-32 lg:w-40 h-auto" 
              />
            </div>            
            <form className="w-full max-w-md" onSubmit={handleRegister}>
              <h2 className="text-lg lg:text-xl text-Zinc-950 mb-4">Register an Account</h2>
              <div className="flex flex-col mb-4 relative">
                <div className="relative mb-4">
                  <label className="absolute top-2 left-2 text-green-400 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
                    Email/Username
                  </label>
                  <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className={`pt-6 pb-2 pl-2 border-b-2 ${errors.email ? 'border-red-400' : 'border-green-400'} bg-transparent focus:outline-none w-full`}
                    placeholder=" "
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div className="relative mb-4">
                  <label className="absolute top-2 left-2 text-gray-600 transition-transform duration-300 transform -translate-y-1 scale-75 origin-top-left">
                    Password <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className={`pt-6 pb-2 pl-2 border-b-2 ${errors.password ? 'border-red-400' : 'border-black'} bg-transparent focus:outline-none w-full`}
                    placeholder=" "
                  />
                  {errors.password && <p className="text-red-400 text-xs mt-1">{errors.password}</p>}
                </div>
              </div>
              <button
                type="submit"
                className="bg-slate-900 text-white py-2 px-4 rounded-full hover:bg-gray-700 w-full"
              >
                Register Account
              </button>
              <p className="text-slate-900 mt-4 text-center">
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
