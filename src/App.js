import CommunnityPage from "./ui/pages/CommunnityPage";
import ChatbotPage from "./ui/pages/ChatbotPage";
import Home from "./ui/pages/Home";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./ui/components/Layout";
import SettingsPage from "./ui/pages/SettingsPage";
import FarmSchedulerPage from "./ui/pages/FarmSchedulerPage";
import ResourcesTrackerPage from "./ui/pages/ResourcesTrackerPage";
import ChatPage from "./ui/pages/ChatPage";
import SavedMessagesPage from "./ui/pages/SavedMessagesPage";
import ChatbotPageLayout from "./ui/components/ChatbotPageLayout";

function App() {
  return (
    <div>
      <Layout>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Settings" element={<SettingsPage />} />
          <Route path="/Farm-scheduler" element={<FarmSchedulerPage />} />
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
