"use client";

import React, { useState } from "react";
import ChatRoom from "@/components/features/chat/chatRoom";
import JoinChatRoom from "@/components/features/chat/joinChatRoom";

const App = () => {
  const [roomID, setRoomID] = useState("");
  const handleJoin = (roomID) => setRoomID(roomID);

  return (
    <section className="w-full  py-[100px]">
      <div className="max-w-[1200px] mx-auto">
        <h1 className="font-[700] text-[36px] mb-[16px]">
          Chat with your friend...
        </h1>
        {roomID ? (
          <ChatRoom roomID={roomID} />
        ) : (
          <JoinChatRoom onJoin={handleJoin} />
        )}
      </div>
    </section>
  );
};

export default App;
