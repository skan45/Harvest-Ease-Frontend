import React from 'react'
import { NavLink } from "react-router-dom";


function ChatbotPageNavBar() {
  return (
    //  <div /*className='flex flex-row w-1/3 h-1/6 mx-auto mt-1 mb-4 '*/>
    //     {console.log("im heree")}
    //     <Link to="Chat">
    //         <button className={`${activeTab==='Chat'? 'bg-grassGreen text-pastelYellow ' : 'text-grassGreen hover:bg-gray-100'} font-semibold rounded-3xl w-1/4 flex-1 `} onClick={()=>setActiveTab('Chat')}>Chat</button>
    //     </Link>
    //     <Link to="Saved-messages">
    //         <button className={`${activeTab==='Saved Messages'? 'bg-grassGreen text-pastelYellow' : 'text-grassGreen hover:bg-gray-100'}  text-white font-semibold rounded-3xl w1/4 flex-1 px-3`} onClick={()=>setActiveTab('Saved Messages')}>Saved Messages</button>
    //     </Link>
    // </div>
    <nav className=' h-full w-1/4  py-4 bg-grayGreen'>
      <div className='flex flex-col justify-between items-cnter relative top-1/4 mx-5'>
          <NavLink to="Chat"
                    className={({ isActive }) => {
                      let classes="text-left p-3 h-6"
                      classes+= isActive? "text-green-700 font-semibold rounded-full bg-subtleGray"
                                        : "hover:text-green-700 "

                      return classes

                      } 
                      }
                  >
                    
                      Chat
                      
                  </NavLink>
                  <NavLink to="Saved-messages" 
                    className={({ isActive }) => {

                      let classes="text-left mt-3 p-3 h-6"
                      classes+= isActive? "text-green-700 font-semibold rounded-full bg-subtleGray"
                                : "hover:text-green-700 "

                      return classes

                      } 
                    }
                  >
                      Saved Messages
                  </NavLink>
      </div>
        
    </nav>
  )
}

export default ChatbotPageNavBar

