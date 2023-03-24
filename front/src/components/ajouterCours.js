import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from "../hooks/useAuthContext"

  const AjoutCours = () => {
    const [title, setTitle] = useState("");
    const [bodyy, setBody] = useState("");
    const [categorie, setCategorie] = useState("");
    const [image, setImage] = useState("");
    const {user} = useAuthContext()
    const [valide,setValide] = useState("")
    const [error,setError] = useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const addCourse = (url) => {
      if(url){
          fetch("/api/courses/create",{
              method:"post",
              headers:{
                  "Content-Type":"application/json",
                  "Authorization": `Bearer ${user.token}`,
                  'Role':`${user.role}`}
              ,
              body:JSON.stringify({
                  role:user.role,
                  title,
                  categorie,
                  body:bodyy,
                  url
              })
          }).then(res=>res.json())
          .then(()=>{
              setValide("true")
              setTimeout(()=>{setValide("")}
              , 2000)
          })
          .catch(err=>{
              console.log(err)
          })
      }else{
          throw Error("url is missing")
      }
  }

      
  const onSubmitForm = (e)=>{
    if(title && categorie && bodyy && image){
      e.preventDefault()
      const data = new FormData()
      data.append("file",image)
      data.append("upload_preset","pcd_2023")
      data.append("cloud_name","dyizrug8d")
      fetch("https://api.cloudinary.com/v1_1/dyizrug8d/auto/upload",{
          method:"post",
          body:data
      })
      .then(res=>res.json())
      .then(data=>addCourse(data.url))
      .catch(err=>{
          console.log(err)
      })
    }else{
        setError("Please add all the fields")
        setTimeout(()=>{setError("")}, 2000)
        throw Error("Please add all the fields")
    }
  }
  const reload=()=>window.location.reload();

    return (
      <Fragment>
        <button className="ajouter ajoutdossier" onClick={handleShow} >Add Course</button>
        
        <Modal show={show} onHide={handleClose} onExit={reload} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Add Course</Modal.Title>
          </Modal.Header>


          <Modal.Body> 
          <div className="row">
          <div className="input-group mb-3">
          <span className="input-group-text ">Title :</span>

          <input
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        </div>
        
        <div className="row">
        <div className="input-group mb-3">
        <span className="input-group-text ">Category :</span>

                <input
            type="text"
            className="form-control"
            placeholder="Category"
            onChange={e => setCategorie(e.target.value)}
          />
        </div>
        </div>
          
        <div className="row">
        <div className="input-group mb-3">
        <span className="input-group-text ">Description :</span>

                <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={e => setBody(e.target.value)}
          />
        </div>
        </div>    


        <div className="row">
        <div className="input-group mb-3">
        <span className="input-group-text ">Upload representative image :</span>

                <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={e => setImage(e.target.files[0])}
          />
        </div>
        </div>  

        
          
        </Modal.Body>


  <Modal.Footer>
  <Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>Cancel</Button>
  <Button variant="light" id="valider"  
  onClick={onSubmitForm}>Submit</Button>
  {(valide && <div className="valide">Activity uploaded</div>) || (error && <div className="error">{error}</div>)}

  </Modal.Footer>
  </Modal>
  
      </Fragment>
    );
  };

export default AjoutCours;