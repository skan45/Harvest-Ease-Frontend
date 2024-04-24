import React from "react";
import MessagesLayout from "../components/MessagesLayout";
import ChatbotInput from "../components/ChatbotInput";
function ChatPage() {
  return (
    < >
      <MessagesLayout/>
      <ChatbotInput className="fixed bottom-3 " />
    </>
  )
}

export default ChatPage;
