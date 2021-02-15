import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import './Login.scss';
import { Alert, Button, Card, CardFooter } from '../../components';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();


  const handleSubmit = async () => {
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push('/');
    } catch {
      setError('Failed to log in. Please check your username and password');
    }
    setLoading(false);
  }

  return (
      <Card>
        <form className="login">
          <h2 className="login__title">Log In</h2>
          {error && <Alert type="danger">{error}</Alert>}
          <label htmlFor="email" className="login__email-label">Email</label>
          <input id="email" type="email" className="login__email-input" ref={emailRef} required></input>
          <label htmlFor="password" className="login__password-label">Password</label>
          <input id="password" type="password" className="login__password-input" ref={passwordRef} required></input>
          <Button buttonStyle="full-width" disabled={loading} className="login__button" onClick={handleSubmit}>Log In</Button>
          <Link className="login__link" to="/forgot-password">Forgot password?</Link>
        </form>
        <CardFooter><span>Need an account? <Link to="/signup">Sign Up</Link></span></CardFooter>
      </Card>
  )
}

export default Login;