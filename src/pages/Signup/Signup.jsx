import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Alert, Button, Card, CardFooter, Container } from '../../components';
import './Signup.scss';


const Signup = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError("Passwords don't match");
    }
    try {
      setError('');
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
    } catch {
      setError('Failed to create an account');
    }
    setLoading(false);
  }

  return (
    <Container type="centered-card">
      <Card>
        <form className="signup">
          <h2 className="signup__title">Sign Up</h2>
          {error && <Alert type="danger">{error}</Alert>}
          <label htmlFor="email" className="signup__email-label">Email</label>
          <input id="email" type="email" className="signup__email-input" ref={emailRef} required></input>
          <label htmlFor="password" className="signup__password-label">Password</label>
          <input id="password" type="password" className="signup__password-input" ref={passwordRef} required></input>
          <label htmlFor="password-conf" className="signup__password-conf-label">Password confirmation</label>
          <input id="password-conf" type="password" className="signup__password-conf-input" ref={passwordConfRef} required></input>
          <Button disabled={loading} buttonStyle="full-width" onClick={handleSubmit}>Sign Up</Button>
        </form>
        <CardFooter><span>Already have an account? <Link to="/login">Log In</Link></span></CardFooter>
      </Card>
    </Container>
  )
}

export default Signup;