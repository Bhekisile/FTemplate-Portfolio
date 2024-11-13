import Header from "./Header";
import "../styles/RecentProjects.scss";
import { lazy, Suspense } from "react";

const Projects = lazy(() => 
  import("./Projects"));

const RecentProjects = () => {
  
  return (
    <div className="project-container">
      <Header />
      <div className="project-width">
        <h1 className="text-center">Recent Projects</h1>
        <div className="my-4 text-center">Here are some of my recent projects</div>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
      </div>
    </div>
  );
};

export default RecentProjects;
