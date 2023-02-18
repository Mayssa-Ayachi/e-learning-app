import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import { useActivityContext } from "../hooks/useActivityContext"


const CoursDetails = ({ cours }) => {
  const { dispatch } = useActivityContext()

  const updateCoursID= ()=>{
    console.log(cours)
    // update the coursID context
    dispatch({type: 'Activity', payload: cours._id })
 }
    return (
      <div className="activity-details">
        <h4>{cours.title}</h4>
        <p><strong>Description : </strong>{cours.body}</p>
        <Link to={{pathname:"/teacherActivities"}}><Button className="activity-button" variant="outline-secondary" onClick={updateCoursID}>View</Button>{' '}</Link>

      </div>
    )
  }
  
  export default CoursDetails