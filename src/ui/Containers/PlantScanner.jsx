import React from 'react'
import './plantscanner.css';
import {Plantdisease,Plantpest, Plantinfo } from '../components';


const PlantScanner = () => {
  return (
    <div className='plant_scanner_container'>

<div className="plantinfo">
        <Plantinfo />
      </div>

      <div className='plantdisease'>
        <Plantdisease />
      </div>

      <div className='plantpest'>
        <Plantpest />
      </div>

     
      
    </div>
  )
}

export default PlantScanner
