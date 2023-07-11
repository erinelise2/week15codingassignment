import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import ObservationForm from "./Components.ObservationForm";


export default function NewObservationModal() {
    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="observation-modal">
        <button onClick={handleShow} className="observation-btn btn border-secondary bg-white form-control mb-2" variant="white">
        Record Observation
        </button>
  
        <Modal
          show={show}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title className="text-dark">What did you see?</Modal.Title>
          </Modal.Header>
          <Modal.Body>
              <ObservationForm />
          </Modal.Body>
        </Modal>
      </div>
    );
} 