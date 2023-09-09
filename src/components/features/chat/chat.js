"use client";

import { useState } from "react";
import ChatRoom from "./ChatRoom";
import JoinChatRoom from "./JoinChatRoom";

const ChatSection = () => {
  const [user, setUser] = useState(null);
  const handleJoin = (value) => setUser(value);

  return (
    <section className="w-full py-[80px]">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-[700] text-[26px] mb-[16px]">
          Chat with your friend...
        </h1>
        {user?.roomId && user?.name ? (
          <ChatRoom user={user} />
        ) : (
          <JoinChatRoom onJoin={handleJoin} />
        )}
      </div>
    </section>
  );
};

export default ChatSection;
