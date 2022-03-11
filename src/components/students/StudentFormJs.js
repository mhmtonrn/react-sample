import React, {useState} from "react";
import {Button, Card, Form, Modal} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

import * as ActionCreator from '../../state/actionCreators/ActionCreator';

export const StudentFormJs = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [no, setNo] = useState("");
    const [name, setName] = useState("");
    const [img, setImg] = useState("");
    const [description, setDescription] = useState("");
    const [address, setAddress] = useState("");
    const [createdAt] = useState(new Date());

    const {addNewStudent} = bindActionCreators(ActionCreator, useDispatch());


    const formSubmitHandler = (e) => {
        e.preventDefault();
        addNewStudent({no, name, img, description, address, createdAt});
        setNo("");
        setName("");
        setImg("");
        setDescription("");
        setAddress("");
        console.log(no, name);
        handleClose();
    }


    return <div>
        <Button variant="primary" onClick={handleShow}>
            Add Student</Button>
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={formSubmitHandler}>
                <Modal.Header closeButton>
                    <Modal.Title>Add New Student</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Card>
                        <Card.Body>
                            <img src={img} alt="" className={"img-thumbnail rounded mx-auto d-block"}/>

                            <Form.Group className="mb-2" controlId="formBasicStudentNo">
                                <Form.Label>Student No:</Form.Label>
                                <Form.Control value={no} onChange={(e) => setNo(e.target.value)} type="text"
                                              placeholder="Student No"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicStudentName">
                                <Form.Label>Student Name:</Form.Label>
                                <Form.Control value={name} onChange={(e) => setName(e.target.value)} type="text"
                                              placeholder="Student Name"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicStudentName">
                                <Form.Label>Address</Form.Label>
                                <Form.Control value={address} onChange={(e) => setAddress(e.target.value)} type="text"
                                              placeholder="Address"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicStudentName">
                                <Form.Label>Description</Form.Label>
                                <Form.Control value={description} onChange={(e) => setDescription(e.target.value)}
                                              type="text" placeholder="Description"/>
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="formBasicStudentName">
                                <Form.Label>Image</Form.Label>
                                <Form.Control value={img} onChange={(e) => setImg(e.target.value)} type="text"
                                              placeholder="Image"/>
                            </Form.Group>


                        </Card.Body>
                    </Card>

                </Modal.Body>
                <Modal.Footer>
                    <div className="mt-2">
                        <Button type="submit" disabled={!(name && no)} className="me-2">Save</Button>
                        <Button type="reset" onClick={handleClose}>Cancel</Button>
                    </div>
                </Modal.Footer>
            </Form>
        </Modal>

    </div>

}