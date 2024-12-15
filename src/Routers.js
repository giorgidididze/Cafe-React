import React from 'react';
import {Route, Routes} from 'react-router-dom'
import About from './Pages/About';
import Menu from './Pages/Menu';
import Where from './Pages/Where';
import Comment from './Pages/Comment';
import Login from './Login';
import Eroor from './Pages/Eroor';
import Home from './Pages/Home';
function Routers() {
  return (
    <>
    <Routes>
        <Route path='/Cafe' element={<Login/>} ></Route>
        <Route path='/home' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} ></Route>
        <Route path='/Menu' element={<Menu/>} ></Route>
        <Route path='/Where' element={<Where/>} ></Route>
        <Route path='/Comment' element={<Comment/>} ></Route>
        <Route path='*' element={<Eroor/>} ></Route>
    </Routes>
    </>
  )
}

export default Routers