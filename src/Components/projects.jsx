import { useRef } from "react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

const projects = [
  {
    title: "Banking API",
    tech: "Node.js, AWS, DynamoDB"
  },
  {
    title: "E-Commerce App",
    tech: "React, Redux"
  }
];

const Projects = () => {
  const ref = useRef();
  useScrollAnimation(ref);

  return (
    <div ref={ref} className="projects hidden">
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index} className="card">
          <h3>{project.title}</h3>
          <p>{project.tech}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
