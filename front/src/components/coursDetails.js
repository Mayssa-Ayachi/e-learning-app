import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useActivityContext } from "../hooks/useActivityContext"
import { useAuthContext } from "../hooks/useAuthContext"


const CoursDetails = ({ cours }) => {
  const { dispatch } = useActivityContext()

  const updateCoursID= ()=>{
    // update the coursID context
    localStorage.setItem('coursID', JSON.stringify(cours._id))
    dispatch({type: 'Activity', payload: cours._id })
  }


    return (
      <div className="activity-details">
        <img className="image" alt="course" src={cours.url}></img>
        <h4>{cours.title}</h4>
        <p><strong>Description : </strong>{cours.body}</p>
        {<Link to={{pathname:"/courseActivities"}}><Button className="activity-button" variant="outline-secondary" onClick={updateCoursID}>View activities</Button></Link>}
        {}
      </div>
    )
  }
  
  export default CoursDetails