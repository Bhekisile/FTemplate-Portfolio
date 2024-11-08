import Header from "./Header";
import '../styles/About.scss';
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import redux from '../assets/redux.png';
import node from '../assets/nodejs.png';
import express from '../assets/express.png';
import mongo from '../assets/mongodb.png';
import postgres from '../assets/postgresSQL.png';
import ruby from '../assets/ruby.png';
import rails from '../assets/rails.png';
import tailwind from '../assets/tailwind.png';
import bootstrap from '../assets/bootstrap.png';



const About = () => {
  return (
    <>
      <Header />
      <div className="about-container">
        <div className="about-center">
          <h1 className="mt-4">About Me</h1>
          <p>Full-Stack Web Developer, building dynamic and responsive websites since last 2+ years. Focus on delivering high-quality, maintanable and scalable code that meet business needs</p>
        </div>
        <div className="about-skills ">
          <h2>Skills</h2>
          <p>Database Management, Version Control, Command Line Interface (CLI), Git, GitHub, Web Development and API Design, RSpec, Capybara and Selenium</p>
        </div>
        <ul className="technologies">
          <li><img src={html} alt="HTML icon" /> HTML5</li>
          <li><img src={css} alt="CSS icon" /> CSS3</li>
          <li><img src={react} alt="React icon" /> React</li>
          <li><img src={redux} alt="Redux icon" /> Redux</li>
          <li><img src={node} alt="Node icon" /> NodeJS</li>
          <li><img src={mongo} alt="Mongo icon" /> MongoDB</li>
          <li><img src={express} alt="Express icon" /> Express</li>
          <li><img src={ruby} alt="Ruby icon" /> Ruby</li>
          <li><img src={js} alt="JavaScript icon" /> JavaScript</li>
          <li><img src={rails} alt="Ruby on Rails icon" /> Ruby on Rails</li>
          <li><img src={postgres} alt="PostgreSQL icon" /> PostgreSQL</li>
          <li><img src={tailwind} alt="Tailwind icon" /> Tailwind</li>
          <li><img src={bootstrap} alt="Bootstrap icon" /> Bootstrap</li>
        </ul>
          <div className="about-resume">
            <button type="button" className="btn btn--green">Download my resume</button>
          </div>
      </div>
    </>
  )
}

export default About