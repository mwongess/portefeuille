import { projects } from "../../data/data";
import './ProjectsStyles.css'

export const Projects = () => {
  return (
    <>
      <div className="projects" id="projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <div className="project-image">
              <img src={project.imageUrl} alt="" />
            </div>
            <div className="project-text">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <a href={project.website}><button className="learn-more">Learn More</button></a>
            </div>

          </div>
        ))}
      </div>
    </>
  );
};
