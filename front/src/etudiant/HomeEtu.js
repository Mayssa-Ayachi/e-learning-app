import React from 'react'
import Button from 'react-bootstrap/Button';

export default function HomeEtu() {
  return (
    <>
    <div className="backgroundd">

        
        <div className="side"></div>
        <div> <h1 className='sidetitle'>E-Learning Application</h1></div><br/>
        <div>
            <h3 className='sidetitlee'><em>There is no substitue for hard work.<i>Thomas A. Edison</i></em></h3>
        </div>
        <br/><br/><br/><br/>
        <center>
        <Button type="button" href="/ListCourse" variant="primary" className='boutton'>Let's get started!</Button>
        </center>
    </div>
    </>

  )
}
