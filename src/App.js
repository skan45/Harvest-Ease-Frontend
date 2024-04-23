import logo from "./logo.svg";
import Sidebar from "./ui/components/Sidebar/Sidebar";
import CommunnityPage from "./ui/pages/CommunnityPage";
import ChatbotPage from "./ui/pages/ChatbotPage";
import Home from "./ui/pages/Home";
import  ResourcesTrackerPage from "./ui/pages/ResourcesTrackerPage";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Link to="/"></Link>
      <Link to="/Resources-Tracker"></Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Resources-Tracker" element={<ResourcesTrackerPage />} />
        <Route path="/Forum" element={<CommunnityPage />} />
        <Route path="/Chatbot" element={<ChatbotPage />} />
      </Routes>
    </div>
  );
}

export default App;

