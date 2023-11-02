"use client"

import ChannelInfo from "./channel/ChannelInfo";
import Chat from "./channel/Chat";
import Sidebar from "./channel/Sidebar";
import StreamPlayer from "./channel/StreamPlayer";

type Props = {
  channelName: string; // Define the channelName prop
};

export default function ChannelPage({ channelName }: Props) {
  return (
    <div className=" min-h-screen grid grid-cols-1 md:grid-cols-3 bg-[#0E0E10] xl:grid-cols-4">
  {/* Sidebar */}
  <div className="hidden md:block md:col-span-1 border-r border-[#3d3939]">
    <Sidebar />
  </div>

  {/* Main Content */}
  <div className="md:col-span-2">
    {/* Stream Player */}
    <StreamPlayer channelName={channelName} />

    {/* Channel Info */}
    <ChannelInfo />
  </div>

  {/* Chat */}
  <div className="hidden lg:block md:col-span-1 border-l border-[#3d3939]">
    <Chat />
  </div>
</div>

  );
}
