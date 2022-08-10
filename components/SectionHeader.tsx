interface SectionHeaderProps {
  title: string;
}

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return (
    <div className="relative py-4">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-2/3 border-b sm:w-1/2 border-accent"></div>
      </div>
      <div className="relative flex justify-center">
        <span className="px-4 text-2xl font-bold bg-base-100 lg:text-5xl">
          {title}
        </span>
      </div>
    </div>
  );
};

export default SectionHeader;
