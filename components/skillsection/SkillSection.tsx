import skills from "../../utils/MySkills";
import SectionHeader from "../SectionHeader";
import SkillBox from "./SkillBox";

const SkillSection = () => {
  return (
    <section id="skills_container" className="container pb-6 mx-auto sm:pb-16">
      <SectionHeader title={"Skills"} />
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {skills.map((skill) => (
          <SkillBox key={skill.title} skill={skill} />
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
