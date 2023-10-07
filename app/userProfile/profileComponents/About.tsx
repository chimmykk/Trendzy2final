
import { FaTwitter, FaFacebook, FaInstagram} from "react-icons/fa";

export default function About({name}: {name: string}){
    return(
    <div className="mx-80 p-6 bg-white shadow-lg rounded-md">
      <h3 className="text-lg font-semibold">About {name}</h3>
      {/* Followers */}
      <div className="flex items-center gap-2">
        <span className="font-semibold">2k</span>
        <span className="text-gray-600">Followers</span>
      </div>

      {/* Bio */}
      <p className="text-gray-600 mt-2">Hello how are u</p>

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
    )
}