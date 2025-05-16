import { DeleteModalProps } from "../../interfaces";
import SimpleModal from "../../utils/Modals/SimpleModal";

const DeleteModal = ({
  showDeleteModal,
  setShowDeleteModal,
  onDelete,
  id,
}: DeleteModalProps) => {
  return (
    <SimpleModal
      showModal={showDeleteModal}
      handleClose={() => setShowDeleteModal(false)}
      handleSubmit={() => onDelete(id)}
      submitButtonText="Delete"
      cancelButtonText="Cancel"
    >
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold">Are you sure?</h1>
        <p className="text-gray-500">This action cannot be undone.</p>
      </div>
    </SimpleModal>
  );
};

export default DeleteModal;
