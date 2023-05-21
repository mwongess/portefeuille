import "./LandingStyles.css";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
export const Landing = () => {
  return (
    <>
      <div className="landing">
        <h1>Amos Mwongela</h1>
        <h3>Software Engineer | Data Scientist</h3>
        {/* <p>
          I possess a comprehensive understanding of both frontend and backend
          development.
        </p>
        <p>My proficiency in Angular,React, Vue & SvelteKit</p>
        <p>
          allows me to craft visually stunning and user-friendly interfaces that
          captivate audiences.
        </p>
        <p>
          On the backend, I am well-versed with languages such as NodeJs and
          NestJs, enabling me to build robust and{" "}
        </p>
        <p>scalable server-side applications.</p> */}

        <p>
        Are you looking for a skilled and versatile full stack developer to bring your digital projects to life?.Look no further than me.
        </p>
        <p> With a passion for coding and a talent for creating innovative solutions, Im your go-to professional when it comes to web and software development.</p>
        {/* <p>
          My proficiency in Angular,React, Vue & SvelteKit allows me to craft
          visually stunning and user-friendly interfaces that captivate
          audiences.
        </p>
        <p>
          On the backend, I am well-versed with languages such as NodeJs and
          NestJs, enabling me to build robust and scalable server-side
          applications.
        </p> */}
        <div className="buttons">
          <button className="linkedin">
            <a href="https://www.linkedin.com/in/mwongess" target="_blank">
              <FaLinkedinIn />
              <span>LinkedIn</span>
            </a>
          </button>
          <button className="github">
            <a href="https://github.com/mwongess" target="_blank">
              <FaGithub />
              <span>Github</span>
            </a>
          </button>
        </div>
      </div>
    </>
  );
};
