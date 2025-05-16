import { ReactNode } from "react";

export type ModalProps = {
  showModal: boolean;
  title?: string;
  children: ReactNode;
  handleSubmit?: () => void;
  handleClose?: () => void;
  showFooter?: boolean;
  showCancelButton?: boolean;
  showSubmitButton?: boolean;
  cancelButtonText?: string;
  submitButtonText?: string;
  backgroundColor?: string;
};
