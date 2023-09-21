"use client"
import Link from 'next/link';
import ResponsiveCarousel from './Carousel';
import { useSession } from 'next-auth/react';
// import Dashboard from './Dashboard/page';
import { redirect } from 'next/navigation';

export default function Home() {


  const { status } = useSession();

  if (status === "authenticated") {
    redirect('/home')
  }

  return (
  <main className="z-0  lg:ml-[-209px] p-[-14px] py-10 h-fit">
  <div className="flex justify-center fade-container">
    <ResponsiveCarousel />        
  </div>

  <div className="mt-12 mx-auto text-center">
    <h1 className="text-4xl my-4 font-extrabold">
      Watch, <span className='text-bgGreen'>&apos;Interact&apos;</span>, <span className='stroke-black'>&apos;Shop&apos;</span> – Live Marketplace
    </h1>
    <div className="flex mt-7 items-center content-center gap-4 text-lg font-semibold justify-center">
      <Link
        href={'/livestream'}
        className=" button px-4 py-3 bg-[#fff] transition-hover duration-300 border rounded-lg border-black"
      >
        Join the Stream
      </Link>
      <Link
        href={'/register'}
        className=" button bg-bgGreen transition-hover duration-300 text-white border rounded-lg border-bgDark hover:border-black"
      >
        Sell Live
      </Link>
    </div>
  </div>
</main>

  );
}