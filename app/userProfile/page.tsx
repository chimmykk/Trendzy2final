
import Link from "next/link";
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import ProfileContainer from "./profileComponents";

const getSessionFromServer = async () => {
  const session = await getServerSession(authOptions);
  return session 
}

const fetchProfileImage = async () => {
  try {
    const session = await getServerSession(authOptions);
    const email = session?.user?.email || "Email not found"; 
    const res = await fetch(`http://localhost:3000/api/upload/image?email=${encodeURIComponent(email)}`);

    if (!res.ok) {
      throw new Error(`Error fetching profile image: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching profile image:", error);
    return null; // Return null in case of an error
  }
};

const fetchProfileBanner = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email || "Email not found"; 
  const res = await fetch(`http://localhost:3000/api/upload/banner?email=${encodeURIComponent(email)}`)
  const data = await res.json();
  return data;
}

export default async function ProfilePage() {

  const session = await getSessionFromServer();

  let profileImg; // Declare the variable here

  const imgData = await fetchProfileImage();

  if (imgData && imgData.profileImage) {
    profileImg = imgData.profileImage; // Assign the value inside the block
  } else {
    // Handle the case where imgData or imgData.profileImage is null or undefined
    console.error('Image data is missing or invalid.');
  }
  const BannerData = await fetchProfileBanner();
  const profileBanner = BannerData.bannerImage;  
  

  return (
    <div className=" bg-[#f7f7f8]  ">
      <ProfileContainer profileImg={profileImg} session={session}/>
    </div>
  );
}

