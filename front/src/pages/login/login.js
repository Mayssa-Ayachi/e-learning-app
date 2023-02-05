import { useState } from "react"
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useLogin } from "../../hooks/useLogin"

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const {login, error, isLoading} = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password, role)
  }

  return (
    <form className="login">
      <h3>Log in</h3>
      
      <label>Email address:</label>
      <input 
        type="email" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
      <label>Password:</label>
      <input 
        type="password" 
        onChange={(e) => setPassword(e.target.value)} 
        value={password} 
        autoComplete="on"
      />

<fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
          I am:
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="An admin"
              name="formHorizontalRadios"
              onChange={()=>{setRole("admin")}}
              id="An admin"
            />
            <Form.Check
              type="radio"
              label="A teacher"
              name="formHorizontalRadios"
              onChange={()=>{setRole("teacher")}}
              id="A teacher"
            />
            <Form.Check
              type="radio"
              label="A student"
              name="formHorizontalRadios"
              onChange={()=>{setRole("student")}}
              id="A student"
            />
          </Col>
        </Form.Group>
      </fieldset>
      

    <Button variant="dark" disabled={isLoading} onClick={handleSubmit}>Log In</Button>
    {error && <div className="error">{error}</div>}
    </form>
  )
}

export default Login