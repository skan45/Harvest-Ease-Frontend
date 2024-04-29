import React from 'react'
import ChatbotInput from '../components/ChatbotInput'
import MessagesLayout from '../components/MessagesLayout'
import ChatbotPageNavBar from '../components/ChatbotPageNavBar'
import ChatProvider from '../../providers/ChatProvider'

function ChatbotPage() {
  return (
    <ChatProvider>

    <div className="h-screen flex-col flex justify-end p-6">
      {/* <ChatbotPageNavBar className='mb-2'/>
      <MessagesLayout className=''/>
      <ChatbotInput className="fixed bottom-3 "/> */}
    </div>
    </ChatProvider>
      
      
     
  )
}

export default ChatbotPage