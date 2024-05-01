import React from 'react'
import './plantHealth.css';
import { PlantScanner } from '../Containers';
import Sidebar from '../components/Sidebar/Sidebar';

const PlantHealth = () => {
  return (
    <div className='plant_health'>

      <div className='sidebar_health'>
       <Sidebar />
      </div>

      <div className='plant_scanner'>
        <PlantScanner/>
      </div>



      
    </div>
  )
}

export default PlantHealth
