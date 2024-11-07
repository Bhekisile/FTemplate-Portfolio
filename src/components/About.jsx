import Header from "./Header";
import '../styles/About.scss';

const About = () => {
  return (
    <>
      <Header />
        <div className="about-center">
          <h1>About Me</h1>
          <p>Full-Stack Web Developer, building dynamic and responsive websites since last 2+ years. Focus on delivering high-quality, maintanable and scalable code that meet business needs</p>
        </div>
        <div className="about-skills">
          <h2>Skills</h2>
          <p>Database Management, Version Control, Command Line Interface (CLI), Web Development and API Design, RSpec, Capybara and Selenium</p>
        </div>
          
          <button>Download my resume</button>

    </>
  )
}

export default About