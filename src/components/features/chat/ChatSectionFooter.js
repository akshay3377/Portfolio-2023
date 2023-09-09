import { SendMessageIcon } from "@/components/child/icons";
import React from "react";

export default function ChatSectionFooter({
  message,
  setMessage,
  handleSendMessage,
}) {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSendMessage();
    }
  };

  return (
    <div className="flex border-t border-[#d3d3d3] items-center  p-2">
      <input
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
        onKeyDown={handleKeyPress}
        type="text"
        className="flex-grow px-3 py-2 outline-none "
        placeholder="Type your message..."
      />

      <button
        onClick={handleSendMessage}
        className="ml-2 p-2 bg-[#32CD32]  rounded-lg"
      >
        <SendMessageIcon className={`w-[24px] h-[24px] z-50  `} />
      </button>
    </div>
  );
}
