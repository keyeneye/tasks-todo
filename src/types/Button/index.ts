export type ButtonProps = {
  buttonText: string;
  onClick?: (field: unknown) => void;
  type?: "button" | "submit" | "reset";
};
