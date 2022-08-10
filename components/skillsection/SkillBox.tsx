import SkillImage from "./SkillImage";

interface SkillBoxProps {
  skill: {
    title: string;
    technologies: string[];
  };
}

const SkillBox = ({ skill }: SkillBoxProps) => {
  return (
    <div className="mt-5 shadow sm:mt-10">
      <h3 className="my-2 text-2xl font-bold text-center sm:my-0">
        {skill.title}
      </h3>
      <ul className="flex justify-center gap-5 p-10">
        {skill.technologies.map((technology) => {
          return <SkillImage key={technology} skillName={technology} />;
        })}
      </ul>
    </div>
  );
};

export default SkillBox;
