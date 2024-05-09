import React from 'react'
 import img from './images/img2.jpg'
function  Navbar () {
  return (
    <>
    <div className='navb'>
         <img src={img} width={80}  height={50} className='logo' /> 
          <div className='outer'>
          <div className='menu'>About</div>
          <div className='menu1'>Portfolio</div>
          <div className='menu1'>Contact</div>
        </div>
        <input type='input' className='search' placeholder='Search'/>
      </div>
    
    </>
  )
}
 export default Navbar;