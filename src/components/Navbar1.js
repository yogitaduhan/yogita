import React from 'react'
// import { CiSearch } from "react-icons/ci";
export const Navbar = () => {
  return (
    <>
   <nav className='main'>
    <div className='navbar'>
    <div class="first"><a href="first" target="_blank">NAVBAR</a></div>
    <div class="first"><a href="first" target="_blank">HOME</a></div>
    <div class="first"><a href="first" target="_blank">MENU</a></div>
    <div class="first"><a href="first" target="_blank">ABOUT</a></div>
    <div class="first"><a href="first" target="_blank">LINK</a></div>
    <div class="first"><a href="first" target="_blank">CONTACT</a></div>
    <div class="second" aria-placeholder='search'>
     {/* <img src='src/components/React icons search results_files'></img>
     <CiSearch />  */}
    </div>
   </div>
   </nav>
<section  className='paragraph'>
<p >WELCOME TO</p>
    <p ><b>REACTJS</b></p>
</section>
    
    
  
    </>
   
  )
}
