"use client"

import { useSession } from "next-auth/react";
import Image from "next/image";
import { FaEdit, FaEnvelope } from "react-icons/fa";

export default function ProfilePage() {
  const { data: session } = useSession();

  // Sample user data
  const user = {
    profileImage: session?.user?.image,
    profileBanner: "https://via.placeholder.com/1000x500",
    userName: session?.user?.name,
    bio: "Passionate about buying and selling unique items. Reach out to me for inquiries.",
    following: 500,
    followers: 1000,
    reviews: 4.8,
    dmCount: 25,
    itemsSold: 1000,
  };

  return (
    <div className="bg-white w-full">
      {/* Profile Banner */}
      <div className="bg-cover bg-center h-64 relative">
        <div
          className="absolute inset-0 flex items-end"
          style={{ backgroundImage: `url(${user.profileBanner})` }}
        >
          {/* Profile Image */}
          <div
            className="relative top-1/2 transform -translate-y-1/2 left-0"
          >
            <Image
              src={user.profileImage || "/default-profile-image.png"} // Use a default image if profileImage is not available
              alt="Profile"
              width={128}
              height={128}
              className="w-32 h-32 rounded-full border-4 border-white mx-4"
            />
            <button className="absolute bottom-2 right-2 bg-white rounded-full p-1">
              <FaEdit />
            </button>
          </div>
        </div>
      </div>

      {/* User Info */}
      <div className="p-4 mt-16">
        <h2 className="text-2xl font-semibold">{user.userName}</h2>
        <p className="text-gray-600">{user.bio}</p>

        {/* Follow Stats */}
        <div className="mt-4 flex">
          <div className="mr-6">
            <p className="font-semibold">{user.following}</p>
            <p className="text-gray-600">Following</p>
          </div>
          <div className="mr-6">
            <p className="font-semibold">{user.followers}</p>
            <p className="text-gray-600">Followers</p>
          </div>
          <div className="mr-6">
            <p className="font-semibold">{user.reviews}</p>
            <p className="text-gray-600">Reviews</p>
          </div>
          <div className="mr-6">
            <p className="font-semibold">{user.itemsSold}</p>
            <p className="text-gray-600">Items Sold</p>
          </div>
        </div>

        {/* DM Button */}
        <button className="bg-bgGreen text-white px-4 flex items-center  py-2 rounded-full mt-4">
          <FaEnvelope className="mr-2" />
          Send Message
        </button>
      </div>

      {/* Edit Profile Button */}
      <div className="flex justify-end mt-4">
        <button className="bg-bgGreen text-white px-4 py-2 rounded-full">Edit Profile</button>
      </div>
    </div>
  );
}

