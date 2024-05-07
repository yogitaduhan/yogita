import React from 'react'
import imga from './images/bulding1.jpg'
import imgb from './images/bulding2.jpg'
import imgc from './images/building3.jpg'
export const Portfolio = () => {
  return (
    <>
     <div>Portfolio</div>
    <div className='row1'>
    <div className='photo'><img src={imga} height={60} /><br></br></div>
        <div className='photo'><img src={imgb} height={60} /><br></br></div>
        <div className='photo'><img src={imgc} height={60} /><br></br></div>
 
    </div>
    <div className='row1'>
    <div className='photo'><img src={imga} height={60} /><br></br>bu</div>
        <div className='photo'><img src={imgb} height={60} /><br></br>building</div>
        <div className='photo'><img src={imgc} height={60} /><br></br>building</div>
 
    </div>
   
    </>
   
  )
}
