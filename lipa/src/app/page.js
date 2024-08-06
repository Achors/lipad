import React from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col lg:flex-row items-center justify-between p-0 lg:p-24">
      <div className="lg:w-1/2 flex flex-col items-center justify-center bg-gradient-to-r from-green-400 to-blue-500 p-12 lg:p-24">
        <h1 className="text-white text-4xl font-bold mb-4">Buy Airtime Anywhere in Africa</h1>
        {/* <h1>Lipad</h1> */}
      </div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center bg-white p-12 lg:p-24">
        <h1 className="text-3xl font-bold mb-6">Login to your account</h1>
        <form className="w-full max-w-md">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">Email/Username</label> <br />
            <input 
              type ="text"
              placeholder="username" 
              required 
              className = "p-2 border border-gray-300 round mb-4"/>
            <label className="mb-2 font-medium">Password</label> <br />
            <input  
              type ="password"
              placeholder="password" 
              required 
              className = "p-2 border border-gray-300 round mb-4" />

            <button 
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            >Login to your dashboard</button>

            <p className="text-gray-600">
              Dont have a LIPAD account? Click here to 
              <a href="#" className="text-blue-500 hover:underline"> Sign Up</a> </p>

          </div>
        </form>

      </div>
      <div className="lg:w-1/2 flex flex-col items-center justify-center bg-white p-12 lg:p-24">
        <h1 className="text-3xl font-bold mb-6">Register an Account</h1>
        <form className="w-full max-w-md">
          <div className="flex flex-col mb-4">
            <label className="mb-2 font-medium">Email/Username</label> <br />
            <input 
              type ="text"
              placeholder="username" 
              required 
              className = "p-2 border border-gray-300 round mb-4"/>
            <label className="mb-2 font-medium">Password</label> <br />
            <input  
              type ="password"
              placeholder="Password" 
              required 
              className = "p-2 border border-gray-300 round mb-4" />

            <button 
              type="submit"
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
              >Register Account</button>

            <p className="text-gray-600">
              Do you have a LIPAD account? Click here to 
              <a href="#" className="text-blue-500 hover:underline"> Sign In</a> </p>

          </div>
        </form>

      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div>
          <h2 className="text-4xl font-bold">Welcome to Lipad </h2>
        </div>
      </div>
    </main>
  );
}
