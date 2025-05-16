export interface ToggleInputProps {
  value: boolean;
  onChange: (value: boolean) => void;
  label?: string;
  backgroundColor?: string;
  disabled?: boolean;
}
