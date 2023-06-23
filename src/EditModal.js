import React from 'react-bootstrap/Button';
import {Modal, Button} from 'react-bootstrap';
import { Form } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';


function EditModal({showUpdate, setShowUpdate, id}) {
    const  handleClose = () => setShowUpdate(false);
    const handleShow = () => setShowUpdate(true);
    const [formData, setFormData] = useState({});
    

const bookSubmit = async (event) => {
  event.preventDefault();


  try {
    const response = await axios.put(`https://erics-can-of-books.onrender.com/books/${id}`, formData);
    const newBook = response.data;
    
    setFormData({});
  } catch (error) {
    console.error('Error:', error.message);  
  }
};

    return (
        <>
          <Modal show={showUpdate} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Book</Modal.Title>
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
    
    export default EditModal;