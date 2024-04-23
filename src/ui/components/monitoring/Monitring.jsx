import React from 'react'
import './monitring.css'
import potatoimg from "C:/Users/amine/OneDrive/Bureau/github/Harvest-Ease-Frontend/src/assets/potatos.jpg"; 
import gingerimg from "C:/Users/amine/OneDrive/Bureau/github/Harvest-Ease-Frontend/src/assets/ginger.jpg";
import tomatoimg from "C:/Users/amine/OneDrive/Bureau/github/Harvest-Ease-Frontend/src/assets/tomatos.jpg";
import onionimg from "C:/Users/amine/OneDrive/Bureau/github/Harvest-Ease-Frontend/src/assets/onions.jpg";

const Monitring = () => {
  return (
    <div className='monitoring-container'>
      <h1>Monitoring</h1>
      <ul>
        <li>
          <img src={potatoimg} alt="potatos" />
          <div>
            <p className='Name'>Potatos</p>
            <p>60Q/Ha</p>
            <p>3Ha</p>
          </div>
        </li>
        <li>
          <img src={gingerimg} alt="Ginger" />
          <div>
          <p className='Name'>Ginger</p>
            <p>60Q/Ha</p>
            <p>3Ha</p>
          </div>
        </li>
        <li>
          <img src={tomatoimg} alt="Tomatos" />
          <div>
          <p className='Name'>Tomatos</p>
            <p>60Q/Ha</p>
            <p>3Ha</p>
          </div>
        </li>
        <li>
          <img src={onionimg} alt="Onion" />
          <div>
          <p className='Name'>Onion</p>
            <p>60Q/Ha</p>
            <p>3Ha</p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default Monitring
