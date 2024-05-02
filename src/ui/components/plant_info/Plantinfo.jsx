import React from 'react'
import Axios from 'axios';
import './plantinfo.css'
import { useState } from 'react'

import {MdCloudUpload,MdDelete } from 'react-icons/md'
import {AiFillFileImage } from 'react-icons/ai'


const Plantinfo = () => {
  const [image, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("Please upload an image");



  const url = "";
  const [data, setData] = React.useState({
    plant_name: "",
    plant_family: "",
  });
  function handleChange(e) {
    const newData = { ...data };
    newData[e.target.id] = e.target.value;
    setData(newData);
    console.log(newData);
  }

  function handleApi(e) {
    e.preventDefault();
    Axios.post(url,{
      name:data.plant_name,
      family:data.plant_family,
      image: image,
      image_url: imgUrl,
    })
    .then((res)=>{
      console.log(res);
    })
  }

  return (
    <div className='plant_info_container'>

      <form className='form_plant-info' onSubmit={(e)=>handleApi(e)} >



        <section className='form_plant-img' onClick={() => document.querySelector('.img-input').click()}>
        <input type="file" accept='image/*' name='plantimg' id='plantimg' className='img-input' hidden 
        onChange={({target : {files}})=>{
          files[0] && setImgUrl(files[0].name);
          if(files){
            setImg(URL.createObjectURL(files[0]));
          }
        }}
        />

        {image ?
        <img src={image} className='image' alt={imgUrl}/> 
        :
        <>
        <MdCloudUpload className='upload-icon' color='#2A8316' size={100}/>
        <p>Browse files to upload image</p>
        </>
        }
        </section>

      <section className='uploaded-row'>
        <AiFillFileImage className='image_icon' color='#2A8316' size={40}/>
          {imgUrl}
          <MdDelete className='delete-icon' color='#2A8316' size={40} 
          onClick={()=>{setImg(null); setImgUrl("Please upload an image")}}
          />
      </section>




      <section className='plant_type'>
      <h3>Plant Name</h3>
        <input onChange={(e)=>handleChange(e)} id='plant_name' value={data.name} type="text" placeholder="Enter Plant Name" />
        <h3>Plant Family</h3>
        <input onChange={(e)=>handleChange(e)} id='plant_family' value={data.name} type="text" placeholder="Enter Plant Family" />
     
      </section>
      <button type="submit">Submit</button>
      </form>
    </div>  

  )
}

export default Plantinfo

