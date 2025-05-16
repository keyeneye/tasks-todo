import { useEffect, useState } from "react";
import { TextInputProps } from "../../../types/Input/Text";

const TextInput = ({
  label,
  value,
  onChange,
  showAlert = false,
  alertMessage = "",
  placeholder,
  validateOnSubmit = false,
}: TextInputProps) => {
  const [defaultAlertMessage, setDefaultAlertMessage] = useState(alertMessage);
  const [invalidField, setInvalidField] = useState(false);

  function validateTaskInput(taskText: string) {
    onChange(taskText);
    if (taskText.trim() === "") {
      setInvalidField(true);
      setDefaultAlertMessage(
        alertMessage.trim() === "" ? `${label} cannot be empty` : alertMessage
      );
      return;
    }
    setInvalidField(false);
    setDefaultAlertMessage("");
  }

  useEffect(() => {
    if (validateOnSubmit) validateTaskInput(value);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [validateOnSubmit]);

  return (
    <>
      {label && (
        <label
          className="block text-black font-bold mb-2"
          htmlFor="new-task-text"
        >
          {label}
        </label>
      )}
      <input
        className="border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="new-task-text"
        type="text"
        value={value}
        onChange={(event) => validateTaskInput(event.target.value)}
        placeholder={placeholder}
      />
      {showAlert && invalidField && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {defaultAlertMessage}
        </div>
      )}
    </>
  );
};

export default TextInput;
