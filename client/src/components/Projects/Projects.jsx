import { projects } from "../../data/data";
import './ProjectsStyles.css'

export const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} alt="" />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </>
  );
};
