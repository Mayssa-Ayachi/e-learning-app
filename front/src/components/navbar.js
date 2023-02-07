import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbaar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <Navbar bg="light" fixed="top" variant="light">
        <Container>
          <Navbar.Brand>E-learning-app</Navbar.Brand>
          {user && (
          <Nav className="justify-content-end  d-flex align-items-center">
            <span className="mx-2">{user.email}</span>
            <Button variant="outline-dark" onClick={handleClick}>Logout</Button>
            </Nav>
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