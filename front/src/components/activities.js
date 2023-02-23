import Button from 'react-bootstrap/Button';

const ActivityDetails = ({ activity }) => {

    return (
      <div className="activity-details">
        <h4>{activity.title}</h4>
        <p><strong>Description : </strong>{activity.body}</p>
        <Button className="activity-button" variant="outline-secondary">View</Button>{' '}

      </div>
    )
  }
  
  export default ActivityDetails