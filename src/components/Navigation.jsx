import { Link } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <div className="container-fluid container">
      <div className="container__logo">
        <Link to="/"><li className="container__logo--green">BJ</li></Link>
      </div>
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        <div className="navigation__background"></div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><Link to='/' className="navigation__link">Home</Link></li>
            <li className="navigation__item"><Link to='/about' className="navigation__link">About</Link></li>
            <li className="navigation__item"><Link to='/projects' className="navigation__link">Recent Projects</Link></li>
            <li className="navigation__item"><Link to='/contact' className="navigation__link">Contact</Link></li>
          </ul>
        </nav> 
      </div>
    </div>
  )
}

export default Navigation