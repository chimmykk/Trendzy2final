"use client"

import React, { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import VideoCallUI from './videoStream';
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import LiveChat from './liveChat';

const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';

export default function Lives() {
  const [videocall, setVideocall] = useState(false);
  const [isPinned, setPinned] = useState(false);
  const [channelName, setChannelName] = useState('');
  const [channel, setChannel] = useState<any>(null);
  const [channelCreated, setChannelCreated] = useState(false);
  const [uid, setUid] = useState('');
  const { data: session } = useSession();

  const name = session?.user?.name;
  const firstWord = name?.split(' ')[0];

  useEffect(() => {
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
          setVideocall(true);
          setChannelName(newChannelName || 'st');
          setUid(newUid);
        } catch (error) {
          console.error('Error creating/joining the channel:', error);
        }
      };

    handleCreateChannel();
  }, [firstWord]); // Make sure to include `firstWord` in the dependencies array

  return (
    <div className='flex bg-black min-h-screen'>
      <div className='flex flex-col border'>
        {/* <div>uid :{uid}</div> */}
        {channelCreated && <VideoCallUI channelName={channelName || ''} />}
      </div>
      <LiveChat channel={channel} uid={uid}/>
    </div>
  );
}
