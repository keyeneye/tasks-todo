import { ToggleInputProps } from "../../../types/Input/Toggle";

const ToggleInput = ({
  value,
  onChange,
  label,
  backgroundColor = "#4b5563",
  disabled = false,
}: ToggleInputProps) => {
  return (
    <label className="flex items-center cursor-pointer my-2">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={value}
          onChange={(event) => onChange(event.target.checked)}
          disabled={disabled}
        />
        <div
          className="block w-14 h-8 rounded-full"
          style={{ backgroundColor }}
        />
        <div
          className={`dot absolute top-1 bg-white w-6 h-6 rounded-full transition ${
            disabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
          style={{
            left: value ? "calc(100% - 1.65rem)" : "0.15rem",
          }}
        ></div>
      </div>
      {label && <div className="ml-3 font-medium">{label}</div>}
    </label>
  );
};

export default ToggleInput;
