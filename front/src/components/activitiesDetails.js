import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const ActivityDetails = ({ activity}) => {

    return (
      <div className="activity-details">
        <h4>{activity.title}</h4>
        <p><strong>Description : </strong>{activity.body}</p>
        <Link to="/viewActivity" state={{type:activity.type, url:activity.activ}}>
        <Button className="activity-button" 
        variant="outline-secondary" 
        >View activities</Button>{' '}</Link>
      </div>
    )
  }
   
  export default ActivityDetails