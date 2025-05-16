import { PrioritaryModalProps } from "../../interfaces";
import SimpleModal from "../../utils/Modals/SimpleModal";
import Titles from "../../utils/Titles";

const PrioritaryModal = ({
  showPrioritaryModal,
  setShowPrioritaryModal,
}: PrioritaryModalProps) => {
  return (
    <SimpleModal
      showModal={showPrioritaryModal}
      showCancelButton={false}
      submitButtonText="Ok"
      handleSubmit={() => setShowPrioritaryModal(false)}
    >
      <Titles title="All the prioritary tasks wont allow to update the initial date." />
      <Titles title="Also, all the prioritary tasks will be shown with a red border." />
    </SimpleModal>
  );
};

export default PrioritaryModal;
