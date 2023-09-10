import moment from "moment";

export default function ChatSectionBody({index , msg , user}) {

  const extractTime = (time) => moment(time).format("h:mm A");
  
  return (
    <div key={index} className={`mb-[12px] w-full  flex ${ msg.name === user.name ? "justify-end" : "justify-start"}`}>
      <div className={`max-w-[700px]  ${msg.name === user.name ? "bg-[black] text-white rounded-tr-xl rounded-l-xl " : "rounded-br-xl rounded-t-xl bg-[#D3D3D3]  text-black"}   p-3  `}>
        <p className="text-[12px] font-[800]">{msg.name}</p>
        <p>{msg.text}</p>
        <p className="text-right text-[10px] mt-1"> {extractTime(msg.timestamp)}</p>
      </div>
  </div>
  )
}
