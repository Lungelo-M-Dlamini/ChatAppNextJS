import React, {useContext, useEffect, useState} from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(()=>
  import("react-chat-engine").then((module) => module.ChatEngine)
);

const MessageFormSocial = dynamic(()=>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

export default function Chats() {
  const {username, secret} = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router =useRouter();

  useEffect(()=>{
    if(typeof document !== null){
      setShowChat(true)
    }
  });
  
  useEffect(()=>{
    if(username.length === 0 || secret.length === 0) router.push("/")
  });
  if(!showChat) return <div/>

  return (
    <div className="background">
      <div className="shadow">
        <ChatEngine
        height='calc(110vh - 210px)'
        projectID='14a04349-9147-4b70-ab6a-532195b2a8c7'
        userName={username}
        userSecret={secret}
        renderNewMessageForm={()=> <MessageFormSocial/>}
        />
      </div>
    </div>
  )
}
