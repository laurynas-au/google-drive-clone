import React, { useRef, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { Alert, Button, Card, CardFooter } from '../../components';
import './UpdateProfile.scss';

const UpdateProfile = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfRef = useRef();
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = () => {
    setLoading(true);
    setError('');

    if (passwordRef.current.value !== passwordConfRef.current.value) {
      return setError("Passwords don't match");
    }

    const promises = [];

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }
    Promise.all(promises)
    .then(() => {
      history.push('/');
    })
    .catch(() => {
      setError('Failed to update account');
    })
    .finally(() => {
      setLoading(false);
    })
  }

  return (
      <Card>
        <form className="update-profile">
          <h2 className="update-profile__title">Sign Up</h2>
          {error && <Alert type="danger">{error}</Alert>}
          <label htmlFor="email" className="update-profile__email-label">Email</label>
          <input id="email" type="email" className="update-profile__email-input" ref={emailRef} required defaultValue={currentUser.email}></input>
          <label htmlFor="password" className="update-profile__password-label">Password</label>
          <input id="password" type="password" className="update-profile__password-input" ref={passwordRef} placeholder="Leave blank to keep the same"></input>
          <label htmlFor="password-conf" className="update-profile__password-conf-label">Password confirmation</label>
          <input id="password-conf" type="password" className="update-profile__password-conf-input" ref={passwordConfRef} placeholder="Leave blank to keep the same"></input>
          <Button disabled={loading} buttonStyle="full-width" onClick={handleSubmit}>Update Profile</Button>
        </form>
        <CardFooter><Link to="/">Cancel</Link></CardFooter>
      </Card>
  )
}

export default UpdateProfile;