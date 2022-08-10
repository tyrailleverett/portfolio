interface SkillImageProps {
  skillName: string;
}

const SkillImage = ({ skillName }: SkillImageProps) => {
  const getTooltipName = (skill: string): string => {
    let skillName = skill.split("-")[1];
    return skillName.charAt(0).toUpperCase() + skillName.slice(1);
  };

  const toolTipName = getTooltipName(skillName);
  return (
    <li
      className="transition-all hover:-translate-y-2 tooltip"
      data-tip={toolTipName}
    >
      <i className={`${skillName} colored text-4xl sm:text-6xl`} />
    </li>
  );
};

export default SkillImage;
