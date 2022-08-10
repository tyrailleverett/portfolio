import type { NextPage } from "next";
import Head from "next/head";
import AboutSection from "../components/aboutsection/AboutSection";
import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import ProjectSection from "../components/projectsection/ProjectSection";
import SkillSection from "../components/skillsection/SkillSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Tyrail Leverett</title>
      </Head>

      <main>
        <NavBar />
        <Hero />
        <SkillSection />
        <ProjectSection />
        <AboutSection />
      </main>
    </>
  );
};

export default Home;
