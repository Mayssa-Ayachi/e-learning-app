import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Navbaar = () => {

  return (
    <Navbar bg="light" fixed="top" variant="light">
        <Container>
          <Navbar.Brand>E-learning-app</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/signup">Signup</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  )
}

export default Navbaar