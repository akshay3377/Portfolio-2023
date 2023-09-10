"use client";

import React, { useState, useEffect, useRef } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { FirebaseApp } from "../../../../firebaseConfig";
import ChatLottiee from "../../../../public/animation/chat.json";
import ChatSectionFooter from "./ChatSectionFooter";
import ChatSectionBody from "./ChatSectionBody";
import Lottie from "react-lottie";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: ChatLottiee,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const ChatRoom = ({ user }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageRef, setMessageRef] = useState(null);

  useEffect(() => {
    const dataBase = getDatabase(FirebaseApp);
    const chatRef = ref(dataBase, `chat/${user.roomId}/messages`);
    setMessageRef(chatRef);

    onValue(chatRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const messageList = Object.values(data);
        setMessages(messageList);
      } else {
        setMessages([]);
      }
    });
  }, [user.roomId]);

  const handleSendMessage = () => {
    const messageBody = {
      name: user.name,
      text: message,
      timestamp: new Date().toISOString(),
    };

    if (messageRef && message) {
      push(messageRef, { ...messageBody });
      setMessage("");
    }
  };

  const chatContainerRef = useRef(null);

  useEffect(() => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  }, [messages]);

  return (
    <div className="bg-white max-w-full rounded-lg shadow-lg">
      <strong className="inline-block p-4">Room ID : {user.roomId}</strong>

      <div
        ref={chatContainerRef}
        className=" h-[400px] p-4 flex flex-col  border-t border-[#d3d3d3]  w-full no-scrollbar overflow-y-auto "
      >
        {messages.length === 0 ? (
          <div className="max-h-[350px] max-w-[350px] mx-auto">
            <Lottie options={defaultOptions} className="w-[100%] h-auto" />
          </div>
        ) : (
          <>
            {messages.map((msg, index) => (
              <ChatSectionBody index={index} msg={msg} user={user} />
            ))}
          </>
        )}
      </div>

      <ChatSectionFooter
        message={message}
        setMessage={setMessage}
        handleSendMessage={handleSendMessage}
      />
    </div>
  );
};

export default ChatRoom;
