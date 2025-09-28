import "../styles/HomePage.scss";
import Navigation from "./Navigation";
import Footer from "./Footer";
import cartoon from "../assets/lady-cartoon.jpeg";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navigation />
      <motion.div	
				initial={{ opacity: 0, scale: 0 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1.2 }} 
        className="flex"
      >
        <div className="flex__left">
          <div className="flex__left--details">
            <h1 className="flex__left--details-primary">
              <span className="flex__left--details-primary-main">Hello, I'm </span> 
              <span className="flex__left--details-primary-sub">Bhekisile Jozi</span>
            </h1>
            <p>I can help you build a website. Look through some of my work and experience! If you like what you see and have a project you need coded,
              don&apos;t hesitate to contact me.</p>
              <button type="button" 
                onClick={() => {
                  navigate("/about");
                }} 
                className="flex__btn flex__btn--green">
                   Know more about me
              </button>
          </div>
        </div>
          <div className="flex__right">
            <img src={cartoon} className="flex__right--picture" alt="Lady cartoon" />
          </div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default HomePage