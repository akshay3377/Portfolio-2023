// ChatRoom.js
import React, { useState, useEffect } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { FApp } from "../../../../firebaseConfig";
import InputField from "../../child/atom/input";

const ChatRoom = ({ roomID }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageRef, setMessageRef] = useState(null);

  console.log(messages);
  useEffect(() => {
    const db = getDatabase(FApp);

    const chatRef = ref(db, `chatRooms/${roomID}/messages`);
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
  }, [roomID]);

  const sendMessage = () => {
    if (messageRef && message) {
      push(messageRef, {
        text: message,
        timestamp: new Date().toISOString(),
      });
      setMessage("");
    }
  };

  return (
    <div className="bg-white h-[400px]">
      <strong>Current Room: {roomID}</strong>
      <div>
        {messages?.map((msg, index) => (
          <div key={index}>
            <strong>{msg.sender}: </strong>
            {msg.text}
          </div>
        ))}
      </div>
      <div>
        <InputField
          type={"text"}
          placeholder={"Type your message"}
          value={message}
          onchange={(e) => setMessage(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default ChatRoom;
