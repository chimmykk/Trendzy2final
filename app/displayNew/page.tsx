import { getServerSession } from "next-auth/next"
import { authOptions } from "../../pages/api/auth/[...nextauth]"
import ProfileImg from "../settings/profilepicUpload";


const getSessionData = async () => {
  const session = await getServerSession(authOptions);
  const email = session?.user?.email || "Email not found"; 
  const res = await fetch(`http://localhost:3000/api/fetch/route?email=${encodeURIComponent(email)}`)
  const data = await res.json();
  return data
}

const getSellerInfo = async () => {
  const sessionData = await getSessionData();
  const objectId = sessionData._id;
  const res = await fetch(`http://localhost:3000/api/fetch/fetchaddress?objectId=${objectId}`);
  const data = await res.json();
  return data;
}

export default async function DisplayNew() {

  const response = await getSellerInfo();
  const seller = response.seller;

  return (
    <div>
      <strong>Address Line 1:</strong> {seller?.returnAddress.addressLine1 || 'N/A'}<br />
      <strong>Address Line 2:</strong> {seller?.returnAddress.addressLine2 || 'N/A'}<br />
      <strong>State:</strong> {seller?.returnAddress.state || 'N/A'}<br />
      <strong>City:</strong> {seller?.returnAddress.city || 'N/A'}<br />
      <strong>Country:</strong> {seller?.returnAddress.country || 'N/A'}<br />
      <ProfileImg />
    </div>
  );
}


