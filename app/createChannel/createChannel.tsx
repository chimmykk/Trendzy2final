

"use client"

import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';

const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';

// interface CreateChannelProps {
//   submittedData: any; // Define the type of submittedData
// }

export default function CreateChannel(){
  const [channelCreated, setChannelCreated] = useState(false);
  const router = useRouter();
  const [channelName, setChannelName] = useState('');
  const [channel, setChannel] = useState<any>(null);
  const [uid, setUid] = useState('');

  // console.log('Submitted Data haha:', submittedData);
  
  const { data: session } = useSession();
  const name  = session?.user?.name
  const firstWord = name?.split(' ')[0];


  const handleCreateChannel = async () => {
    const client = AgoraRTM.createInstance(APP_ID);
    const newUid = uuidv4();
    const newChannelName = firstWord;
  
    try {
      await client.login({ uid: newUid, token: undefined });
      const newChannel = client.createChannel(newChannelName || 'st');
      await newChannel.join();
  

      setChannel(newChannel);
      setChannelCreated(true);
      setChannelName(newChannelName || 'st');
      setUid(newUid);
      console.log("Channel created")
    } catch (error) {
      console.error('Error creating/joining the channel:', error);
    }

    // Assuming the channel is successfully created
    setChannelCreated(true);

    // Navigate to the video call component
    router.push('/stream');
  };

  return (
    <div>
      {!channelCreated ? (
        <button onClick={handleCreateChannel} disabled={channelCreated}>
          GO LIVE NOW
        </button>
      ) : null}
    </div>
  );
};