import React, { useContext, useEffect, useState} from 'react';
import {AuthContext} from './usecontext/Authcontext';
import { useNavigate } from 'react-router-dom';
import './App.css'
import cafeinn from './image/cafeinn.jpg';
import hand from './image/Hand.png';
function Login() {
  const [show, setShow] = useState(true)
  
  const [username, setUserName]=useState('')
  const navigate=useNavigate()
  const auth=useContext(AuthContext);
  console.log(auth)
 

  useEffect(()=>{
    let arr=[];
    if(username==='')
    {arr.push('username')
      setShow(true)
    }else{
      setShow(false)
    }

 }, [username])
  

  const handlerSubmit=(e)=>{
      e.preventDefault()
      auth.login(username)
      navigate("/home")  
  }

  return (
    <div className='bodies'>
      <img src={cafeinn} alt="cafeinn"/>
  <div className='textcontein'>
    <h1>Hello <img src={hand} alt='hand'/> I'm</h1>
    <div className='animation'>
    <div className='first'>Giorgi Dididze</div>
    <div className='second'>Web Developer</div>
    <div className='third'>WordPress Developer</div>
    </div>
    </div>
    <div className='login-form'>
      <form action="#" className='formin' onSubmit={handlerSubmit}>
        <h1>New User</h1>
      <label htmlFor='text'>Name</label>
        <input type="text" id='text' onChange={(e)=> setUserName(e.currentTarget.value)} /><br/>
        <label htmlFor='number'>Mobile</label>
        <input type='number' id='number' /><br/>
        <button type='submit' className='button-container' disabled={show} >Create</button>
      </form>
    </div>
    </div>

  )
}

export default Login