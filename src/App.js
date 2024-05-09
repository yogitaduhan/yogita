

// import logo from './logo.svg';
import './App.css';

import  Navbar  from './components/Navbar'
 import  {Portfolio}  from './components/Portfolio';
 import  Skill  from './components/Skill'
 import  {Experience}  from './components/Experience';
import {Copy} from './components/Copy';
import {Maham} from './components/Maham';
import {Tool} from './components/Tool';
import {Report} from './components/Report';

export const App = () => {
  return (
    <>
    
      <div className="header">
        <Navbar />
        <div className='intro'>
          <p>I'M <span className='name'>Ivan Dan</span><br/>
            <span>Python Developer & ERPNext <br />Consultant</span></p>
           <button className='bot'>contact me</button>
           
        </div>
      </div>
      <div className='about'>
        <span className='about'>About</span>
        <p className='about'><hr/>I have acquired and sharpened m ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, aliquam nam, impedit aspernatur nesciunt autem sequi perferendis, hic quis iure provident nostrum? Quae, alias at ipsum enim ullam officia.
        ipsum dolor sit amet consectetur adipisicing elit. Incidunt fugit, aliquam nam, impedit aspernatur nesciunt autem sequi perferendis, hic quis iure provident nostrum? Quae, alias at ipsum enim ullam officia.
        </p>
        <div className='sk'>
          <p className='sk'>My Skills</p>
          <Skill/>
        </div>
        <div className='port'>
          <Portfolio/>
        </div>
        <div>
   <Experience/>
   </div>
   <div>
    <Copy/>
   </div>
   <div>
    <Maham/>
   </div>
   <div>
      <Tool/>
     </div>
     <div>
      <Report/>
     </div>
     </div>
    
    
    </>

 );
}

export default App;
