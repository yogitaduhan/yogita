import React from 'react'
import imga from './images/bulding1.jpg'
import imgb from './images/bulding2.jpg'
import imgc from './images/building3.jpg'
export const Portfolio = () => {
  return (
    <>
     <div>Portfolio</div>
    <div className='row1'>
    <div className='photo'><img src={imga} height={200}  width={300} /><br></br></div>
        <div className='photo'><img src={imgb} height={200} width={300}/><br></br></div>
        <div className='photo'><img src={imgc} height={200} width={300}/><br></br></div>
 
    </div>
    <div className='row1'>
    <div className='photo'><img src={imgc} height={200} width={300}/><br></br></div>
        <div className='photo'><img src={imgb} height={200} width={300}/><br></br></div>
        
        <div className='photo'><img src={imga} height={200} width={300}/><br></br></div>
 
    </div>
    <div className='button'>View More</div>
   
    </>
   
  )
}
