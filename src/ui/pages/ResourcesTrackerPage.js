import React from "react";
import './resourcestrackerpage.css';
import  { Ressources }   from "../Containers"; 
import Sidebar from "../components/Sidebar/Sidebar";

const ResourcesTrackerPage = () => {
  return (
    <div className="page_container">
      <div className="sidebar_ressources">
      <Sidebar/>
      </div>
      <div className="analysis">
        <Ressources />
      </div>
     
      
    </div>
  )
}

export default ResourcesTrackerPage
