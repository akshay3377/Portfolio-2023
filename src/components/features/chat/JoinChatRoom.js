"use client";

import React, { useState } from "react";
import InputField from "../../child/atom/input";
import Button from "../../child/atom/button";

const JoinChatRoom = ({ onJoin }) => {
  const [userData, setUserData] = useState({ roomId: "", name: "" });

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setUserData((pre) => ({ ...pre, [name]: value }));
  };

  const handleJoin = () => onJoin(userData);

  return (
    <div className="bg-white p-4">
      <div className="flex flex-col">
        <InputField
          name={"roomId"}
          className={"rounded-md"}
          type={"text"}
          placeholder={"Room ID"}
          value={userData.roomId}
          onchange={handleOnChange}
        />

        <InputField
          name={"name"}
          className={"rounded-md"}
          type={"text"}
          placeholder={"Enter your Name"}
          value={userData.name}
          onchange={handleOnChange}
        />
      </div>

      <Button onClick={handleJoin} children="Join" />
    </div>
  );
};

export default JoinChatRoom;
