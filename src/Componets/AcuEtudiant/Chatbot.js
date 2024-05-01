import { useState } from "react";
import '@chatscope/chat-ui-kit-react-styles/dist/default/styles.min.css';
import React from 'react'
import { MainContainer,ChatContainer,MessageList,Message,MessageInput,TypingIndicator } from "@chatscope/chat-ui-kit-react";
function Chatbot() {
  const [message, setMessage] = useState([
  {
    message:"Hello, Iam chatGPT",
    sender:"ChatGPT"
  }])
  const handleSend =async (message) => {
    const newMessage = {
      message:message,
      sender:"user",
      direction:"outgoing"
    }

    const newMessages = [...message,newMessage];

setMessage(newMessages);

  }
  return (
    <div>
      <div style={{position:"relative",height:"800px",width:"700px"}}>
<MainContainer>
  <ChatContainer>
    <MessageList>
      {message.map ((message,i)=>{
        return <Message Key={i} model={message} />
      
       })}
    </MessageList>
    <MessageInput placeholder="type message here" onSend={handleSend}/>
  </ChatContainer>
</MainContainer>
      </div>
    </div>
  )
}

export default Chatbot