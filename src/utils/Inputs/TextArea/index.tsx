import { useEffect, useState } from "react";
import { TextAreaInputProps } from "../../../types/Input/TextArea";

const TextAreaInput = ({
  label,
  value,
  onChange,
  showAlert = false,
  alertMessage = "",
  placeholder,
  validateOnSubmit = false,
  characterLimit = 500,
  showCharacterLimit = false,
}: TextAreaInputProps) => {
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
      <textarea
        className="border border-black rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline resize-y"
        id="new-task-text"
        value={value}
        onChange={(event) => validateTaskInput(event.target.value)}
        placeholder={placeholder}
        maxLength={characterLimit}
      />
      {showCharacterLimit && (
        <div className="flex justify-end">
          <span className="text-sm text-black">
            {value.length}/{characterLimit}
          </span>
        </div>
      )}
      {showAlert && invalidField && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {defaultAlertMessage}
        </div>
      )}
    </>
  );
};

export default TextAreaInput;
