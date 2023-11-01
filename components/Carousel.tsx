"use client"

import React from "react";
import {
  StackedCarousel,
  ResponsiveContainer,
} from "react-stacked-center-carousel";
import Image from "next/image";
import { CustomArrowRight, CustomArrowLeft } from "./ui/arrowIcons"; // Import your custom arrow components


const data = [
  {
    cover: "images/pexels1.jpeg",
  
  },
  {
    cover: "images/pexels2.jpeg",
  },
  {
    cover: "images/sell1.png",

  },
  {
    cover: "images/pexels2.jpeg",
  
  }
];


export default function ResponsiveCarousel() {
  const ref = React.useRef<StackedCarousel>();
  return (
    <div style={{ width: "100%", position: "relative" }}>
      <ResponsiveContainer
        // use ParenthWidth to change the image width 
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          // If you want to use a ref to call the method of StackedCarousel, you cannot set the ref directly on the carousel component
          // This is because ResponsiveContainer will not render the carousel before its parent's width is determined
          // parentWidth is determined after your parent component mounts. Thus if you set the ref directly it will not work since the carousel is not rendered
          // Thus you need to pass your ref object to the ResponsiveContainer as the carouselRef prop and in your render function you will receive this ref object
          let currentVisibleSlide = 5;
          if (parentWidth <= 1440) currentVisibleSlide = 3;
          if (parentWidth <= 1080) currentVisibleSlide = 1;
          return (
            <StackedCarousel
              ref={carouselRef}
              slideComponent={Card}
              slideWidth={parentWidth < 800 ? parentWidth - 40 : 630}
              carouselWidth={parentWidth}
              data={data}
              currentVisibleSlide={currentVisibleSlide}
              maxVisibleSlide={5}
            />
          );
        }}
      />
      <>
        <div
          className=" absolute top-[40%] left-[20px] cursor-pointer z-10 border border-transparent p-2 rounded-md hover:border-borderC"
          // color="success"
          onClick={() => {
            ref.current?.goBack();
          }}
        >
          <CustomArrowLeft  />
        </div>
        <div
          className=" absolute top-[40%] right-[20px] cursor-pointer z-10 border border-transparent p-2 rounded-md hover:border-borderC"
          // color="success"
          onClick={() => {
            ref.current?.goNext();
          }}
        >
          <CustomArrowRight  />
        </div>
      </>
    </div>
  );
}

// VVery import to memoize your Slide component otherwise there might be performance issue
// At minimum your should do a simple React.memo(SlideComponent)
// If you want the absolute best performance then pass in a custom comparator function like below 

interface CardProps {
  data: any[]; // Update this with the actual type of your data
  dataIndex: number;
}

const Card = React.memo(function card(props: CardProps) {
  const { data, dataIndex } = props;
  const { cover } = data[dataIndex];
  return (
    <div
      style={{
        width: "100%",
        height: 400,
        userSelect: "none",
      }}
      className="my-slide-component "
    >
              <div className='bg-red-600 px-3 text-sm font-bold text-white py-1 rounded-md inline-block absolute top-2 left-2'>LIVE</div>
      <Image
        src={`/${cover}`}
        width={1000}
        height={1000}
        alt="picture"
        style={{
          height: "100%",
          width: "100%",
          objectFit: "cover",
          borderRadius: 0,
          cursor: "pointer",
        }}
        draggable={false}
      />
    </div>
  );
});

Card.displayName = 'Card'