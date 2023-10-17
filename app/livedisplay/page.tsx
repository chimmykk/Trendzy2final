"use client"
import React, { useState, useEffect, useRef } from 'react';
import AgoraUIKit, { PropsInterface, layout } from 'agora-react-uikit';
import BtnTemplate from 'agora-react-uikit';

const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';



const Audience: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(true);

 

  const props: PropsInterface = {
    rtcProps: {
      appId: APP_ID,
      channel: 'qwerty',
      role: 'audience',
      layout: layout.grid,
    },
    callbacks: {
      EndCall: () => {
        setVideocall(false);
      },

    },
    styleProps: {
        localBtnContainer: { display: 'none' }, // Hide the local buttons container
        remoteBtnStyles: {
          muteRemoteAudio: { display: 'none' }, // Hide the remote mute audio button
          muteRemoteVideo: { display: 'none' }, // Hide the remote mute video button
          remoteSwap: { display: 'none' }, // Hide the remote swap button
          minCloseBtnStyles: { display: 'none' }, // Hide the overlay close button
        },
    },
    
  };


  return (
    <div className="container">
            <>
          <h2 className="heading">
            You are <span className="person">an audience Now </span>
          </h2>
          <div className='w-[500px] h-[500px] flex'>
            <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} styleProps={props.styleProps} />
          </div>
        </>
    </div>
  );
};

export default Audience;
