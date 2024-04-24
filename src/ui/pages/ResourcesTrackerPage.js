import React from "react";
import './resourcestrackerpage.css';
import  { Monitring, Ressourcescosts, Analysis, Weather }   from "../components"; 
import Sidebar from "../components/Sidebar/Sidebar";

const ResourcesTrackerPage = () => {
  return (
    <div className="tracker_container">
      <div className="sidebar_resources">
      <Sidebar/>
      </div>
      <div className="analysis">
        <Analysis />
      </div>
      <div className="weather">
        <Weather />
      </div>
      <div className="monitoring">
        <Monitring />
      </div>
      <div className="resourcescosts">
        <Ressourcescosts />
      </div>
      
    </div>
  )
}

export default ResourcesTrackerPage
