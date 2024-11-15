import "../styles/HomePage.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";
import cartoon from "../assets/lady-cartoon.jpeg";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-container">
          <Navigation />
      <div className="flex-container">
        <div className="flex-left">
          <div className="flex-left__details">
            <h1 className="flex-left__details-primary">
              <span className="flex-left__details-primary--main">Hello, I'm </span> 
              <span className="flex-left__details-primary--sub">Bhekisile Jozi</span>
            </h1>
            <p>I can help you build a website. Look through some of my work and experience! If you like what you see and have a project you need coded,
              don&apos;t hesitate to contact me.</p>
              <Link to="/about">
                <button type="button" className="btn btn--green">
                  Know more about me
                </button>
              </Link>
          </div>
        </div>
        <div className="flex-right">
          <img src={cartoon} className="flex-right__picture" alt="Lady cartoon" />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HomePage