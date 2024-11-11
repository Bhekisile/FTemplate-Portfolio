import "../styles/Header.scss";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";
import github1 from "../assets/github.png";
import { NavLink } from "react-router-dom";
// import { useState } from "react";

const Header = () => {
  // const [isActive, setIsActive] = useState(false);

  return (
    <nav className="secondary-nav">
      <ul className='nav-left'>
        <li><NavLink to='/' className={({isActive}) => isActive ? "active" : ""} >Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/projects'>Recent Work</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
      <ul className='nav-right'>
        <li>
          <a
            href="https://www.linkedin.com/in/bhekisile-jozi/"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedIn} className="length social-padding" alt="LinkedIn icon" />
          </a>
        </li>
        <li>
          <a
            href="https://x.com/Bhekisile750473"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} className="length" alt="Twitter icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Bhekisile"
            className="social-icon"
            target="_blank"
            rel="noreferrer"
          >
            <img src={github1} className="length social" alt="Github icon" />
          </a>
        </li>
      </ul>
    </nav>   
  )
}

export default Header