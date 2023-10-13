"use client"
import React, { useState, useEffect, useRef } from 'react';
import AgoraUIKit, { icons, PropsInterface, layout, BtnTemplate, VideocallUI } from 'agora-react-uikit';


const APP_ID = 'c4d6e23287ed4da6b6831383945f9ed2';

const App = ({ channel, uid }: { channel: any; uid: string }) => {
  const messagesRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<{ text: string; uid: any }[]>([]);
  const [text, setText] = useState('');

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
    // changes

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

  return (
    <div className="panel">
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
                  Them:&nbsp;
                </div>
              )}
              <div className="text">{message.text}</div>
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

const Audience: React.FunctionComponent = () => {
  const [videocall, setVideocall] = useState(false);
  const [isPinned, setPinned] = useState(false);
  const [channelsMap, setChannelsMap] = useState<Map<string, any>>(new Map());
  const [selectedChannel, setSelectedChannel] = useState<string>('Thotjj');
  const [uid, setUid] = useState('');

  const props: PropsInterface = {
    rtcProps: {
      appId: APP_ID,
      channel: selectedChannel,
      role: 'audience',
      layout:  layout.grid,
    },
     callbacks: {
      EndCall: () => setVideocall(false)
    },
    styleProps: {
      localBtnContainer: { display : 'none' },
    },
  };

  return (
    
      <div >
      {videocall ? (
        <AgoraUIKit
            rtcProps={props.rtcProps}
            callbacks={props.callbacks}
            styleProps={props.styleProps} />
      ) : (
          null
        )}
    </div>
  )
}

export default AgoraUIKit