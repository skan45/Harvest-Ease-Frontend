import CommunnityPage from "../src/ui/pages/CommunityPage";
import ChatbotPage from "./ui/pages/ChatbotPage";
import ChatPage from "./ui/pages/chatpage";

import Home from "../src/ui/pages/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "../src/ui/components/Layout";
import SettingsPage from "../src/ui/pages/SettingsPage";
import FarmSchedulerPage from "../src/ui/pages/FarmSchedulerPage";
import ResourcesTrackerPage from "../src/ui/pages/ResourcesTrackerPage";
import SavedMessagesPage from "../src/ui/pages/SavedMessagePage";
import ChatbotPageLayout from "../src/ui/components/chatbot/ChatbotPageLayout";
import Login from "./ui/pages/login";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/login" element={<Login/>} />
          {/* <Route path="/Farm-scheduler" element={<FarmSchedulerPage />} /> */}
          <Route path="/Resources-tracker" element={<ResourcesTrackerPage />} />
          <Route path="/Forum" element={<CommunnityPage />} />
          <Route path="Chatbot" element={<ChatbotPageLayout />}>
            {/* <Route index element={<ChatPage />} /> */}
            <Route path="Chat" element={<ChatPage />}/>
            <Route path="Saved-messages" element={<SavedMessagesPage />} />
          </Route>
        </Routes>
      </Layout>
    </div>
  );
}

export default App;