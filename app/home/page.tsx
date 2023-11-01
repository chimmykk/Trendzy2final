"use client"

import Link from "next/link"
import Image from "next/image";
import { useEffect, useState } from "react";
import LiveStreamCard from "@/components/ui/liveStreamCard";
import { useSession } from "next-auth/react";


function Home() {

const [channels, setChannels] = useState<{ channelName: string; title: string, thumbnail: string, tags:string }[]>([]);

const {data: session} = useSession()

const sessionProfilePic = session?.user?.image

  const fetchAllChannels = async () => {
    try {
      const response = await fetch('https://trendzy2.vercel.app/api/flow/postget');
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
          <LiveStreamCard
            key={index} // Make sure to provide a unique key for each component
            href={`/c/${items.channelName}`}
            imageSrc={`data:image/jpeg;base64,${items.thumbnail}`}
            name={items.channelName}
            streamTitle={items.title}
            viewerCount={'2k'}
            profileImg={sessionProfilePic ? `${sessionProfilePic}` : '/circleUser.svg'}
            category={items.tags}
          /> 
          ))
        }
        </div>
      </div> 
    </div>
  )
}

export default Home; // Apply the middleware to the page
