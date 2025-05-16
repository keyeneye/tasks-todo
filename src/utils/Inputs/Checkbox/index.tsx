import { CheckboxInputProps } from "../../../interfaces";

/**
 * Checkbox component
 * @param {CheckboxInputProps} props - Checkbox component props
 * @returns {JSX.Element} - Checkbox component
 */
const CheckboxInput = ({
  label,
  checked,
  onChange,
  disabled = false,
}: CheckboxInputProps): JSX.Element => {
  return (
    <label className="flex items-center">
      <input
        disabled={disabled}
        type="checkbox"
        className={`form-checkbox h-5 w-5 text-blue-600 ${
          disabled ? "opacity-50 cursor-not-allowed" : ""
        }`}
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
      />
      <span className="ml-2 text-black">{label}</span>
    </label>
  );
};

export default CheckboxInput;
