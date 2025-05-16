import { TextInputProps } from "../Text";

export interface TextAreaInputProps extends TextInputProps {
  characterLimit?: number;
  showCharacterLimit?: boolean;
}
