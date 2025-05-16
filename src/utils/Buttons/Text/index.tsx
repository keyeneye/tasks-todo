import { ButtonProps } from "../../../types/Button";

const TextButton = ({ buttonText, onClick, type = "button" }: ButtonProps) => (
  <button
    className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded"
    onClick={onClick}
    type={type}
  >
    {buttonText}
  </button>
);

export default TextButton;
