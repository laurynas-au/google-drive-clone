import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./ForgotPassword.scss";
import { Alert, Button, Card, CardFooter, Container } from "../../components";

const ForgotPassword = () => {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your inbox for password reset instructions");
    } catch {
      setError(
        "Failed to reset password. Please check if your email address is correct"
      );
    }
    setLoading(false);
  };

  return (
    <Container type="centered-card">
      <Card>
        <form className="login">
          <h2 className="login__title">Password Reset</h2>
          {error && <Alert type="danger">{error}</Alert>}
          {message && <Alert type="success">{message}</Alert>}
          <label htmlFor="email" className="login__email-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="login__email-input"
            ref={emailRef}
          ></input>
          <Button
            buttonStyle="full-width"
            disabled={loading}
            className="login__button"
            onClick={handleSubmit}
          >
            Reset Password
          </Button>
          <Link className="login__link" to="/login">
            Log In
          </Link>
        </form>
        <CardFooter>
          <span>
            Need an account? <Link to="/signup">Sign Up</Link>
          </span>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default ForgotPassword;
