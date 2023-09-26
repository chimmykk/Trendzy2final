"use client"
import Image from "next/image";
import { useState } from "react";

export default function StartLive() {

    const [message, setMessage] = useState(""); // State to store the message

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can implement the logic to send the message to the live chat here
    // For simplicity, we will just log the message to the console
    console.log("Message sent:", message);

    // Clear the message input field
    setMessage("");
  };

  return (
    <div className=" bg-darkLint h-screen flex">
      {/* Left Section - Product */}
      <div className="w-1/4  text-white p-4">
        <h2 className="text-xl font-bold">Casual Shoes</h2>
        <Image
        width={1000}
        height={1000}
          src="https://rukminim1.flixcart.com/image/450/500/l51d30w0/shoe/z/w/c/10-mrj1914-10-aadi-white-black-red-original-imagft9k9hydnfjp.jpeg?q=90&crop=false" // Replace with your product image URL
          alt="Product"
          className=" w-32 mt-2"
        />
        <p className="mt-2">Synthetic leather </p>
      </div>

      {/* Center Section - Live Stream */}
      <div className="w-1/2 bg-black">
        <div className="relative h-0" style={{ paddingTop: "56.25%" }}>
          {/* Replace the following iframe with your live streaming video player */}
          <iframe 
          width="560" 
          height="315"
           src="https://www.youtube.com/embed/sQEgklEwhSo?si=Y73dU-X6nPjIHpUY" 
           title="YouTube video player"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            className="absolute inset-0 w-full h-full"
            allowFullScreen>
            </iframe>
        </div>

        {/* Live Stream Title */}
        <h1 className="text-2xl font-bold text-white p-4">Live Stream Title</h1>

        {/* Tags */}
        <div className="p-4">
          <span className="text-sm text-gray-400">Tags:</span>{" "}
          <span className="text-sm text-blue-500">Tag1</span>{" "}
          <span className="text-sm text-blue-500">Tag2</span>
        </div>
      </div>

         {/* Right Section - Live Chat */}
      <div className="w-1/4 p-4">
        <div className="h-full">
          <h2 className="text-xl font-bold text-white">Live Chat</h2>

          {/* Chat Messages */}
          <div className="h-72 overflow-y-auto mt-4">
            {/* You can map through and display chat messages here */}
          </div>

          {/* Send a Message Input */}
          <form onSubmit={handleSubmit} className="mt-4">
            <input
              type="text"
              value={message}
              onChange={handleChange}
              placeholder="Send a message"
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <button
              type="submit"
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Chat
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
