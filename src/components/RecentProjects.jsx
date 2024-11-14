// import Header from "./Header";
import "../styles/RecentProjects.scss";
import { lazy, Suspense } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

const Projects = lazy(() => 
  import("./Projects"));

const RecentProjects = () => {
  return (
    <div className="project-container">
      <Navigation />
      <div className="project-width">
        <h1 className="text-center">Recent Projects</h1>
        <div className="my-4 text-center">Here are some of my recent projects</div>
          <Suspense fallback={<div>Loading...</div>}>
            <Projects />
          </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default RecentProjects;
