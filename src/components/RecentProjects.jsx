import Header from "./Header";
import "../styles/RecentProjects.scss";
import projectsData from "../assets/projectsData";
import { Card, Col, Row } from "react-bootstrap";
import { useState } from "react";

const RecentProjects = () => {
  const [expandedCards, setExpandedCards] = useState(Array(projectsData.length).fill(false));

  const toggleExpand = (index) => {
    setExpandedCards((prev) => {
      const updatedExpandedCards = [...prev];
      updatedExpandedCards[index] = !updatedExpandedCards[index];
      return updatedExpandedCards;
    });
  };

  return (
    <div className="project-container">
      <Header />
      <div className="project-width">
        <h1 className="text-center">Recent Projects</h1>
        <div className="my-4 text-center">Here are some of my recent projects</div>
          <Row>
            {projectsData.map((project, index) => (
              <Col key={index} md={6} sm={12} lg={6} xl={6}>
              <Card className="project-card">
                <Card.Img src={project.imageUrl} alt={project.projectName} className="project-card__image" />
                <Card.Body className="project-card__details">
                  <Card.Title as="h2" >{project.projectName}</Card.Title>
                  <Card.Text as="div" className="mt-2">
                    {expandedCards[index] ? project.projectDescription : `${project.projectDescription.substring(0, 150)}...`}
                    <button className="btn btn-show" onClick={() => toggleExpand(index)}>{expandedCards[index] ? "Show Less" : "Show More"}</button>
                  </Card.Text>
                  <Card.Text as="div" className="project-card__links">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noreferrer"
                      type="button"
                      className="btn btn--small-green"
                    >
                      View Project
                    </a>
                    <span className="">
                      <a
                        href={project.linkSource}
                        target="_blank"
                        rel="noreferrer"
                        type="button"
                        className="btn btn--small-green"
                      >
                        View Source
                      </a>
                    </span>
                  </Card.Text>
                </Card.Body>
              </Card>
              </Col>
              ))}
          </Row>
      </div>
    </div>
  );
};

export default RecentProjects;
