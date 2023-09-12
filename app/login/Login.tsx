"use client"

import { useState } from "react";
import Image from "next/image";
import {  FaEye, FaEyeSlash } from 'react-icons/fa';
import { useRouter } from "next/navigation";
import { signIn, useSession, getSession } from "next-auth/react"
import ResetPw from "./resetPassword";
import SignUp from "../register/page";
import { usePathname } from "next/navigation";

interface props {
    setIsModalOpenLogin: (isOpen: boolean) => void;
    // setResetPassword: (isOpen: boolean) => void;
  }

  interface props2 {
    setIsModalOpenLogin: (isOpen: boolean) => void;
    setResetPassword: (isOpen: boolean) => void;
    openSignUp : boolean;
    handleSignUpClick: () => void;
  }

  export default function Login({setIsModalOpenLogin} : props){
  
  const [resetPassword, setResetPassword] = useState(false); // State for resetPassword

  const pathname = usePathname();

    const toggleModal = () => {
        setIsModalOpenLogin(false);
      };

    const toggleResetPw = () => {
      setResetPassword(!resetPassword)
    }

    const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal only if the click event occurred on the overlay itself (outside the modal content)
    if ((e.target as HTMLDivElement).classList.contains('modal-overlay')) {
      toggleModal();
    }
  };
  const [openSignUp, setOpenSignUp] = useState(false)

   const handleSignUpClick = () => {
    setOpenSignUp(true); // Open the Login component
  };

  

    return(
                  <div className={`fixed inset-0 flex items-center top-0 w-full min-h-screen left-0 justify-center z-50 ${openSignUp === true ? " bg-transparent" : "bg-[#000000]"}  bg-opacity-80 modal-overlay`}
                    onClick={pathname === '/register' ? undefined : closeModal}
            >
              <div className=" rounded-md  w-full max-w-md px-6 py-8 bg-white ">
                {resetPassword ? 
                 /* Render the password reset input field here */
                 <ResetPw backToLogin ={toggleResetPw}/>
               : 
              <LoginForm openSignUp={openSignUp} handleSignUpClick={handleSignUpClick} setIsModalOpenLogin={toggleModal} setResetPassword={setResetPassword}/>
              }
              </div>
            </div>
    )
}

function LoginForm({setIsModalOpenLogin, setResetPassword, openSignUp, handleSignUpClick}: props2){

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();


  const { data: session } = useSession();
  const handleLogin = async () => {
    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false, 
      });

      if (result?.error) {
        // Handle login error, e.g., show an error message
        console.error('Login failed:', result.error);
      } else {
        // Redirect to a different page after successful login
        // alert("login succesful kekeke")
        setIsModalOpenLogin(false)       
        router.push('/'); // Change this to your desired redirect path
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };
  

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };

  return(
               <>
                <h2 className="text-2xl font-semibold text-black text-center">Log In</h2>
                <div className="text-center flex flex-col gap-6 mt-8 relative">
                  {/* continue with google btn */}
                    <button
                      className="w-full button text-center py-4 flex items-center justify-center gap-2 border rounded-lg text-slate-700 hover:border-black transition duration-150"
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="input rounded-md border border-slate-400 p-4 text-base w-full text-black focus:border-borderC"
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type={showPassword ? "text" : "password"}
                      className="input rounded-md border border-slate-400 p-4 text-base w-full text-black focus:border-borderC"
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
                      {showPassword ? <FaEyeSlash className=" text-[#5a5858]" /> : <FaEye className="text-[#5a5858]"/>}
                    </button>
                    <p onClick={() => setResetPassword(true)} className=" text-sm w-fit cursor-pointer hover:text-hoverGreen text-gray-500">
                      Forgot Password?
                    </p>       
                  </div>
                  <button
                    onClick={handleLogin}
                    type="button"
                    className=" button w-full bg-bgGreen border hover:border-black transition-all duration-300 text-white text-lg font-semibold rounded-md"
                  >
                    Log In
                  </button>
                </form>
                <p className="mt-4 text-center text-sm text-gray-600">
                  Don&apos;t have an account?  
                  <p 
                  onClick={handleSignUpClick} 
                  className=' text-bgGreen font-semibold cursor-pointer'>
                    Sign up
                    </p>
                </p>
                        {openSignUp && <SignUp setIsModalOpen={setIsModalOpenLogin} />}
               </>   
  )
}