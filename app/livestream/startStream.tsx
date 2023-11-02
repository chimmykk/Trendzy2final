
"use client"

import React, { useState, useEffect, useRef } from 'react';
import AgoraUIKit, { PropsInterface, layout } from 'agora-react-uikit';
import AgoraRTM from 'agora-rtm-sdk';
import { v4 as uuidv4 } from 'uuid';
import { useSession } from 'next-auth/react';


const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';

const StartStream: React.FunctionComponent = () => {

  const [videocall, setVideocall] = useState(false);
  const [isPinned, setPinned] = useState(false);
  const [channelName, setChannelName] = useState('');
  const [channel, setChannel] = useState<any>(null);
  const [channelCreated, setChannelCreated] = useState(false);
  const [uid, setUid] = useState('');
  const { data: session } = useSession();

  console.log(session?.user?.name)
  const name  = session?.user?.name
  const firstWord = name?.split(' ')[0];
  
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
        setChannelCreated(false);
      },

    },
    styleProps: {
      localBtnContainer: { backgroundColor : 'transparent' },
    },
  };

  
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

  return (
    <div className="container">
      {videocall && channelCreated ? (
        <>
          <h2 className="heading">
            You are <span className="person">an Host Now </span>
          </h2>
          <div className='w-[500px] h-[500px] flex'>
            <AgoraUIKit rtcProps={props.rtcProps} callbacks={props.callbacks} styleProps={props.styleProps} />
          </div>
          <App channel={channel} uid={uid} />
          <div className="nav">
            <button className="btn" onClick={() => setPinned(!isPinned)}>
              Change Layout
            </button>
          </div>
        </>
      ) : (
        <button className="" onClick={handleCreateChannel} disabled={channelCreated}>
          Create Channel with Random
        </button>
      )}
    </div>
  );
};

export default StartStream;

const App = ({ channel, uid }: { channel: any; uid: string }) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<{ text: string; uid: any }[]>([]);
  const [text, setText] = useState('');
  const { data: session } = useSession();
  const [userData, setUserData] = useState<{ [uid: string]: string }>({});

  useEffect(() => {
    // Retrieve user data for each sender's UID and store it in userData state
    if (channel && channel.userDataMap) {
      setUserData(channel.userDataMap);
    }
  }, [channel]);





  const appendMessage = (message: { text: string; uid: any }) => {
    setMessages((messages) => [...messages, message]);
  };

  useEffect(() => {
    const handleChannelMessage = (message: any, peerId: any) => {
      appendMessage({
        text: message.text,
        uid: peerId.uid,
      });
    };

    if (channel) {
      channel.on('ChannelMessage', handleChannelMessage);
    }

    return () => {
      if (channel) {
        channel.off('ChannelMessage', handleChannelMessage);
      }
    };
  }, [channel]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === '') return;
    channel.sendMessage({ text, type: 'text' });
    appendMessage({
      text: text,
      uid: uid,
    });
    setText('');
  };

  console.log(messages)

  return (
    <div className="w-1/2 bg-white text-black">
      <div className="messages" ref={messagesRef}>
        <div className="inner">
          {messages.map((message, idx) => (
            <div key={idx} className="message">
              {message.uid === uid && (
                <div className="user-self">
                  You:&nbsp;
                </div>
              )}
              {message.uid !== uid && (
                <div className="user-them">
                    hello
                </div>
              )}
              <div className="text">{message.text} has joined</div>
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={sendMessage}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type your message"
        />
        <button>+</button>
      </form>
    </div>
  );
};
