import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import { useLogout } from '../hooks/useLogout'

const Navbaar = () => {
  const { logout } = useLogout()

  const handleClick = () => {
    logout()
  }

  return (
    <Navbar bg="light" fixed="top" variant="light">
        <Container>
          <Navbar.Brand>E-learning-app</Navbar.Brand>
          
          <Nav className="justify-content-end">
            <Button variant="outline-dark" onClick={handleClick}>Logout</Button>
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbaar