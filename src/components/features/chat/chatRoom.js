import React, { useState, useEffect } from "react";
import { getDatabase, ref, push, onValue } from "firebase/database";
import { FApp } from "../../../../firebaseConfig";
import { SendMessageIcon } from "@/components/child/icons";
import moment from "moment";

const ChatRoom = ({ user }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageRef, setMessageRef] = useState(null);

  useEffect(() => {
    const db = getDatabase(FApp);

    const chatRef = ref(db, `chatRooms/${user.roomId}/messages`);
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
    const payload = {
      name: user.name,
      text: message,
      timestamp: new Date().toISOString(),
    };

    if (messageRef && message) {
      push(messageRef, { ...payload });
      setMessage("");
    }
  };

  return (
    <div className="bg-white max-w-full">
      <strong className=" inline-block p-6">Room ID : {user.roomId}</strong>

      <div className=" h-[400px] p-6 flex flex-col border-t border-[grey]  w-full overflow-y-scroll no-scrollbar   ">
        {messages.map((msg, index) => {
          return (
            <div
              key={index}
              className={` flex ${
                msg.name === user.name ? "justify-end" : "justify-start"
              }    mb-[16px] `}
            >
              <div
                className={`max-w-[700px]  ${
                  msg.name === user.name
                    ? "bg-[black] text-white"
                    : "bg-[#D3D3D3]  text-black"
                } p-2 rounded-md `}
              >
                {msg.text}
                <p className="text-right text-[10px] mt-1">
                  {moment(msg.timestamp).format("h:mm A")}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex shadow-lg my-5 bg-white  border border-2 border-grey   rounded-lg items-center  p-2">
        <input
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          type="text"
          className="flex-grow px-3 py-2 outline-none "
          placeholder="Type your message..."
        />
        <button onClick={handleSendMessage} className="ml-2 p-2  rounded-lg">
          <SendMessageIcon className={`w-[32px] h-[32px] z-50`} />
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;
