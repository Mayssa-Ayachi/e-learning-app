import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/useAuthContext"

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [row, setRow] = useState("");
  const [id,setID] = useState("");
  const {user} = useAuthContext()
  const role = "student"

  const deletestudent = (id)=> {
    setRow("");
    console.log(id)
    document.getElementById("clbtnr").className = "btn btn-dark disabled";
      fetch('/api/admin/deletestudent/'+id, {
        method: 'delete',
        "Content-Type": "application/json",
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`}
    }).then(
      ()=>window.location.reload()
    )
    .catch ((err)=>{
      console.error(err.message);
    })
  };


  const getStudents = async () => {
    const studentslist = async () => {
      try{
      const response = await fetch('/api/admin/'+role, {
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`
        }
      })
      const json = await response.json()
        setStudents(json);
      }catch(err){
        console.error(err.message)
      }
    }

    if (user) {
        studentslist()
    }
  };

  useEffect(() => {
    getStudents()
  }, [])

 

  return (
    <>

      <div className="table-responsive m-3 mytable">
        <table className="table table-hover text-center mytable">
          <thead className="table-secondary text-secondary">
            <tr>
              <th scope="col">Name</th>
              <th scope="col" className="text-nowrap">Email</th>
              <th scope="col" className="text-nowrap">linkedin</th>
              <th scope="col" className="text-nowrap">University</th>
              <th scope="col" className="text-nowrap">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student._id} id={`student${student._id}`} onClick={() => {
                let e = document.getElementById(`student${student._id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`student${student._id}`);
                  setID(student._id)
                  document.getElementById("clbtnr").className = "btn btn-dark";
                }
              }}>
                <td data-label="name" className="text-nowrap">{student.name}</td>
                <td data-label="email" className="text-nowrap">{student.email}</td>
                <td data-label="linkedin" className="text-nowrap">{student.linkedin}</td>
                <td data-label="university" className="text-nowrap">{student.university}</td>
                <td data-label="phone" className="text-nowrap">{student.phonenumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="delete">
        <Button variant="dark" id="clbtnr" className="disabled"
          onClick={() => deletestudent(id)}>
          Delete
        </Button>
      </div>
    </>
  )
};

export default StudentsList;