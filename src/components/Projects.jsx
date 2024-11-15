import "../styles/RecentProjects.scss";
import projectsData from "../assets/projectsData";
import { useState } from "react";

const Projects = () => {
  const [expandedCards, setExpandedCards] = useState(Array(projectsData.length).fill(false));

  const toggleExpand = (index) => {
    setExpandedCards((prev) => {
      const updatedExpandedCards = [...prev];
      updatedExpandedCards[index] = !updatedExpandedCards[index];
      return updatedExpandedCards;
    });
  };

  return (
    <div className="project-card">
          {projectsData.map((project, index) => (
          <div key={index} className="card-content">
            <div className="">
              <a
                href={project.projectUrl}
                className="project-card__external-link"
                target="_blank"
                rel="noreferrer"
              >
                <img src={project.imageUrl} alt={project.projectName} className="card-content__image" />
              </a>

              <div className="card-content__heading">
                <h2 className="">
                  {project.projectName}
                </h2>
                <div className="card-content__description">
                {expandedCards[index] ? project.projectDescription : `${project.projectDescription.substring(0, 160)}...`}
                <button className="btn btn-show" onClick={() => toggleExpand(index)}>{expandedCards[index] ? "Show Less" : "Show More"}</button>
                </div>
                <div className="card-content__links">
                  <a
                    href={project.projectUrl}
                    className="card-content__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View live
                  </a>
                  <a
                    href={project.linkSource}
                    className="card-content__link"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source
                  </a>
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
  )
}

export default Projects