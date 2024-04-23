import logo from "./logo.svg";
import Sidebar from "./ui/components/Sidebar/Sidebar";
import CommunnityPage from "./ui/pages/CommunnityPage";
import ChatbotPage from "./ui/pages/ChatbotPage";
import Home from "./ui/pages/Home";
import FarmSchedulerPage from "./ui/pages/FarmSchedulerPage";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div
    style={{display:'flex'}}
    >
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Forum" element={<CommunnityPage />} />
        <Route path="/Chatbot" element={<ChatbotPage />} />
        <Route path="/Farm-scheduler" element={<FarmSchedulerPage/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
