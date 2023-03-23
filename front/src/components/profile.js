import Button from 'react-bootstrap/Button';

const TeacherDetails = ({ profile }) => {

    return (
      <div className="teacher-details">
        
        <h4><strong>Description : </strong>{profile.phonenumber}</h4>
        
        <p><strong>Description : </strong>{profile.name}</p>
        <p><strong>Description : </strong>{profile.linkedin}</p>
        <p><strong>Description : </strong>{profile.university}</p>
        <p><strong>Description : </strong>{profile.field}</p>
        <p><strong>Description : </strong>{profile.email}</p>

      </div>
    )
  }
  
  export default TeacherDetails