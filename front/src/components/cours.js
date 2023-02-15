import Button from 'react-bootstrap/Button';

const CoursDetails = ({ cours }) => {

    return (
      <div className="activity-details">
        <h4>{cours.title}</h4>
        <p><strong>Description : </strong>{cours.body}</p>
        <Button className="activity-button" variant="outline-secondary">View</Button>{' '}

      </div>
    )
  }
  
  export default CoursDetails