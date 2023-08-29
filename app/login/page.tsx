"use client"

import React, { useState } from 'react';
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className=" flex justify-center py-6 items-center relative">
      <Link href={'/'} className=" hidden md:block absolute top-3 left-2 text-2xl text-black font-extrabold">
          <h1>Trendzy</h1>
      </Link>     
      <div className="  w-full max-w-md px-6 py-8 bg-white ">
        <h2 className="text-2xl font-semibold ">Create Your Account</h2>
        <div className="text-center flex flex-col gap-6 mt-8 relative">
          {/* continue with google btn */}
          <button
            className="px-4 py-4 border flex gap-2 border-slate-400 rounded-lg text-slate-700 hover:border-borderC hover:text-slate-900 hover:shadow transition duration-150"
          >
            <Image
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              width={1000}
              height={1000}
              alt="google-logo"
              className="w-6 h-6"
              loading="lazy"
            />
            <span>Continue with Google</span>
          </button>
          <div className="flex items-center justify-center mb-6">
            <div className="border-t border-slate-300 w-full mx-2"></div>
            <span className="bg-white px-2 text-gray-500 relative text-sm">OR</span>
            <div className="border-t border-slate-300 w-full mx-2"></div>
          </div>
        </div>
        
        {/* Login Form */}
        <form className="flex flex-col gap-4">
          <div className="relative">
            <input
              required
              type="email"
              id="login-email"
              className="input rounded-md border border-slate-400 p-4 text-base w-full text-black focus:border-[#25FF79]"
            />
            <label
              htmlFor="login-email"
              className="user-label absolute left-4 text-gray-500 pointer-events-none transform translate-y-4 transition-transform focus:text-[#25FF79]"
            >
              Email
            </label>
          </div>

          <div className="relative flex flex-col gap-4">
            <input
              required
              type={showPassword ? "text" : "password"}
              id="login-password"
              className="input rounded-md border border-slate-400 p-4 text-base w-full text-black focus:border-[#25FF79]"
            />
            <label
              htmlFor="login-password"
              className="user-label absolute left-4 text-gray-500 pointer-events-none transform translate-y-4 transition-transform focus:text-[#25FF79]"
            >
              Password
            </label>
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-5 right-2"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            <Link href="#" className=" w-fit text-gray-500">
              Forgot Password?
            </Link>       
          </div>
          <button
            type="submit"
            className="w-full bg-[#25FF79] hover:bg-[#5dfd9a] transition-all duration-300 text-black text-lg font-semibold py-2 px-4 rounded-md"
          >
            Log In
          </button>
        </form>


        <p className="mt-4 text-center text-gray-600">Don&apos;t have an account?  <Link href="#" className=' text-[#25FF79] font-semibold'>Sign up</Link></p>
      </div>
    </div>
  );
};

export default LoginForm;
