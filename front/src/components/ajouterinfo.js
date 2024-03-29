import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const AjoutInfo = () => {
  const [name, setName] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [university, setUniversity] = useState("");
  const [field, setField] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


const onSubmitForm = (e)=>{
   if(name && phonenumber&& linkedin && university && field ){
    e.preventDefault()
    
    .then(res=>res.json())
    
    .catch(err=>{
        console.log(err)
    })
   }else{
    setTimeout(()=>{} , 2000)
    throw Error("Please add all the fields")
   }
}


  return (
    <Fragment>
      <button className="ajouter ajoutdossier" onClick={handleShow} >Add profileinfo</button>
      
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Add profile</Modal.Title>
        </Modal.Header>


        <Modal.Body> 
        <div className="row">
        <div className="input-group mb-3">
        <span className="input-group-text ">name :</span>

        <input
          type="text"
          className="form-control"
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        />
      </div>
      </div>
      
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">phonenumber :</span>

              <input
          type="text"
          className="form-control"
          placeholder="Phonenumber"
          onChange={e => setPhonenumber(e.target.value)}
        />
      </div>
      </div>
        
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">linkedin :</span>

              <input
          type="text"
          className="form-control"
          placeholder="Linkedin"
          onChange={e => setLinkedin(e.target.value)}
        />
      </div>
      </div>    
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">university :</span>

              <input
          type="text"
          className="form-control"
          placeholder="University"
          onChange={e => setUniversity(e.target.value)}
        />
      </div>
      </div>    
      <div className="row">
      <div className="input-group mb-3">
      <span className="input-group-text ">Field :</span>

              <input
          type="text"
          className="form-control"
          placeholder="Field"
          onChange={e => setField(e.target.value)}
        />
      </div>
      </div>    
      </Modal.Body>


<Modal.Footer>
 <Button variant="light" id="valider"  
onClick={onSubmitForm}>Save</Button>
<Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>close</Button>
</Modal.Footer>
</Modal>
 
    </Fragment>
  );
};

export default AjoutInfo;