import "../styles/RecentProjects.scss";
import projectsData from "../assets/projectsData";
import { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

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
      <Row className="g-4">
          {projectsData.map((project, index) => (
          <Col sm={12} md={12} lg={6} xl={6}>
          <Card key={index} className="card-content">
            <Card.Text as="div" className="">
              <a
                href={project.projectUrl}
                className="project-card__external-link"
                target="_blank"
                rel="noreferrer"
              >
                <Card.Img src={project.imageUrl} alt={project.projectName} className="card-content__image" />
              </a>

              <div className="card-content__heading">
                <Card.Text as="h2" className="">
                  {project.projectName}
                </Card.Text>
                <Card.Text as="div" className="card-content__description">
                {expandedCards[index] ? project.projectDescription : `${project.projectDescription.substring(0, 160)}...`}
                <button className="btn btn-show" onClick={() => toggleExpand(index)}>{expandedCards[index] ? "Show Less" : "Show More"}</button>
                </Card.Text>
                <Card.Text as="div" className="card-content__links">
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
                </Card.Text>
              </div>
            </Card.Text>
          </Card>
          </Col>
          ))}
      </Row>
    </div>
  )
}

export default Projects