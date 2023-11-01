import Link from "next/link"
import LiveStreamCard from "./ui/liveStreamCard"

export default function RecommendLive() {
  // Create an array of data objects, each representing a LiveStreamCard
  const liveStreamData = [
    {
      href: './livestream/1',
      imageSrc: '/images/pexels1.jpeg',
      name: 'Harry Koren',
      streamTitle: 'New Comics + Adult Show ',
      viewerCount: '1.7k',
      profileImg: '/images/pexels1.jpeg',
      category: 'shoes',
    },
    {
      href: './livestream/2',
      imageSrc: '/images/pexels2.jpeg',
      name: 'Stream name',
      streamTitle: 'Stream title goes here',
      viewerCount: '2.5k',
      profileImg: '/images/pexels2.jpeg',
      category: 'stream category',
    },
    {
      href: './livestream/2',
      imageSrc: '/images/sell1.png',
      name: 'Stream name',
      streamTitle: 'Stream title goes here',
      viewerCount: '2.5k',
      profileImg: '/images/sell1.png',
      category: 'stream category',
    }
    
    // Add more data objects as needed
  ];

  return (
    <div className="my-4 mt-8 px-1 sm:px-4 ">
      <div className=" text-lg sm:text-2xl font-semibold text-left flex gap-2">
        <Link href={'/'} className="text-bgGreen">
          Live channels
        </Link>
        <h1>We Think You&apos;ll Like</h1>
      </div>
      <div className=' py-2 md:py-8 flex flex-col md:flex-row gap-5 md:gap-4'>
        {/* Map over the liveStreamData array and render LiveStreamCard components */}
        {liveStreamData.map((stream, index) => (
          <LiveStreamCard
            key={index} // Make sure to provide a unique key for each component
            href={stream.href}
            imageSrc={stream.imageSrc}
            name={stream.name}
            streamTitle={stream.streamTitle}
            viewerCount={stream.viewerCount}
            profileImg={stream.profileImg}
            category={stream.category}
          />
        ))}
      </div>
    </div>
  );
}