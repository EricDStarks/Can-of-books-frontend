import React from 'react-bootstrap/Button';
import {Modal, Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';

function BookModal({show, setShow}) {
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="Book title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control type="Title"/>
                </Form.Group>
                <Form.Group
                  className="Book description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control type="description"/>
                </Form.Group>
                <Form.Group className="Book status">
                  <Form.Label>Status</Form.Label>
                  <Form.Control type="status" />
                </Form.Group>
              </Form>
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
        </>
      );
    }
    
    export default BookModal;