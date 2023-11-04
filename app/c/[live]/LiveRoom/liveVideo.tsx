"use client"

import React, { useState, useEffect } from 'react';
import AgoraUIKit, { PropsInterface, layout } from 'agora-react-uikit';

const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';

const VideoCallUI = ( {channelName}: {channelName: string}) => {
  const [videocall, setVideocall] = useState(true);

  const props: PropsInterface = {
    rtcProps: {
      appId: APP_ID,
      channel: channelName,
      role: 'audience',
      layout: layout.grid,
    },
    
    styleProps: {
      localBtnContainer: { display: 'none' },
    },

    callbacks : {
        EndCall: () => setVideocall(false),
    },

    rtmProps : {},
  };    

  return (
    <div className="container">
        <div className=' flex w-[500px] -z-0 h-[550px] '>
            <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} rtmProps={props.rtmProps} styleProps={props.styleProps} />
        </div>
    </div>
  );
};

export default VideoCallUI;