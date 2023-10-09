"use client"

import Link from "next/link"
import { useEffect, useState } from "react";


function Home() {

const [channels, setChannels] = useState<{ channelName: string; title: string }[]>([]);

  const fetchAllChannels = async () => {
    try {
      const response = await fetch('https://apifetchchannel.onrender.com');
      if (!response.ok) {
        throw new Error('Failed to fetch channels.');
      }
      const jsonData = await response.json();
      
  
      // Extract channel names from the response data
      const Channels = jsonData.data.map((item: { userlive: { channelName: any; }; }[]) => item[0].userlive);
      console.log(Channels)
  
      setChannels(Channels);
    } catch (error) {
      console.error('Error fetching channels:', error);
    }
  };


  useEffect(() => {
    fetchAllChannels();
  }, []);

  return(
    <div className='px-5 bg-[#f7f7f8] min-h-screen overflow-y-scroll sm:px-6 lg:pl-6 '>
      <div className=''>
        <div><h1 className='text-lg font-semibold'>Featured channels</h1></div>  
        {/* live items */}
        <div className=' py-8 flex flex-col sm:flex-row items-center gap-8 '>
        {
          channels.map((items, index) => (
            <Link href={`/c/${items.channelName}`} key={index} className=' flex flex-col gap-3 '>
              <div className='w-[200px] rounded-lg h-[250px] text-white  bg-black relative'>
                <div className='bg-red-600 px-3 text-sm py-1 rounded-lg inline-block absolute top-2 left-2'>LIVE</div>
                <h1 className='absolute pl-2 top-3 left-16 text-sm'>1.7k</h1>
              </div>
              <div className=' inline-block text-base '>
                <h1 className='text-base text-black font-bold'>{items.channelName}</h1>
                <h1>{items.title}</h1>
              </div>
            </Link> 
          ))
        }
        </div>
      </div> 
    </div>
  )
}

export default Home; // Apply the middleware to the page
