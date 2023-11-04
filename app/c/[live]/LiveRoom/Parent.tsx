"use client"

import ChannelInfo from "./channel/ChannelInfo";
import Chat from "./channel/Chat";
import Sidebar from "./channel/Sidebar";
import StreamPlayer from "./channel/StreamPlayer";
import { useEffect, useState } from "react";
import AgoraRTM from 'agora-rtm-sdk';

const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';

type Props = {
  channelName: string; // Define the channelName prop
};

export default function ChannelPage({ channelName }: Props) {

  const [channelsMap, setChannelsMap] = useState<Map<string, any>>(new Map());
  const [uid, setUid] = useState('');


  useEffect(() => {
    handleJoinChannel(channelName)
  }, [channelName]);

  const handleJoinChannel = async (channelName: string) => {
    
    if (channelsMap.has(channelName)) {
      const channelInstance = channelsMap.get(channelName);
      setUid(String(Math.floor(Math.random() * 1000000)));
      await channelInstance.join();
    } else {
      const client = AgoraRTM.createInstance(APP_ID);
      const newUid = String(Math.floor(Math.random() * 1000000));
      const trimmedChannelName = channelName.trim();

      try {
        await client.login({ uid: newUid, token: undefined });
        const newChannel = client.createChannel(trimmedChannelName);
        await newChannel.join();
        setChannelsMap(new Map(channelsMap.set(channelName, newChannel)));
        setUid(newUid);
      } catch (error) {
        console.error('Error creating/joining the channel:', error);
      }
    }
  };

  return (
    <div className=" min-h-screen grid grid-cols-1 md:grid-cols-3 bg-[#0E0E10] xl:grid-cols-4">
  {/* Sidebar */}
  <div className="hidden md:block md:col-span-1 border-r border-[#3d3939]">
    <Sidebar />
  </div>

  {/* Main Content */}
  <div className="md:col-span-2 ">
    {/* Stream Player */}
    <StreamPlayer channelName={channelName} />

    {/* Channel Info */}
    <ChannelInfo />
  </div>

  {/* Chat */}
  <div className="hidden lg:block md:col-span-1 border-l border-[#3d3939]">
    <Chat channel={channelsMap.get(channelName)} uid={uid}/>
  </div>
</div>

  );
}
