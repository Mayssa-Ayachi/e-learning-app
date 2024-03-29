import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbaar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const { role } = {...user}

  const handleClick = () => {
    logout()
  }

  return (
    <Navbar bg="light" fixed="top" variant="light">
        <Container>
          <Navbar.Brand>E-learning-app</Navbar.Brand>
          {user && role==="teacher" && (
            <>
              <Nav className="justify-content-center">
              <Nav.Link href="/teacherProfile">Profile</Nav.Link>
              <Nav.Link href="/teacherCourses">Courses</Nav.Link>
            </Nav>
            <Nav className="justify-content-end  d-flex align-items-center">
              <span className="mx-2">{user.email}</span>
              <Button variant="outline-dark" onClick={handleClick}>Logout</Button>
              </Nav>
            </>
           
          )}
          
          {user && role==="admin" && (
            <>
              <Nav className="justify-content-center">
              <Nav.Link href="/teachersList">Teachers</Nav.Link>
              <Nav.Link href="/studentsList">Students</Nav.Link>
              </Nav>
            <Nav className="justify-content-end  d-flex align-items-center">
              <span className="mx-2">{user.email}</span>
              <Button variant="outline-dark" onClick={handleClick}>Logout</Button>
              </Nav>
            </>)
          }

          {user && role==="student" && (
            <>
              <Nav className="justify-content-center">
              <Nav.Link href="/studentProfile">Profile</Nav.Link>
              <Nav.Link href="/allCourses">AllCourses</Nav.Link>
              <Nav.Link href="/studentCourses">MyCourses</Nav.Link>
            </Nav>
            <Nav className="justify-content-end  d-flex align-items-center">
              <span className="mx-2">{user.email}</span>
              
              <Button variant="outline-dark" onClick={handleClick}><Nav.Link href="/login">Logout</Nav.Link></Button>
              </Nav>
              </>
          )}
           
          {!user && (
            <Nav className="justify-content-end">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
           
            </Nav>
          )}    
                
        </Container>
      </Navbar>
  )
}

export default Navbaar