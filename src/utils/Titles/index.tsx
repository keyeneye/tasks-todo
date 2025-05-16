import { TitlesProps } from "../../interfaces";

const Titles = ({ title }: TitlesProps) => {
  return (
    <div className="flex justify-center">
      <h1 className="font-black text-lg">{title}</h1>
    </div>
  );
};

export default Titles;
