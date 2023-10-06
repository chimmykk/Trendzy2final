"use client"

import Image from "next/image";
import { FaEnvelope } from "react-icons/fa";
import { RiUser3Line } from "react-icons/ri"
import { AiOutlineHeart } from "react-icons/ai"
import ProfileItems from "./profileItems";
import ItemContents from "./Itemcontents";
import { useState } from "react";

// Define the prop types for the component
interface ProfileContainerProps {
  profileImg: string | undefined; // Adjust the type as needed
  session: any; // Use the 'Session' type
}

export default function ProfileContainer({profileImg, session}: ProfileContainerProps){

     const [activeTab, setActiveTab] = useState('About'); // Initialize with the default tab

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const user = {
    // profileBanner: "https://via.placeholder.com/1000x500",
    userName: session?.user?.name,
    bio: "Passionate about buying and selling unique items. Reach out to me for inquiries.",
    following: 500,
    followers: '2k',
    reviews: 4.8,
    dmCount: 25,
    itemsSold: 1000,
  };
    
    return(
        <main>
            <div className=" px-80 border-b">
                <div className="bg-cover bg-center h-56 relative"> 
                <div
                    className="absolute inset-0 flex items-end rounded-bl-lg rounded-br-lg"
                    style={{ 
                    backgroundImage: `url(data:image/jpeg;base64,${profileImg})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: "center center", 
                    backgroundSize: 'cover', // Optional: To cover the entire container
                    }}
                >
                    {/* Profile Image */}
                    <div
                    className="relative top-[60%] transform -translate-y-[50%] w-32 h-32 left-3"
                    >
                        {profileImg ? ( // Check if profileImage is available
                        <Image
                            src={`data:image/jpeg;base64,${profileImg}`}
                            width={1000}
                            height={1000}
                            alt="Profile Picture"
                            className="w-full h-full object-cover object-center rounded-full"
                        />
                        ) : (
                        // Display session Img if there is no profile pic in the rilso mongodb
                        session?.user?.image ? (
                            <Image
                            src={session?.user?.image}
                            width={1000}
                            height={1000}
                            alt="Default Profile Picture"
                            className="w-full h-full rounded-full"
                            />
                        ) : (
                            // If no session image, display a React icon (e.g., a placeholder user icon)
                            <button
                                className=" flex justify-center items-center text-bgGreen w rounded-full border-none"
                                
                            >
                                <RiUser3Line size={100} className=" cursor-pointer" />
                            </button>
                        )
                        )}
                    </div>
                </div>
                </div>

                {/* User Info */}
                <div className=" flex flex-col border-b pb-6 gap-2">
                <div className=" mt-2 flex justify-between items-center">
                    <div className="ml-40">
                    <h2 className="text-2xl font-semibold">{user.userName}</h2>
                    <div className="flex gap-2">
                        <p className="font-semibold text-gray-500">{user.followers} <span className=" font-normal">followers</span></p>
                    </div>
                    </div>
                    <div className="flex gap-4 font-semibold">
                    <button className="bg-bgGreen text-white px-2 flex items-center py-1 rounded-md">
                        <AiOutlineHeart className="mr-1" size="20"/>
                        Follow
                    </button>
                    <button className="bg-bgGray text-bgDark px-2 flex items-center py-1 rounded-md">
                        <FaEnvelope className="mr-2" />
                        DM
                    </button>
                    </div>
                </div>
                </div>
                
                <ProfileItems activeTab={activeTab} onTabClick={handleTabClick} />
            </div> 
            <ItemContents activeTab={activeTab}/>
        </main>
    )
}