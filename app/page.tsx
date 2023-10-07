"use client"
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import ResponsiveCarousel from '../components/Carousel';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import RecommendLive from '@/components/liveRecommend';
import Footer from './footer';
import MobileViewCarousel from '@/components/mobileViewCarousel';

export default function Home() {

  const router = useRouter()

   useEffect(() => {
    router.prefetch("/home");
  }, [router]);

  const { status } = useSession();

  if (status === "authenticated") {
    redirect('/home')
  }

  return (
  <main className="z-0  lg:ml-[-209px] p-[-14px] pt-4 h-fit">
    <div className=" hidden md:block fade-container">
      <ResponsiveCarousel />        
    </div>

    <div className='md:hidden'>
      <MobileViewCarousel />
    </div>

    <div className=" mt-4 md:mt-12 mx-auto text-center">
      <h1 className=" hidden md:block text-xl md:text-4xl my-4 font-extrabold">
        Watch, <span className='text-bgGreen'>&apos;Interact&apos;</span>, <span className='stroke-black'>&apos;Shop&apos;</span> – Live Marketplace
      </h1>
      <div className="flex  md:mt-7 items-center content-center gap-4 text-lg font-semibold px-2 md:px-0 justify-center">
        <Link
          href={'/livestream'}
          className=" button px-4 py-3 bg-[#fff] transition-hover duration-300 border rounded-md md:rounded-lg border-black"
        >
          Buy Live
        </Link>
        <Link
          href={'/register'}
          className=" button px-4 py-3 bg-bgGreen transition-hover duration-300 text-white border rounded-md md:rounded-lg border-bgDark hover:border-black"
        >
          Sell Live
        </Link>
      </div>
    </div>

    <div>
      <RecommendLive />
    </div>
    <Footer />
</main>

  );
}