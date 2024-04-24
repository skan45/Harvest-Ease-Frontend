import React from 'react'
import './plantHealth.css';
import {Plantdisease,Plantimg,Plantpest,Planttype } from '../components';
import Sidebar from '../components/Sidebar/Sidebar';

const PlantHealth = () => {
  return (
    <div className='plant-health'>

      <div className='sidebar_health'>
       <Sidebar />
      </div>

      <div className='plantimg'>
        <Plantimg />
      </div>

      <div className='plantdisease'>
        <Plantdisease />
      </div>

      <div className='planttype'>
        <Planttype />
      </div>

      <div className='plantpest'>
   <Plantpest />
      </div>

      
    </div>
  )
}

export default PlantHealth
