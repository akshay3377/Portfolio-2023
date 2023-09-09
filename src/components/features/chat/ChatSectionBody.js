import moment from "moment";

export default function ChatSectionBody({index , msg , user}) {

  const extractTime = (time) => moment(time).format("h:mm A");
  
  return (
    <div key={index} className={`mb-[12px] flex ${ msg.name === user.name ? "justify-end" : "justify-start"}`}>
    <div className={`max-w-[700px]  ${msg.name === user.name ? "bg-[black] text-white": "bg-[#D3D3D3]  text-black"} p-2 rounded-md`}>
      {msg.text}
      <p className="text-right text-[10px] mt-1"> {extractTime(msg.timestamp)}</p>
    </div>
  </div>
  )
}
