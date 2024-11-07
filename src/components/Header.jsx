import "../styles/Header.scss";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";
import github from "../assets/githu.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="secondary-nav">
      <ul className='nav-left'>
        <Link to='/' ><li>Home</li></Link>
        <Link to='/about'><li>About</li></Link>
        <Link to='/projects'><li>Recent Work</li></Link>
        <Link to='skills'><li>Skills</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
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