import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';

const ActivityDetails = ({ activity}) => {

    return (

      <Card style={{ width: '18rem', height:'13rem'}}>
      <Card.Body>
        <Card.Title>{activity.title}</Card.Title>
        <Card.Text>
        {activity.body}
        </Card.Text>
        <Link to="/viewActivity" state={{type:activity.type, url:activity.activ}}>
        <Button className="activity-button" 
        variant="outline-secondary" >View activity</Button>{' '}</Link>      </Card.Body>
    </Card>

      /*<div className="activity-details">
        <h4>{activity.title}</h4>
        <p><strong>Description : </strong>{activity.body}</p>
        <Link to="/viewActivity" state={{type:activity.type, url:activity.activ}}>
        <Button className="activity-button" 
        variant="outline-secondary" >View activity</Button>{' '}</Link>
      </div>*/
    )
  }
   
  export default ActivityDetails