import React, { useState } from 'react'
import './Paint.css'
import { RandomImages } from '../../RandomImages/RandomImages'
import imageOne from '../../../assets/Images/01.jpg'

export const Paint = () => {

  const [image,setImage]=useState(imageOne);

  const randomNumber = (min,max) => Math.random() * (max - min) + min


  const handleImages = () => {    

      setImage()
  }



  return (
    <div className='paint'>
      <img src={image} alt="" />
      <button className='btnPictures' onClick={handleImages}>Imagen aleatoria</button>
    </div>
  )
}
