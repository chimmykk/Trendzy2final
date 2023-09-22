"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function LiveStreamSection() {
    const [selectedTab, setSelectedTab] = useState("Products");

    const handleTabClick = (tab: string) => {
        setSelectedTab(tab);
    };

    const renderSelectedTabContent = () => {
        if (selectedTab === "Products") {
            return (
                <div>
                    {/* Product listings go here */}
                    {/* ... */}
                </div>
            );
        } else if (selectedTab === "Giveaways") {
            return (
                <div>
                    {/* Giveaways listings go here */}
                    {/* ... */}
                </div>
            );
        }
    };

    return (
        <div className="px-5 sm:px-6 h-screen lg:px-12 py-8 bg-black text-white">
            <div className="flex">
                {/* Left Section - Options */}
                <div className="w-1/4 pr-4 flex flex-row gap-3">
                
                    <div
                        className={`cursor-pointer mb-2 ${
                            selectedTab === "Products" ? "text-bgGreen" : ""
                        }`}
                        onClick={() => handleTabClick("Products")}
                    >
                        Products
                    </div>
                    <div
                        className={`cursor-pointer ${
                            selectedTab === "Giveaways" ? "text-bgGreen" : ""
                        }`}
                        onClick={() => handleTabClick("Giveaways")}
                    >
                        Giveaways
                    </div>
                </div>

                {/* Middle Section - Live Stream */}
                <div className="w-1/2 border-r border-l h-screen">
                    <div className="bg-black text-white p-2 absolute top-0 right-0">
                        Live
                    </div>
                    <h2 className="text-xl text-center font-semibold mb-4">Live Stream</h2>
                    {/* Embed your live stream player here */}
                    {/* You may need to use a third-party library or component for this */}
                </div>

                {/* Right Section - Live Chats */}
                <div className="w-1/4 pl-4 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 120px)' }}>
                    <h2 className="text-xl text-center font-semibold mb-4">Live Chats</h2>
                    {/* Live chat messages go here */}
                    {/* ... */}
                </div>
            </div>
            
        </div>
    );
}
