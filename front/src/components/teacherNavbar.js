import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function teacherNavbar() {
  return (
    <>
      <br />
      
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Container>
           <Nav className="justify-content-center">
            <Nav.Link href="/teacherProfile">Profile</Nav.Link>
            <Nav.Link href="/teacherCourses">Courses</Nav.Link>
           </Nav>
        </Container>
      </Navbar>
 
    </>
  );
}

export default teacherNavbar;