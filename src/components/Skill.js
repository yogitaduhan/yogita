import React from 'react'
import img from './images/img1.jpg'
import img1 from './images/flutter.jpg'
import img2 from './images/html.jpg'
import img3 from './images/erpnext.jpg'
import img4 from './images/mongo.jpg'
import img5 from './images/ubuntu.jpg'
import img6 from './images/javascript.jpg'
import img7 from './images/reactjs.jpg'
import img8 from './images/img2.jpg'
import img9 from './images/my sql.jpg'
import img10 from './images/aws.jpg'
import img11 from './images/reactjs.jpg'
import img12 from './images/ubuntu.jpg'



function  Skill (){
  return(
    <>
    <div className='row'>
        <div className='skill'><img src={img} height={100} /><br></br>Python</div>
        <div className='skill'><img src={img1} height={100} /><br></br>flutter</div>
        <div className='skill'><img src={img2} height={100} /><br></br>html&css</div>
        <div className='skill'><img src={img3} height={100} /><br></br>erpnext</div>
    </div>
    <div className='row'>
        <div className='skill'><img src={img4} height={100} /><br></br>mongodb</div>
        <div className='skill'><img src={img5} height={100} /><br></br>ubuntu</div>
        <div className='skill'><img src={img6} height={100} /><br></br>javascript</div>
        <div className='skill'><img src={img7} height={100} /><br></br>reactjs</div>
    </div>
    <div className='row'>
        <div className='skill'><img src={img8} height={100} /><br></br>Python</div>
        <div className='skill'><img src={img9} height={100} /><br></br>sql</div>
        <div className='skill'><img src={img10} height={100} /><br></br>aws</div>
    </div>
    <div className='row'>
        <div className='skill'><img src={img11} height={100} /><br></br>reactjs</div>
        <div className='skill'><img src={img12} height={100} /><br></br>ubuntu</div>
        <div className='skill1'>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        <div className='row'>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
            <div className='dots'></div>
        </div>
        </div>
    </div>
    </>
  )
}
export default Skill;