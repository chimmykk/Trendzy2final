
import { BsTrash } from 'react-icons/bs'; // Import the delete icon
import { useState } from 'react';

export default function ShippingInfo(){

    
const [isAddingAddress, setIsAddingAddress] = useState(false);

// Function to toggle the address form visibility
const toggleAddressForm = () => {
  setIsAddingAddress(!isAddingAddress);
};
    return(
        <div className='w-[70%] p-4 min-h-screen '>
          <h2 className="text-2xl font-semibold mt-4">This is where your order will be delivered.</h2>

          {/* Display Saved Address */}
          <div className="flex items-center mt-4">
            <div className="border border-gray-300 p-2 rounded-lg bg-white font-normal flex-grow">
              123 Main St, Downtown, New York, NY - 12345, United States
            </div>
            <button className="ml-2 text-red-500">
              {/* Use React icons for delete */}
              <BsTrash />
            </button>
          </div>

          {/* Button to Add New Address */}
          <button onClick={toggleAddressForm} className="bg-bgGreen text-white p-2 rounded mt-4">
            Add New Address
          </button>

          {/* Address Input Form */}
          {isAddingAddress && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Enter your New Address</h3>
            <form>
        <div className="flex flex-wrap -mx-2">
          {/* Input field for Full Name */}
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Full Name:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="John Doe"
              // Add state and event handlers for each input field
            />
          </div>

          {/* Input field for Address Line 1 */}
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address Line 1:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="123 Main St"
              // Add state and event handlers for each input field
            />
          </div>

          {/* Input field for Locality */}
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Street:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="Downtown"
              // Add state and event handlers for each input field
            />
          </div>

          {/* Input field for Country */}
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Country:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="United States"
              // Add state and event handlers for each input field
            />
          </div>

          {/* Input field for Pin Code */}
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Pin Code:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="12345"
              // Add state and event handlers for each input field
            />
          </div>

          {/* Input field for City */}
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="New York"
              // Add state and event handlers for each input field
            />
          </div>

          {/* Input field for State */}
          <div className="w-1/2 px-2 mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State:
            </label>
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full"
              placeholder="NY"
              // Add state and event handlers for each input field
            />
          </div>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
        >
          Save Address
        </button>
      </form>

            </div>
          )}
        </div>
    )
}