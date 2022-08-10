interface TagProps {
  tag: string;
}

const Tag = ({ tag }: TagProps) => {
  return (
    <li className=" p-1 bg-base-300 rounded text-xs font-medium">{tag}</li>
  );
};

export default Tag;
