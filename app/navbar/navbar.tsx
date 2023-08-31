"use client"

import Link from "next/link"
import { useEffect, useState } from "react" 
import { usePathname } from "next/navigation"
import Image from "next/image"
import SignUp from "../register/SignUp"
import Login from "../Login"
// import { gsap } from "gsap"
 


export default  function Navbar() {

    const [showMenu, setShowMenu] = useState(false)
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    const toggleModalLogin = () => {
        setIsModalOpenLogin(!isModalOpenLogin);
    };
    const pathname = usePathname();

    // useEffect(() => {
    //     const tl = gsap.timeline({ defaults: {duration: 2} })
    // tl.fromTo("nav", { y: "-100%" }, { y: "0%" })
    // }, [])

    return (
        <nav className={` ${pathname === '/register' || pathname === '/login' ? 'hidden' : 'block'} z-50 px-5 sm:px-6 lg:px-4 sticky shadow backdrop-blur-lg top-0 bg-white`}>
            {/* for screen larger than md */}
            {  isLoggedIn === false ?
            <div className="py-3 hidden lg:grid grid-cols-3 text-base  font-medium text-grayText">
                    <Link href={'/'} className=" col-span-1 text-2xl text-black font-extrabold">
                        <h1>Trendzy</h1>
                    </Link>     
                        <div className=" overflow-hidden rounded-lg flex items-center">
                            <input placeholder="Search ..." className=" border-2 rounded-s-lg py-2 px-4 outline-none w-full text-black placeholder-opacity-26 focus:border-blue-500 " name="text" type="text" />
                            <button className=" bg-bgBlue hover:bg-hoverBlue h-full px-4">
                                <Image src={'./search.svg'} width={25} height={25} alt="search" className=""/>
                            </button>
                        </div>
                <div className="flex lg:gap-20 xl:gap-25 justify-end col-span-1">
                    <div className="flex items-center text-black gap-3 font-bold">
                        <div  onClick={toggleModalLogin} className=" cursor-pointer bg-bgGray hover:bg-[#e4dfdf] transition-hover duration-300 rounded-lg py-2 px-4">Log In</div>
                        <div onClick={toggleModal} className=" cursor-pointer rounded-lg bg-bgBlue hover:bg-hoverBlue text-white transition-hover duration-300  py-2 px-4">Sign Up</div>
                    </div>
                </div>
                {isModalOpen && <SignUp setIsModalOpen={setIsModalOpen} />}
                {isModalOpenLogin && <Login setIsModalOpenLogin={setIsModalOpenLogin} />}
            </div>
                :
                <LoggedInNav />
            } 

            {/* for screen lower than md */}
            <div className="lg:hidden py-5 flex justify-between items-center">
                    <Link href={'/'} className="flex items-center gap-2 text-3xl font-extrabold">
                        <Image src={'/LOGO4.jpg'} width={30} height={30} alt="pic" />
                        <h1>Livetrendx</h1>
                    </Link>
                <div>
                    <Link href={'/'}><button className=" bg-black hover:bg-[#fff] hover:text-black border border-black transition-all duration-500 text-white py-3 px-7 rounded-full">Get Started</button></Link>
                </div>
               
                <div className={`${showMenu ? "  left-0" : " -left-[100%]"} text-lg fixed top-0 min-h-screen w-full`}>
                    <div onClick={() => setShowMenu(false)} className="absolute  overflow-y-hidden z-50 w-full min-h-screen bg-black opacity-50">
                    </div>
                    <div  className={`${showMenu ? "left-0 " : "-left-[100%]"} flex flex-col py-20 transition-all duration-500 min-h-screen max-h-screen ease-in-out px-10 w-1/2 gap-8 fixed top-0 z-50 bg-white  overflow-y-auto overflow-x-hidden `}>
                        <button onClick={() => setShowMenu(false)}  className="absolute top-5 right-5">X</button>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/'}>Home</Link>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/'}>Features</Link>
                        <Link className="border-b" onClick={() => setShowMenu(false)} href={'/pricing'}>Pricing</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
  }

  export function LoggedInNav() {
    return(
        
            <div className="py-3 hidden lg:grid grid-cols-3 text-base  font-medium text-grayText ">
                   
                    <Link href={'/'} className="  col-span-1 text-2xl text-black font-extrabold">
                        <h1>LiveTrendz</h1>
                    </Link>
                    <div className=" col-span-1 border border-[#bbb8b8] py-2 px-4 rounded-lg flex items-center gap-2">
                        <Image src={'./search.svg'} width={20} height={20} alt="search" className=""/>
                        <input placeholder="Search ..." className="outline-none w-full placeholder-opacity-25" name="text" type="text" />
                    </div>
                
                <div className=" col-span-1 justify-end  flex gap-10 items-center text-black">
                    <Link href={'/'}>Lives</Link>
                    <Link href={'/'}><button>Become a seller</button></Link>
                    <Image src={'/circleUser.svg'} width={25} height={25} alt="img"/>
                </div>
                
            </div>
    )
  }


  