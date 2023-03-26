import React, { Fragment, useState, useEffect } from "react";
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

  useEffect(() => {
    fetch('/api/teacher/profile', {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTeacher(data);
        setLinkedin(data.linkedin);
        setField(data.field);
        setName(data.name);
        setPhonenumber(data.phonenumber);
        
      })
      .catch((err) => {
        console.log(err);
      });
  },);

  

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
 <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
    <Fragment>
      <Card className="mb-3 mt-3" style={{ padding: "20px" }}>
        <Card.Body>
          <Card.Title>{teacher.name}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <strong>Phone number:</strong> {teacher.phonenumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Linkedin:</strong> {teacher.linkedin}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>University:</strong> {teacher.university}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Field:</strong> {teacher.field}
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer>
        <Button variant="outline-primary" onClick={handleShow} style={{ borderRadius: "5px", margin: "5px" }}>
  Edit
</Button>

         
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
         <Modal.Title>Edit profile</Modal.Title>
       </Modal.Header>
      <Modal.Body className="text-center" style={{ padding: "20px" }}>
          <Form>
          <Form.Group controlId="formName">
  <Form.Label>Name</Form.Label>
  <Form.Control
    type="text"
    placeholder={teacher.name}
    
    onChange={(e) => setName(e.target.value)}
    style={{ borderRadius: "5px", border: "none", boxShadow: "none" }}
  />
</Form.Group>

<Form.Group controlId="formPhonenumber">
  <Form.Label>Phone number</Form.Label>
  <Form.Control
    type="text"
    placeholder={teacher.phonenumber}
    value={phonenumber}
    onChange={(e) => setPhonenumber(e.target.value)}
    style={{ borderRadius: "5px", border: "none", boxShadow: "none" }}
  />
</Form.Group>

<Form.Group controlId="formLinkedin">
  <Form.Label>Linkedin</Form.Label>
  <Form.Control
    type="text"
    placeholder={teacher.linkedin}
    defaultValue={linkedin}
    onChange={(e) => setLinkedin(e.target.value)}
    style={{ borderRadius: "5px", border: "none", boxShadow: "none" }}
  />
</Form.Group>

<Form.Group controlId="formUniversity">
  <Form.Label>University</Form.Label>
  <Form.Control
    type="text"
    placeholder={teacher.university}
    value={university}
    onChange={(e) => setUniversity(e.target.value)}
    style={{ borderRadius: "5px", border: "none", boxShadow: "none" }}
  />
</Form.Group>

<Form.Group controlId="formField">
  <Form.Label>Field</Form.Label>
  <Form.Control
    type="text"
    placeholder={teacher.field}
    value={field}
    onChange={(e) => setField(e.target.value)}
    style={{ borderRadius: "5px", border: "none", boxShadow: "none" }}
  />
</Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer style={{ padding: "20px" }}>
        <Button variant="secondary" onClick={handleClose} style={{ borderRadius: "5px", margin: "5px" }}>
  Close
</Button>

<Button variant="primary" onClick={handleUpdate} style={{ borderRadius: "5px", margin: "5px" }}>
  Save Changes
</Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  </div>
  );
};

export default TeacherProfilePagee;