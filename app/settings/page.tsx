
import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import SettingOptions from "./settingOptions";

const getobjectId = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email || "Email not found"; 
  const res = await fetch(`http://localhost:3000/api/fetch/route?email=${email}`)
  const data = await res.json();
  return data._id
}

const getSellerInfo = async () => {
  // const ObjectData = await getobjectId();
  const objectId = await getobjectId()
  const res = await fetch(`http://localhost:3000/api/fetch/fetchaddress?objectId=${objectId}`);
  const data = await res.json();
  return data;
}

const fetchProfileImage = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email || "Email not found"; 
  const res = await fetch(`http://localhost:3000/api/upload/image?email=${email}`)
  const data = await res.json();
  return data;
}

const fetchProfileBanner = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email || "Email not found"; 
  const res = await fetch(`http://localhost:3000/api/upload/banner?email=${encodeURIComponent(email)}`)
  const data = await res.json();
  return data;
}

export default async function SettingHead() {

  const objectId = await getobjectId() 

  const sellerInfo = await getSellerInfo();
  const seller = sellerInfo.seller;

  const imgData = await fetchProfileImage();
  const profileImg = imgData.profileImage;

  const BannerData = await fetchProfileBanner();
  const profileBanner = BannerData.bannerImage;

  return (
      <main>
        <SettingOptions 
            seller={seller} 
            profileImg={profileImg}
            objectId ={objectId}    
            profileBanner={profileBanner}
        />
      </main>
  );
}


