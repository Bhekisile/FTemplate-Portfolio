import { NavLink } from "react-router-dom";
import "../styles/Navigation.scss";

const Navigation = () => {
  return (
    <>
    <div className="logo">
      <li className="logo__white">BJ</li>
    </div>
    <nav className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle"></input>

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background"></div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item"><NavLink to='/' className="navigation__link">Home</NavLink></li>
          <li className="navigation__item"><NavLink to='/about' className="navigation__link">About</NavLink></li>
          <li className="navigation__item"><NavLink to='/projects' className="navigation__link">Recent Projects</NavLink></li>
          <li className="navigation__item"><NavLink to='/contact' className="navigation__link">Contact</NavLink></li>
        </ul>
      </nav> 
    </nav>
    </>
  )
}

export default Navigation