import React from 'react'
import './banner.css'


function Banner() {
  return (
    <div className='banner'> <img className='bannerimg' src={require('../../assets/Group 2025.png')} alt="name" />
      <div className='content'>
        <div className='title'> <img className='image' src={require('../../assets/Name.png')} alt="name" />  </div>
       <br /><br />
      </div>
      <button className='button-Book'>Book Now</button>
      <button className='button-Trailer'>Trailer</button>
    </div>
  )
}

export default Banner
