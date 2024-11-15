// import "../styles/Header.scss";
// import linkedIn from "../assets/linkedIn.png";
// import twitter from "../assets/twitter.png";
// import github1 from "../assets/github.png";
// import { NavLink } from "react-router-dom";
// import Navigation from "./Navigation";

// const Header = () => {

//   return (
//     <>
//       <Navigation className="land" />
//       <nav className="navigation">
//         <ul className='navigation__left'>
//           <li><NavLink to='/' className={({isActive}) => isActive ? "navigation__left--active" : ""}>Home</NavLink></li>
//           <li><NavLink to='/about' className={({isActive}) => isActive ? "navigation__left--active" : ""}>About</NavLink></li>
//           <li><NavLink to='/projects' className={({isActive}) => isActive ? "navigation__left--active" : ""}>Recent Projects</NavLink></li>
//           <li><NavLink to='/contact' className={({isActive}) => isActive ? "navigation__left--active" : ""}>Contact</NavLink></li>
//         </ul>
//         <ul className='navigation__right'>
//           <li>
//             <a
//               href="https://www.linkedin.com/in/bhekisile-jozi/"
//               className="social-icon"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <img src={linkedIn} className="navigation__right--length navigation__right--social" alt="LinkedIn icon" />
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://x.com/Bhekisile750473"
//               className="social-icon"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <img src={twitter} className="navigation__right--social" alt="Twitter icon" />
//             </a>
//           </li>
//           <li>
//             <a
//               href="https://github.com/Bhekisile"
//               className="social-icon"
//               target="_blank"
//               rel="noreferrer"
//             >
//               <img src={github1} className="navigation__right--length navigation__right--social" alt="Github icon" />
//             </a>
//           </li>
//         </ul>
//       </nav> 
//     </>  
//   )
// }

// export default Header