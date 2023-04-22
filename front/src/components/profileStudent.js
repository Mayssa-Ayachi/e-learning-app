import React, { Fragment, useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useAuthContext } from "../hooks/useAuthContext";

const StudentProfile = ({ stu }) => {
 
  const [student, setStudent] = useState({});
  const [show, setShow] = useState(false);
  const [name, setName] = useState(stu.name);
  const [phonenumber, setPhonenumber] = useState(stu.phonenumber);
  const [linkedin, setLinkedin] = useState(stu.linkedin);
  const [university, setUniversity] = useState(stu.university);
  const [field, setField] = useState(stu.field);
  const { user } = useAuthContext();

  useEffect(() => {
    fetch('/api/student/profile', {
      method: "get",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
        Role: `${user.role}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setStudent(data);
        setLinkedin(data.linkedin);
        setField(data.field);
        setName(data.name);
        setPhonenumber(data.phonenumber);
        
      })
      .catch((err) => {
        console.log(err);
      });
  },[]);

  

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = () => {
    fetch(`/api/student/create`, {
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
        setStudent(data);
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
          <Card.Title>{student.email}</Card.Title>
        </Card.Body>
        <ListGroup variant="flush">
        <ListGroup.Item>
            <strong>Phone number:</strong> {student.name}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Phone number:</strong> {student.phonenumber}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Linkedin:</strong> {student.linkedin}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>University:</strong> {student.university}
          </ListGroup.Item>
          <ListGroup.Item>
            <strong>Field:</strong> {student.field}
          </ListGroup.Item>
        </ListGroup>
        <Card.Footer>
        <Button variant="outline-dark" onClick={handleShow} style={{ borderRadius: "5px", margin: "5px" }}>
  Edit
</Button>  
        </Card.Footer>
      </Card>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
         <Modal.Title>Edit profile</Modal.Title>
       </Modal.Header>
      <Modal.Body><div className="row">
  <div className="input-group mb-3">
    <div className="input-group-prepend ">
      <span className="input-group-text" id="inputGroup-sizing-default">Name:</span>
    </div>

    <input
      type="text"
      className="form-control"
      placeholder="Name"
      aria-describedby="inputGroup-sizing-default"
      onChange={e => setName(e.target.value)}
    />
  </div>
</div>

<div className="row">
  <div className="input-group mb-3">
    <div className="input-group-prepend ">
      <span className="input-group-text" id="inputGroup-sizing-default">University:</span>
    </div>

    <input
      type="text"
      className="form-control"
      placeholder="University"
      aria-describedby="inputGroup-sizing-default"
      onChange={e => setUniversity(e.target.value)}
    />
  </div>
</div>

<div className="row">
  <div className="input-group mb-3">
    <div className="input-group-prepend ">
      <span className="input-group-text" id="inputGroup-sizing-default">Phone Number:</span>
    </div>

    <input
      type="text"
      className="form-control"
      placeholder="Phone Number"
      aria-describedby="inputGroup-sizing-default"
      onChange={e => setPhonenumber(e.target.value)}
    />
  </div>
</div>

<div className="row">
  <div className="input-group mb-3">
    <div className="input-group-prepend ">
      <span className="input-group-text" id="inputGroup-sizing-default">LinkedIn:</span>
    </div>

    <input
      type="text"
      className="form-control"
      placeholder="LinkedIn"
      aria-describedby="inputGroup-sizing-default"
      onChange={e => setLinkedin(e.target.value)}
    />
  </div>
</div>

<div className="row">
  <div className="input-group mb-3">
    <div className="input-group-prepend ">
      <span className="input-group-text" id="inputGroup-sizing-default">Field:</span>
    </div>

    <input
      type="text"
      className="form-control"
      placeholder="Field"
      aria-describedby="inputGroup-sizing-default"
      onChange={e => setField(e.target.value)}
    />
  </div>
</div>
</Modal.Body>
        <Modal.Footer >
        <Button variant="outline-secondary"className="activity-button" id="valider"  
  onClick={handleUpdate}>Save</Button>
  <Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>Cancel</Button>

        </Modal.Footer>
      </Modal>
    </Fragment>
    
  </div>
  );
};

export default StudentProfile;