import React from 'react-bootstrap/Button';
import {Modal, Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function BookModal({show, setShow}) {
    const  handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [formData, setFormData] = useState({});
const MyForm = () => {
}

const bookSubmit = async (event) => {
  event.preventDefault();


  try {
    const response = await axios.post('https://erics-can-of-books.onrender.com/books', formData);
    const newBook = response.data;
    
    setFormData({});
  } catch (error) {
    console.error('Error:', error.message);  
  }
};

    return (
        <>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add Book</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form onSubmit={bookSubmit}>
                <Form.Group className="Book title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control onChange={function (event){
                      let newFormData  = {...formData}
                      newFormData.title = event.target.value;
                      setFormData(newFormData);
                  }} type="Title"/>
                </Form.Group>
                <Form.Group
                  className="Book description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control onChange={function (event){
                      let newFormData  = {...formData}
                      newFormData.description = event.target.value
                      setFormData(newFormData)
                  }} type="description"/>
                </Form.Group>
                <Form.Group className="Book status">
                  <Form.Label>Status</Form.Label>
                  <Form.Control onChange={function (event){
                      let newFormData  = {...formData}
                      newFormData.status = event.target.value
                      setFormData(newFormData)
                  }} type="status" />
                  <Button type="submit" onClick={handleClose}>
                Save Changes
              </Button>
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              
            </Modal.Footer>
          </Modal>
        </>
      );
    };
    
    export default BookModal;