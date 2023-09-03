import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaEye, FaEyeSlash } from 'react-icons/fa';


interface props {
    setIsModalOpen: (isOpen: boolean) => void;
  }

export default function SignUp({setIsModalOpen} : props){

   const [showSignUpWithEmailForm, setShowSignUpWithEmailForm] = useState(false);

  const toggleSignUpWithEmailForm = () => {
    setShowSignUpWithEmailForm(!showSignUpWithEmailForm);
  };

    const toggleModal = () => {
        setIsModalOpen(false);
      };

         const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    // Close the modal only if the click event occurred on the overlay itself (outside the modal content)
    if ((e.target as HTMLDivElement).classList.contains('modal-overlay')) {
      toggleModal();
    }
  };

    return(
            <div className="fixed inset-0 flex items-center top-0 w-full min-h-screen left-0 justify-center z-50 bg-[#000000] bg-opacity-80 modal-overlay"
                onClick={closeModal}
            >
        <div className="  w-full max-w-md px-6 py-8 bg-white rounded-md " 
        >
           {showSignUpWithEmailForm ? (
          <SignUpWithEmailForm onClose={toggleSignUpWithEmailForm} />
        ) : (
          <>
            
        <h2 className="text-xl text-black font-normal text-center mb-6">Sign up and explore!</h2>
        <div className="text-center flex flex-col gap-4  items-center">
          {/* continue with google btn */}
            <button
                className="w-full text-center py-4 flex items-center justify-center gap-2 shadow-md hover:shadow-bgBlue border rounded-lg text-slate-700 hover:shadow-md transition duration-150"
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
          <div className="flex items-center justify-center ">
            <div className="border-t border-slate-300 w-full mx-2"></div>
            <span className=" px-2 text-gray-500 relative text-sm">OR</span>
            <div className="border-t border-slate-300 w-full mx-2"></div>
          </div>
            
          <button
                className="w-full text-center py-4 flex items-center justify-center bg-bgDark text-white gap-2 shadow-md border rounded-lg  hover:shadow-xl hover:bg-darkLint transition duration-150"
              onClick={toggleSignUpWithEmailForm}
            >
            <Image
              src="./email.svg"
              width={1000}
              height={1000}
              alt="google-logo"
              className="w-6 h-6"
              loading="lazy"
            />
            <span >Continue with email</span>
          </button>
        </div>

        <p className="mt-4 text-sm text-center text-gray-600">Already have an account? <Link href="#" className=' text-bgBlue font-semibold'>Log in</Link></p>
          </>
        )}
      </div>
        </div>
    )
}

const SignUpWithEmailForm = ({ onClose }: {onClose: () => void}) => {
  // Add your signup form JSX and logic here

   const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div >
      {/* Your signup form content goes here */}
      <button onClick={onClose} className="text-black mb-6">Back</button>
       {/* sign up form */}
        <form className='flex flex-col gap-4'>
          <div className="relative ">
            <input
              required
              type="text"
              name="text"
              className="input rounded-md border border-slate-400  p-4 text-base w-full text-black focus:border-borderC"
            />
                <label className="user-label absolute left-4 text-gray-500 pointer-events-none transform translate-y-4 transition-transform focus:text-blue-500">
              Username
            </label>
          </div>


          <div className="relative ">
            <input
              required
              type="email"
              id='email'
              className="input rounded-md border border-slate-400 p-4 text-base w-full text-black focus:border-borderC"
            />
                <label htmlFor='email' className="user-label absolute left-4 text-gray-500 pointer-events-none transform translate-y-4 transition-transform focus:text-blue-500">
              Email
            </label>
          </div>

          <div className="relative">
            <input
              required
              type={showPassword ? 'text' : 'password'}
              id='password'
              className="input rounded-md border border-slate-400 p-4 text-base w-full text-black focus:border-borderC"
            />
            <label htmlFor='password' className="user-label absolute left-4 text-gray-500 pointer-events-none transform translate-y-4 transition-transform focus:text-blue-500">
              Password
            </label>
            
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute h-full  right-2 "
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div className="">
            <label className=" mb-2 text-black">
              <input type="checkbox" className="mr-2 text-black" />
              I agree with Trendzy&apos;s <Link href="#" className=' text-bgBlue font-medium'>Terms of service</Link> and <Link href="#" className='text-bgBlue font-medium'>Privacy policy</Link>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-bgBlue hover:bg-hoverBlue transition-all duration-300 text-white text-lg font-semibold py-2 px-4 rounded-md"
          >
            Create Account
          </button>
        </form>
    </div>
  );
};