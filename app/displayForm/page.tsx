"use client"
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';


const AddressDisplay: React.FC = () => {
    const [sellerData, setSellerData] = useState<any>(null); // Initialize as null

  const [objectId, setObjectId] = useState<string | null>(null);
  const { data: session, } = useSession();

  useEffect(() => {
    const fetchObjectId = async () => {
      try {
        if (session?.user?.email) {
          const route1 = `/api/fetch/route?email=${session.user.email}`;
          const response = await fetch(route1);
      
          if (response.ok) {
            const data = await response.json();
            setObjectId(data._id);
          } else {
            console.error('Failed to fetch object ID');
          }
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    };
    
    fetchObjectId();
  }, [session]);

  const fetchSellerInfo = async () => {
    if (objectId) {
      try {
        const response = await fetch(`/api/fetch/fetchaddress?objectId=${objectId}`);
        if (response.ok) {
          const data = await response.json();
            setSellerData(data.seller); // Set the seller data object
          console.log('Seller information:', data);
        } else {
          console.error('Failed to fetch seller information');
        }
      } catch (error) {
        console.error('Failed to fetch seller information:', error);
      }
    }
  };

  useEffect(() => {
    fetchSellerInfo();
    console.log(sellerData)
  }, [objectId]);

  return (
    <div>
      <h2>Addresses:</h2>
      <ul>
      {sellerData && (
        <ul>
          <li>
            <strong>Address Line 1:</strong> {sellerData.returnAddress.addressLine1 || 'N/A'}<br />
            <strong>Address Line 2:</strong> {sellerData.returnAddress.addressLine2 || 'N/A'}<br />
            <strong>State:</strong> {sellerData.returnAddress.state || 'N/A'}<br />
            <strong>City:</strong> {sellerData.returnAddress.city || 'N/A'}<br />
            <strong>Country:</strong> {sellerData.returnAddress.country || 'N/A'}<br />
          </li>
        </ul>
      )}
      </ul>
      <h1>hello world</h1>
    </div>
  );
};

export default AddressDisplay;