import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';

const ModalComponent = ({
  isOpen,
  modalContent,
  handleClose,
  showCloseIcon,
}) => {
  return (
    <Modal
      open={isOpen}
      onClose={handleClose}
      center
      showCloseIcon={showCloseIcon}
      style={{ background: 'red' }}
    >
      {modalContent}
    </Modal>
  );
};

export default ModalComponent;
