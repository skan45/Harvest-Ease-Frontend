import React from 'react'
import { useState } from 'react'
import {MdCloudUpload,MdDelete } from 'react-icons/md'
import {AiFillFileImage } from 'react-icons/ai'
import './plantimg.css'

const Plantimg = () => {
  const [image, setImg] = useState(null);
  const [imgUrl, setImgUrl] = useState("Please upload an image");
  function handleApi(){
    console.log('Api called');
  }
  return (
    <main>
      <form action="" onClick={() => document.querySelector('.img-input').click()}>
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
        <MdCloudUpload className='upload-icon' color='#2A8316' size={60}/>
        <p>Browse files to upload image</p>
        </>
        }
      </form>
      <section className='uploaded-row'>
        <span>
        <AiFillFileImage className='icon' color='#2A8316' size={20}/>
        <button onClick={handleApi}>Scan</button>  
        </span>
        
        <span className='delete-url'>
          {imgUrl}
          <MdDelete className='delete-icon' color='#2A8316' size={20} 
          onClick={()=>{setImg(null); setImgUrl("Please upload an image")}}
          />
        </span>
      </section>
    </main>
  )
}

export default Plantimg
