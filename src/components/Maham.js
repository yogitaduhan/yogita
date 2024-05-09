import React from 'react'
import imgm from './images/m.jpg'
import imgv from './images/msg.jpg'
export const Maham = () => {
  return (
    <>
    <div className='mm'>
    <div className='cont'>
     <div className='m'><img src={imgm} height={80} /><br></br></div>
    <div className='s'>Maham s.</div>
   <p>karachi,pakisthan</p>
    </div>
    <div><button className='button'>Follow</button></div>
    <div><button className='butn'><img src={imgv} height={20}></img>Hire</button></div>
    </div>
    </>
  )
}
