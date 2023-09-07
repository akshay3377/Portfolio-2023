import React, { useState } from "react";
import InputField from "../../child/atom/input";
import Button from "../../child/atom/button";

const JoinChatRoom = ({ onJoin }) => {
  const [roomID, setRoomID] = useState("");
  const handleJoin = () => onJoin(roomID);

  return (
    <div className="bg-white p-4">
      <InputField
        className={"rounded-md"}
        type={"text"}
        placeholder={"Room ID"}
        value={roomID}
        onchange={(e) => setRoomID(e.target.value)}
      />

      <Button onClick={handleJoin} children="Join" />
    </div>
  );
};

export default JoinChatRoom;
