import SectionHeader from "../SectionHeader";

const AboutSection = () => {
  return (
    <section id="about_container" className="pb-20 mx-auto mt-10 max-w-7xl">
      <SectionHeader title="About" />
      <div className="flex flex-col gap-6 mt-5 sm:mt-10 sm:mx-auto sm:w-1/2">
        <p className="px-5 sm:px-0">
          Hello! My name is Tyrail Leverett and I am a Help Desk Specialist
          turned into a Full-Stack Software Engineer. I enjoy programming the
          Front-End just as much as I do the Back-End so I opted to become a
          Full-Stack Software Engineer.
        </p>
        <p className="px-5 sm:px-0">
          Currently, my go-to tech stack for implementing a web application is
          ReactJS/NextJS for the frontend, NodeJS w/ Express (if I am not using
          NextJS) for the backend, PostgreSQL for the database, and Prisma for
          the ORM to connect to the database. I also use Typescripts in my
          projects as it makes development life easier in the long run. I then
          bring all of it together using Jest and Playwright for TDD.
        </p>

        <a
          className="self-center"
          href="/static/Tyrail_Leverett_Resume.pdf"
          rel="noopener noreferrer"
          target="_blank"
        >
          <button className="btn btn-accent">Resume</button>
        </a>
      </div>
    </section>
  );
};

export default AboutSection;
