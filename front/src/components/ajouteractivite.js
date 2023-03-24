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
        <button onClick={handleShow} >Add an activity</button>
        
        <Modal show={show} onHide={handleClose} onExit={reload} backdrop="static">
            <Modal.Header closeButton >
            <Modal.Title>Add an activity</Modal.Title>
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
        <span className="input-group-text ">Description:</span>

                <input
            type="text"
            className="form-control"
            placeholder="Description"
            onChange={e =>setBody(e.target.value)}
            />
        </div>
        </div>

       <UploadWidget changeURL={url=>setUrl(url)}/>
        
            
        </Modal.Body>


    <Modal.Footer>
    <Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>Cancel</Button>
    <Button variant="light" id="valider"  
    onClick={activityupload}>Submit</Button>
    {(valide && <div className="valide">Activity uploaded</div>) || (error && <div className="error">{error}</div>)}
    </Modal.Footer>
    </Modal>
    
        </Fragment>
    );
    };

export default AjoutActivite;