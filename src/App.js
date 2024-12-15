import './App.css';

import Routers from './Routers';

import { AuthContext } from './usecontext/Authcontext';
import { useContext } from "react";
import { NavLink } from "react-router-dom";


function App() {
  const auth = useContext(AuthContext);
  return (
   <div className='mono'>
      {!auth.user ?
       
       <NavLink to="/Cafe" className="login">Login</NavLink>
       :
      <div className="home-top">
      <div className="head">
      <div className="but-menu">
      <NavLink to='/home' className="but-navig"> Home </NavLink>
      </div>
      <div className="but-menu">
       <NavLink to='/About' className="but-navig"> About </NavLink>
        </div>
        <div className="but-menu">
        <NavLink to='/Menu' className="but-navig"> Menu </NavLink>
        </div>
        <div className="but-menu">
        <NavLink to='/Where' className="but-navig"> Where </NavLink>
        </div>
        <div className="but-menu">
        <NavLink to='/Comment' className="but-navig"> Comment </NavLink>
        </div>
           </div>
        </div>
        
        }
 
    <Routers/>
    </div>
  );
}

export default App;
