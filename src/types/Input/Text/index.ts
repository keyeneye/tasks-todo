export interface TextInputProps {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  showAlert?: boolean;
  alertMessage?: string;
  placeholder?: string;
  validateOnSubmit?: boolean;
}
