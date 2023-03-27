import React, { Fragment, useState  } from "react";
import { useAuthContext } from "../hooks/useAuthContext"
import { useActivityContext } from "../hooks/useActivityContext"
import { GoPlus } from "react-icons/go";

const AjoutCours = () => {
    const [valide,setValide] = useState("")
    const [error,setError] = useState("")

    const {coursID} = useActivityContext()
    const {user} = useAuthContext()
    
     const AddToMyCourse = async () => {
        try {
          await fetch(`/api/student/addCourse/${coursID}`, {
            method: 'PUT',
            headers: {
              'Authorization': `Bearer ${user.token}`,
              'Role': `${user.role}`
            }
          });
          setValide("true")
          setTimeout(()=>{setValide("")}, 700)

        } catch (err) {
          console.log(err.message);
          setError(err.message)
          setTimeout(()=>{setError("")}, 700)
        }
      };


    return (
        <Fragment>
        <button onClick={AddToMyCourse} className="activity-button" variant="outline-secondary"><GoPlus color="#BBA14A" fontSize="1.5em" /></button>

    {(valide && <div className="valide">Course added successfully</div>) || (error && <div className="error"><center>{error}</center></div>)}

    
        </Fragment>
    );
    };

export default AjoutCours;