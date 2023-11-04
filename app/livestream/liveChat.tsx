"use client"

import { useRef, useState, useEffect } from "react";
import { useSession } from "next-auth/react";

const LiveChat = ({ channel, uid }: { channel: any; uid: string }) => {
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
    
      const newMessage = {
        text: JSON.stringify({ message: text, rtmId: session?.user?.name }), // Include RTM ID in the message
        type: 'text',
        uid: uid,
      };
    
      if (channel) {
        channel.sendMessage(newMessage);
        appendMessage(newMessage);
        setText('');
      }
    };
    
    console.log(messages)
  
    return (
      <div className="w-1/2 text-white ">
        <div className="messages" ref={messagesRef}>
          <div className="inner">
            {messages.map((message, idx) => (
              <div key={idx} className="message">
                {message.uid === uid && (
                  <div className="user-self text-green-500">
                    You:&nbsp;
                  </div>
                )}
                {message.uid !== uid && (
                  <div className="user-them text-green-500">
                        {message.text ? JSON.parse(message.text).rtmId : 'Sender'}:&nbsp;
                  </div>
                )}
               <div className="text">{message.text ? JSON.parse(message.text).message : ''}</div>
              </div>
            ))}
          </div>
        </div>
  
        <form onSubmit={sendMessage} className="flex gap-2">
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Type your message"
            className="text-white bg-transparent border"
          />
          <button>send</button>
        </form>
      </div>
    );
  };

  export default LiveChat
  
