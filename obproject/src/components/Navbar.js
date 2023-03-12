import React from "react";
import { useRef } from "react";
import{FaBars,FaTimes} from "react-icons/fa";
import "../components/main.css";
import logo from '../images/police.jpeg';
function Navbar(){
    const navRef= useRef();
    const showNavbar=() =>{
        navRef.current.classlist.toggle("responsive_nav");
    }
    return(
      
<header>
       <img src={logo} width={100} height={100} /> 
    <h3>
  
    0B registration
</h3>
<nav>
    <a href="#">Home</a>
     <a href="#">About us</a>
      <a href="#">Administration</a>
       <a href="#">Services</a>
        <a href="#">Contact us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
<FaTimes/>
        </button>
</nav>
<button className="nav-btn" onClick={showNavbar}>
    <FaBars/>
</button>
</header>

    );
}

export default Navbar;