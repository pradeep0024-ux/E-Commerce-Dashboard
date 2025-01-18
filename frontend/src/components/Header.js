import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from '../assets/pngwing.com.png'

function NavBar() {
  const navigate = useNavigate();
  const auth = localStorage.getItem('user');

  const LogOut = () =>{
    localStorage.clear();
    navigate('/');
  }

  return (
    <div>
        { auth ? 
          <ul className="nav">
        <img className="logo-style" src={Logo} alt="logo" />
            <li><Link to="/">Products</Link></li> 
            <li><Link to="/add">Add Products</Link></li>
            <li><Link to="/update">Update Products</Link></li>
            <li><Link to="/profile">Profile</Link></li>  
           
        <li><Link onClick={LogOut} to="/logout">LogOut</Link></li>
          <span className="user"> User name({JSON.parse(auth).name}) 
          
          </span>
      
          </ul>
        :
          <ul className="nav nav-right">
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/login">LogIn</Link></li>
          </ul>
        } 
      </div>
  );
}

export default NavBar;
