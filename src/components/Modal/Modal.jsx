import React from 'react'
import {Button,Modal} from 'react-bootstrap'
import { useState } from "react";
import Input from '../Input/Input';



function ModalBody() {

    const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <div className='mymodals'>
        <Button variant="primary" onClick={handleShow}>
    Connectz vous        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
 <Input  b='azerty' />

            </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
  

export default ModalBody  

