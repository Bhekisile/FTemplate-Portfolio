import "../styles/Footer.scss";
import linkedIn from "../assets/linkedIn.png";
import twitter from "../assets/twitter.png";
import github1 from "../assets/github.png";

function Footer () {
  return (
    <footer className="footer">
      <div className="footer__left">Copyright &copy; B Jozi</div>
      <ul className='footer__right'>
          <li>
            <a
              href="https://www.linkedin.com/in/bhekisile-jozi/"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={linkedIn} className="footer__right--length footer__right--social" alt="LinkedIn icon" />
            </a>
          </li>
          <li>
            <a
              href="https://x.com/Bhekisile750473"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} className="footer__right--social" alt="Twitter icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/Bhekisile"
              className="social-icon"
              target="_blank"
              rel="noreferrer"
            >
              <img src={github1} className="footer__right--length footer__right--social" alt="Github icon" />
            </a>
          </li>
        </ul>
    </footer>
  )
}

export default Footer