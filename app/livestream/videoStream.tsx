
"use client"
import React, { useState, useEffect } from 'react';
import AgoraUIKit, { PropsInterface, layout } from 'agora-react-uikit';
import { useSession } from 'next-auth/react';

const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';

const VideoCallUI = ( {channelName}: {channelName: string}) => {
  const [videocall, setVideocall] = useState(true);
  const [isPinned, setPinned] = useState(false);

  const props: PropsInterface = {
    rtcProps: {
      appId: APP_ID,
      channel: channelName,
      role: 'host',
      layout: isPinned ? layout.pin : layout.grid,
    },
    callbacks: {
      EndCall: () => {
        setVideocall(false);
        // Handle other actions when the call ends
      },
    },
    styleProps: {
      localBtnContainer: { backgroundColor: 'transparent' },
    },
  };    

  return (
    <div className="container">
         <h1 className='text-white'>channel name: {channelName}</h1>
      <div className='w-[500px] h-[500px] flex'>
        <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} styleProps={props.styleProps} />
      </div>
    </div>
  );
};

export default VideoCallUI;