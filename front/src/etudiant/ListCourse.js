import React from 'react'
import mercedes1 from "../Cours/Cours2/mercedes1.jpeg";
import mercedes2 from "../Cours/Cours2/mercedes2.jpg";
import jeep1 from "../Cours/Cours1/jeep1.jpg";
import jeep2 from "../Cours/Cours1/jeep2.jpg";
import Cours from "./Cours"
import Button from 'react-bootstrap/Button';

const data=[
  {
    id:"1",
    title:"Mercedes",
    imgurl: [mercedes1,mercedes2],
  },
  {
    id:"2",
    title:"Jeep",
    imgurl: [jeep1,jeep2],
  },
];
export default function ListCourse() {
  return (
    <>
      <div className="courses">
      {data.map(cours => {
        return(
          <div key={cours.id}className="cours" >
            <left>
            <h4>Course {cours.id}: {cours.title}</h4></left>
            <Button type="button" href={`/cours${cours.id}`} variant="primary" className='boutton'>Let's get started!</Button>
          </div>
        )
      })}
      </div>
    </>
  )
}
