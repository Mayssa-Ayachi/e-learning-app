import React, { Fragment, useState  } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from "../hooks/useAuthContext"
import { useActivityContext } from "../hooks/useActivityContext"
import UploadWidget from "./uploadwidget";

const AjoutActivite = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [valide,setValide] = useState("")
    const [error,setError] = useState("")
    const [url,setUrl] = useState(null)
    const {coursID} = useActivityContext()
    const {user} = useAuthContext()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const activityupload = (e) => {
        console.log("wilyeyy")
        e.preventDefault()
        console.log(url)
        if(title && body && url && coursID){
            fetch("/api/activity/create",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization": `Bearer ${user.token}`,
                    'Role':`${user.role}`}
                ,
                body:JSON.stringify({
                    role:user.role,
                    title,
                    body,
                    activ:url,
                    coursID:coursID
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
            setError("Please add all the fields")
            setTimeout(()=>{setError("")}
            , 2000)
            throw Error("Please add all the fields")
           }
    }

 
    const reload=()=>window.location.reload();

    return (
        <Fragment>
        <Button onClick={handleShow} className="activity-button" variant="outline-secondary">Add an activity</Button>
        
        <Modal show={show} onHide={handleClose} onExit={reload} backdrop="static">
            <Modal.Header closeButton >
            <div className="centre">
            <Modal.Title>Add an activity</Modal.Title>
            </div>
            </Modal.Header>


            <Modal.Body> 
            <div className="row">
          <div class="input-group mb-3">
          <div class="input-group-prepend ">
            <span class="input-group-text" id="inputGroup-sizing-default">Title :</span>
          </div>

          <input
            type="text"
            class="form-control"
            placeholder="Title"
            aria-describedby="inputGroup-sizing-default"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        </div>
        
        <div className="row">
        <div className="input-group mb-3">
        <div className="input-group-prepend ">
            <span className="input-group-text" id="inputGroup-sizing-default">Description :</span>
          </div>

                <input
            type="text"
            className="form-control"
            placeholder="Description"
            aria-describedby="inputGroup-sizing-default"
            onChange={e => setBody(e.target.value)}
          />
        </div>
        </div>   

        <div className="upload">
        <UploadWidget changeURL={url=>setUrl(url)}/>
        </div>
        
            
        </Modal.Body>


    <Modal.Footer>
    
    <Button variant="outline-secondary"className="activity-button" id="valider"  
  onClick={activityupload}>Submit</Button>
  <Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>Cancel</Button>
    
    </Modal.Footer>
    {(valide && <div className="valide"><center>Activity uploaded</center></div>) || (error && <div className="error"><center>{error}</center></div>)}
    </Modal>
    
        </Fragment>
    );
    };

export default AjoutActivite;