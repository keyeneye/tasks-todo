import { ModalProps } from "../../../types/Modal";
import TextButton from "../../Buttons/Text";
import Titles from "../../Titles";

const SimpleModal = ({
  showModal,
  title,
  children,
  handleClose,
  handleSubmit,
  showFooter = true,
  showCancelButton = true,
  showSubmitButton = true,
  cancelButtonText = "Cancel",
  submitButtonText = "Submit",
  backgroundColor = "#fff",
}: ModalProps) => {
  return (
    <>
      {showModal && (
        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen">
            <div className="fixed inset-0 bg-gray-500 opacity-75" />
            <div
              className="bg-white rounded-lg shadow-lg p-6 z-20  w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5"
              style={{ backgroundColor }}
            >
              {title && <Titles title={title} />}
              {children}
              {showFooter && (
                <div
                  className={`flex mt-4 ${
                    !showCancelButton ? "justify-center" : "justify-between"
                  }`}
                >
                  {showCancelButton && (
                    <TextButton
                      buttonText={cancelButtonText}
                      onClick={handleClose}
                    />
                  )}
                  {showSubmitButton && (
                    <TextButton
                      onClick={handleSubmit}
                      buttonText={submitButtonText}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SimpleModal;
