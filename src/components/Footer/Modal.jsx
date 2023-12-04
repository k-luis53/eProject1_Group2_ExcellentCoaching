import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
      <img src="./image/ggmap.png" alt="" style={{ width: "100%" }} />
      </Modal.Body>
    </Modal>
  );
}

function ModalMap() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="" onClick={() => setModalShow(true)}>
        <img src="./image/ggmap.png" alt="" style={{width:"100%"}}/>
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default ModalMap;