

import Link from 'next/link';
import Image from 'next/image';

interface LiveStreamCardProps {
  href: string;
  imageSrc: string;
  name: string;
  streamTitle: string;
  viewerCount: string;
  profileImg:string;
  category: string;
}

export default function LiveStreamCard({
  href,
  imageSrc,
  name,
  streamTitle,
  viewerCount,
  profileImg,
  category
}: LiveStreamCardProps) {
  return (
    <Link href={'/'} className='card flex flex-col  gap-3 shadow-lg overflow-hidden rounded-md md:rounded-none '>
      <div className=' w-full  h-[260px] md:h-[260px] relative '>
        {/* Image */}
        <Image
          src={imageSrc}
          width={1000}
          height={1000}
          alt='Live Stream Thumbnail'
          className='w-full h-full object-cover '
        />
        <div className='bg-red-600 px-3 text-sm font-bold text-white py-1 rounded-md inline-block absolute top-2 left-2'>LIVE</div>
        <h1 className='absolute pl-2 bottom-3 right-2 text-sm p-1 bg-[#000000] rounded-md bg-opacity-50 text-white'>{viewerCount} viewers</h1>
      </div>
      <div className='flex flex-col md:flex-row gap-2 text-base'>
          <div className=' hidden md:block w-12 h-12 rounded-full'>
              <Image src={profileImg} width={1000} height={1000} alt='pic' className='w-full h-full rounded-full'/>
          </div>
          {/* for mobile */}
          <div className='flex md:hidden gap-2 px-1'>
            <div className='w-12 h-12 rounded-full'>
                <Image src={profileImg} width={1000} height={1000} alt='pic' className='w-full h-full rounded-full'/>
            </div>
            <div className=' text-sm md:text-base md:w-[188px]'>
              <h1 className='overflow-hidden whitespace-nowrap truncate'>
                  {name}
              </h1>
              <h1 className='bg-bgGreen w-fit px-2 text-xs text-white rounded-xl '>
                  {category}
              </h1>
            </div>
          </div>
          <div className='  text-sm hidden md:block md:text-base md:w-[188px]'>
              <h1 className='overflow-hidden whitespace-nowrap truncate'>
                  {name}
              </h1>
              <h1 className='bg-bgGreen w-fit px-2 text-xs text-white rounded-xl '>
                  {category}
              </h1>
              <div className=' h-14 '>
                  <h1 className='text-base text-black font-semibold overflow-hidden whitespace-normal truncate leading-tight md:leading-normal'>
                      {streamTitle}
                  </h1>
              </div>
          </div>
            {/* for mobile */}
              <div className=' md:hidden h-14 px-1'>
                <h1 className='text-base text-black font-semibold overflow-hidden whitespace-normal truncate leading-tight md:leading-normal'>
                    {streamTitle}
                </h1>
            </div>
      </div>
    </Link>
  );
}
