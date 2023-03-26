import React, { useState, useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { useAuthContext } from "../../hooks/useAuthContext"

const TeachersList = () => {
  const [teachers, setTeachers] = useState([]);
  const [row, setRow] = useState("");
  const [id,setID] = useState("");
  const {user} = useAuthContext()
  const role = "teacher"

  const deleteUser = async id => {
    setRow("");
    console.log(id)
    document.getElementById("clbtnr").className = "btn btn-dark disabled";
    try {
      const response = await fetch('/api/admin/deleteuser/', {
        method: 'DELETE',
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`
      },
      body: JSON.stringify({
        id,
        userRole:"teacher"
      })
    })

    } catch (err) {
      console.error(err.message);
    }
  };


  const getTeachers = async () => {
    const teacherslist = async () => {
      try{
      const response = await fetch('/api/admin/'+role, {
        headers: {'Authorization': `Bearer ${user.token}`,
        'Role':`${user.role}`
        }
      })
      const json = await response.json()
        setTeachers(json);
      }catch(err){
        console.error(err.message)
      }
    }

    if (user) {
        teacherslist()
    }
  };

  useEffect(() => {
    getTeachers()
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
              <th scope="col" className="text-nowrap">Field</th>
              <th scope="col" className="text-nowrap">Phone Number</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map(teacher => (
              <tr key={teacher._id} id={`teacher${teacher._id}`} onClick={() => {
                let e = document.getElementById(`teacher${teacher._id}`);
                if (e.className !== "table-secondary") {
                  if (row !== "") document.getElementById(row).className = "";
                  e.className = "table-secondary";
                  setRow(`teacher${teacher._id}`);
                  setID(teacher._id)
                  document.getElementById("clbtnr").className = "btn btn-dark";
                }
              }}>
                <td data-label="name" className="text-nowrap">{teacher.name}</td>
                <td data-label="email" className="text-nowrap">{teacher.email}</td>
                <td data-label="linkedin" className="text-nowrap">{teacher.linkedin}</td>
                <td data-label="university" className="text-nowrap">{teacher.university}</td>
                <td data-label="field" className="text-nowrap">{teacher.field}</td>
                <td data-label="phone" className="text-nowrap">{teacher.phonenumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="modifsupp">
        <Button variant="dark" id="clbtnr" className="disabled"
          onClick={() => deleteUser(id)}>
          Delete
        </Button>
      </div>
    </>
  )
};

export default TeachersList;