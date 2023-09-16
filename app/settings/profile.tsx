
import Image from 'next/image';
import { useState } from 'react';
import { BsPencil, BsTrash } from 'react-icons/bs'; // Import the delete icon

export default function ProfileSetting(){
    return(
        <div className='sm:w-[70%] p-4'>

          {/* Profile Picture Section */}
          <div className="bg-white border rounded-lg p-4 mt-4">
              <h3 className="text-lg font-semibold">Profile Picture</h3>
              <div className="mt-2 flex items-center">
                <div className="w-28 h-28 bg-gray-400 rounded-full mr-4">
                  {/*  profile picture here */}
                  <Image
                  width={1000}
                  height={1000}
                    src="https://via.placeholder.com/150" // Replace with the actual path to the profile picture
                    alt="Profile Picture"
                    className="w-full h-full rounded-full"
                  />
                </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-4 items-center'>
                      <button className="bg-bgGreen text-white px-2 py-1 rounded mr-2">
                        Update Profile Picture
                      </button>
                      <button className="text-red-500">
                        {/*  delete icon here */}
                        <BsTrash />
                      </button>
                    </div> 
                      <p className="text-gray-500 mt-2">
                        Must be JPEG, PNG, or GIF and cannot exceed 10MB.
                      </p>  
                  </div>
              </div>
          </div>

          {/* Profile Banner Section */}
          <div className="bg-white border rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold">Profile Banner</h3>
                  <div className="mt-2 flex items-center">
                <div className="w-64 h-28 bg-gray-400 rounded-lg mr-4">
                  {/* profile banner here */}
                  <Image
                  width={1000}
                  height={1000}
                    src="https://via.placeholder.com/1000x500" // Replace with the actual path to the profile picture
                    alt="Profile Picture"
                    className="w-full h-full rounded-full"
                  />
                </div>
                  <div className='flex flex-col'>
                    <div className='flex gap-4 items-center'>
                      <button className="bg-bgGreen text-white px-2 py-1 rounded mr-2">
                        Update 
                      </button>
                      <button className="text-red-500">
                        {/* delete icon here */}
                        <BsTrash />
                      </button>
                    </div> 
                      <p className="text-gray-500 mt-2">
                        File format: JPEG, PNG, GIF (recommended 1200x480, max 10MB)
                      </p>  
                  </div>
              </div>
          </div>

          {/* Profile Settings Section */}
          <div className="bg-white border rounded-lg p-4 mt-4">
            <h3 className="text-lg font-semibold">Profile Settings</h3>
            <div className="mt-4"> {/* Add extra spacing */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center">
                    <p className="font-bold w-16">Name</p>
                    <div className="ml-4 border border-gray-300 p-2 rounded-lg font-normal flex-grow">
                      John Doe
                    </div>
                    <button className="ml-2 text-bgGreen">
                      {/* Use React icons for editing */}
                      <BsPencil />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold w-16">Email</p>
                    <div className="ml-4 border border-gray-300 p-2 rounded-lg font-normal flex-grow">
                      johndoe@example.com
                    </div>
                    <button className="ml-2 text-bgGreen">
                      {/* Use React icons for editing */}
                      <BsPencil />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <p className="font-bold w-16">Bio</p>
                    <div className="ml-4 border border-gray-300 p-2 rounded-lg font-normal flex-grow">
                      johndoe@example.com
                    </div>
                    <button className="ml-2 text-bgGreen">
                      {/* Use React icons for editing */}
                      <BsPencil />
                    </button>
                  </div>
                  <button className="bg-red-500 w-fit text-white self-start px-2 py-1 rounded mr-4">
                    Reset Password
                  </button>
                </div>
                      <div className="mt-6 flex justify-end"> {/* Add more spacing */}
                        <button className="bg-bgGreen text-white px-2 py-1 rounded">
                          Save Changes
                        </button>
                      </div>
                    </div>
                  </div>
        </div>
    )
}