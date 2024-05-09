import React from 'react'
import img1 from './images/ui.jpg'
import img2 from './images/web.jpg'
import img3 from './images/design.gif'

export const Tool = () => {
  return (
    <>
    <div className='t'>
    <div className='tool'>Tool</div>
    <div className='figma'>Figma</div>
    <div className='cr'>CREATIVE FIELDS</div>
    <div className='cont'>
    <div className='ui'><img src={img1} height={100} width={300}/><br></br>UI/UX</div>
        <div className='ui'><img src={img2} height={100} width={300}/><br></br>Web Design</div></div>
        <div className='desgn'><img src={img3} height={100} width={300}/><br></br>interaction design</div></div>
    </>
  )
}
