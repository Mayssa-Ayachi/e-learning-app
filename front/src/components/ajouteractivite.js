import React, { Fragment, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useAuthContext } from "../hooks/useAuthContext"
import { useActivityContext } from "../hooks/useActivityContext"

const AjoutActivite = () => {
    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [activite,setActivite] = useState("")
    const [valide,setValide] = useState("")
    const [error,setError] = useState("")
    const {coursID} = useActivityContext()
    const {user} = useAuthContext()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const activityupload = (url) => {
        console.log("wilyeyy")
        
        if(url && coursID){
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
            throw Error("url || coursID are missing")
        }
    }

        
   const activityDetails = (e)=>{
       if(title && body && activite){
        e.preventDefault()
        const data = new FormData()
        data.append("file",activite)
        data.append("upload_preset","pcd_2023")
        data.append("cloud_name","dyizrug8d")
        fetch("https://api.cloudinary.com/v1_1/dyizrug8d/auto/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>activityupload(data.url))
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
 

    return (
        <Fragment>
        <button className="ajouter ajoutdossier" onClick={handleShow} >Add an activity</button>
        
        <Modal show={show} onHide={handleClose} backdrop="static">
            <Modal.Header closeButton>
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

        <div className="row">
        <div className="input-group mb-3">
        <span className="input-group-text ">Upload Activity:</span>

            <input
            type="file"
            className="form-control"
            onChange={(e)=>setActivite(e.target.files[0])}
            />
        </div>
        </div>  

        
            
        </Modal.Body>


    <Modal.Footer>
    <Button variant="dark" data-bs-dismiss="modal"  onClick={handleClose}>Cancel</Button>
    <Button variant="light" id="valider"  
    onClick={activityDetails}>Submit Activity</Button>
    {(valide && <div className="valide">Activity uploaded</div>) || (error && <div className="error">{error}</div>)}
    </Modal.Footer>
    </Modal>
    
        </Fragment>
    );
    };

export default AjoutActivite;