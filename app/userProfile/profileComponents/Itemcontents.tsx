
import { FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";

interface ItemContentsProps {
  activeTab: string; // Change the type as needed
}

export default function ItemContents({ activeTab }: ItemContentsProps) {
  let content = null;

  // Check the value of activeTab and set the content accordingly
  if (activeTab === 'About') {
  content = (
    <div className="mx-80 p-6 bg-white rounded-md">
      <h3 className="text-lg font-semibold">About Mathhew</h3>
      {/* Followers */}
      <div className="flex items-center gap-2">
        <span className="font-semibold">2k</span>
        <span className="text-gray-600">Followers</span>
      </div>

      {/* Bio */}
      <p className="text-gray-600 mt-2">Hello Iam Mathhew</p>

      {/* Social Media Icons */}
      <div className="flex mt-4">
        {/* Replace these icons with actual social media icons */}
        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
          <FaTwitter size="20"/>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700 mr-4">
          <FaFacebook size="20"/>
        </a>
        <a href="#" className="text-gray-500 hover:text-gray-700">
          <FaInstagram size="20"/>
        </a>
      </div>
    </div>
  );
}
 else if (activeTab === 'Products') {
    content = (
      <div>
        <h3>Products</h3>
        <p>This is the Products section content.</p>
      </div>
    );
  } else if (activeTab === 'Schedule') {
    content = (
      <div>
        <h3>Schedule</h3>
        <p>This is the Schedule section content.</p>
      </div>
    );
  } else if (activeTab === 'Reviews') {
    content = (
      <div>
        <h3>Reviews</h3>
        <p>This is the Reviews section content.</p>
      </div>
    );
  }

  return <div className="bg-bgGray py-6">{content}</div>;
}
