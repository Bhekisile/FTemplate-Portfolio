import "../styles/Header.scss";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";
import github from "../assets/githu.png";

const Header = () => {
  return (
    <div className='container container-fluid'>
      <nav className="secondary-nav">
        <ul className='nav-left'>
          <li>Home</li>
          <li>About</li>
          <li>Recent Work</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
        <ul className='nav-right'>
          <li><img src={linkedIn} alt="LinkedIn icon" /></li>
          <li><img src={github} className="length" alt="Github icon"></img></li>
          <li><img src={twitter} className="length" alt="Twitter icon" /></li>
        </ul>
      </nav>
      
    </div>
  )
}

export default Header