import React, { Fragment, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useAuthContext } from "../hooks/useAuthContext";

const TeacherProfilePagee = () => {
 
  const [teacher, setTeacher] = useState({});
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [university, setUniversity] = useState("");
  const [field, setField] = useState("");
  const { user } = useAuthContext();

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleUpdate = () => {
    fetch(`/api/teacher/create`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
      body: JSON.stringify({
        name,
        phonenumber,
        linkedin,
        university,
        field,
        id: user.id,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
        handleClose();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Fragment>
      <Card className="mb-3">
        <Card.Body>
          <Card.Title>{teacher.name}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Phone number: {teacher.phonenumber}
          </ListGroup.Item>
          <ListGroup.Item>Linkedin: {teacher.linkedin}</ListGroup.Item>
          <ListGroup.Item>
            University: {teacher.university}
          </ListGroup.Item>
          <ListGroup.Item>Field: {teacher.field}</ListGroup.Item>
        </ListGroup>
        <Card.Footer>
          <Button variant="outline-primary" onClick={handleShow}>
            Edit
          </Button>{" "}
         
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text"
                placeholder={teacher.name}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPhonenumber">
              <Form.Label>Phone number</Form.Label>
              <Form.Control
                type="text"
                placeholder={teacher.phonenumber}
                value={phonenumber}
                onChange={(e) => setPhonenumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formLinkedin">
              <Form.Label>Linkedin</Form.Label>
              <Form.Control
                type="text"
                placeholder={teacher.linkedin}
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formUniversity">
              <Form.Label>University</Form.Label>
              <Form.Control
                type="text"
                placeholder={teacher.university}
                value={university}
                onChange={(e) => setUniversity(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formField">
              <Form.Label>Field</Form.Label>
              <Form.Control
                type="text"
                placeholder={teacher.field}
                value={field}
                onChange={(e) => setField(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default TeacherProfilePagee;