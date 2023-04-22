import { useState } from "react"
import Button from 'react-bootstrap/Button';
import { useSignup } from "../../hooks/useSignup"
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import back from "../../assets/back.png"

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password, role)
  }

  return (
    <>
    <div style={{ 
      backgroundImage: `url(${back})`, 
        height:'93vh',
        marginTop:'7vh',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }}></div>
    <form className="signup">
      <div style={{marginTop:'2vh'}}>
      <h3>Sign Up</h3>
      
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
      
    <Button disabled={isLoading} variant="dark" onClick={handleSubmit}>Sign Up</Button>
    {error && <div className="error">{error}</div>}
    </div>
    </form>
    </>
  )
}

export default Signup