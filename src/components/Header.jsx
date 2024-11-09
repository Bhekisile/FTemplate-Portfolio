import "../styles/Header.scss";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";
import github from "../assets/githu.png";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

const Header = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <nav className="secondary-nav">
      <ul className='nav-left'>
        <NavLink to='/' className={({isActive}) => isActive ? "active" : ""} ><li>Home</li></NavLink>
        <NavLink to='/about'><li>About</li></NavLink>
        <NavLink to='/projects'><li>Recent Work</li></NavLink>
        {/* <NavLink to='skills'><li>Skills</li></NavLink> */}
        <NavLink to='/contact'><li>Contact</li></NavLink>
      </ul>
      <ul className='nav-right'>
        <li><img src={linkedIn} alt="LinkedIn icon" /></li>
        <li><img src={github} className="length" alt="Github icon"></img></li>
        <li><img src={twitter} className="length" alt="Twitter icon" /></li>
      </ul>
    </nav>      
  )
}

export default Header