import React from "react";
import './resourcestrackerpage.css';
import  { Monitring, Ressourcescosts, Analysis, Weather }   from "../components"; 
import Sidebar from "../components/Sidebar/Sidebar";
const ResourcesTrackerPage = () => {
  return (
    <div className="tracker_container">
     
      <Sidebar/>
  
    <div className="tracker">
      <div className="tracker_up">
        <Analysis />
        <Weather />
      </div> 
      <div className="tracker_down">
        <Monitring />
        <Ressourcescosts />
      </div>  
    </div>
    </div>
  )
}

export default ResourcesTrackerPage
