import React, { useContext } from 'react';
import imige from '../image/coffeehouse.jpg';
import Clock from 'react-simple-clock';
import {AuthContext} from '../usecontext/Authcontext';
import coffecup from '../image/coffee-icon.png';

function Home() {
  const MyApp = () => <Clock live={true} hourMarkFormat="number" className="your-class" mode="dark" />
  const auth=useContext(AuthContext);
  return (   
     <header className="header">
     {<MyApp/>}
     <div className='texting'> 
        Hello {auth.user} Welcome to Cafe <img src={coffecup} alt='cups' style={{width:"40px", height:"40px"}}/>
        </div>
   <img src={imige} alt="coffeehouse"/>
   
  <div className="heading-text">
    <div className="open-tag">Open from 6am to 5pm</div>
    <div className="text-name" style={{fontSize: 90}}>The<br/>Cafe</div>
    <div className="adres-text">15 Adr street, 5015</div>
  </div>
</header>

  )
}

export default Home
