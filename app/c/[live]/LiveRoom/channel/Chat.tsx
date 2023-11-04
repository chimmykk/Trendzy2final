"use client"

import LiveChat from "@/app/livestream/liveChat";

export default function Chat({ channel, uid }: { channel: any; uid: string }) {

  return (
    <div className="flex flex-col fixed gap-4 right-0 px-2 text-white w-[300px] py-4 h-full">
      <h1 className="text-xl text-yellow-500">Live Chat</h1>
      <LiveChat channel={channel} uid={uid}/>
    </div>
  );
}
