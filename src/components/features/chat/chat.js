"use client";

import { useState } from "react";
import ChatRoom from "./ChatRoom";
import JoinChatRoom from "./JoinChatRoom";

const ChatSection = () => {
  const [user, setUser] = useState(null);
  const handleJoin = (value) => setUser(value);

  return (
    <div className="w-full ">
      <h1 className="font-[700] text-[26px] mb-[16px]">
        Chat with your friend...
      </h1>
      {user?.roomId && user?.name ? (
        <ChatRoom user={user} />
      ) : (
        <JoinChatRoom onJoin={handleJoin} />
      )}
    </div>
  );
};

export default ChatSection;
