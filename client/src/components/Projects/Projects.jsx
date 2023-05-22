export const Projects = ({ projects }) => {
  return (
    <>
      <div>
        {projects.map((project, index) => (
          <div key={index} className="project">
            <img src={project.imageUrl} alt="" />
            <h3></h3>
            <p></p>
            <button className="learn-more">Learn More</button>
          </div>
        ))}
      </div>
    </>
  );
};
