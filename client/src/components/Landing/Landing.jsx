import LandingStyles from "./LandingStyles.module.css";
export const Landing = () => {
  return (
    <>
      <div className={LandingStyles.landing}>
        <h1>Amos Mwongela</h1>
        <h3>A Versatile Full Stack Software Engineer✅</h3>
        <p>
          I possesses a comprehensive understanding of both frontend and backend
          development.
        </p>
        <p>My proficiency in Angular,React, Vue & SvelteKit</p>
        <p>
          {" "}
          allows me to craft visually stunning and user-friendly interfaces that
          captivate audiences.
        </p>
        <p>
          On the backend, I am well-versed with languages such as NodeJs and
          NestJs, enabling me to build robust and{" "}
        </p>
        <p>scalable server-side applications.</p>
        <div className={LandingStyles.buttons}>
          <button className={LandingStyles.linkedin}>| LinkedIn</button>
          <button className={LandingStyles.github}>| Github</button>
        </div>
      </div>
    </>
  );
};
