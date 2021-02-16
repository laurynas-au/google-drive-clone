import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Alert, Button, Card, CardFooter, Container } from "../../components";
import { useAuth } from "../../contexts/AuthContext";

const Profile = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogOut = async () => {
    setError("");
    try {
      await logout();
      history.pushState("/login");
    } catch {
      setError("Failed to log out");
    }
  };
  return (
    <Container type="centered-card">
      <Card>
        <h2>Profile</h2>
        {error && <Alert type="danger">{error}</Alert>}
        <strong>Email: </strong> {currentUser.email}
        <Link to="/update-profile">
          <Button buttonStyle="full-width">Update profile</Button>
        </Link>
        <CardFooter>
          <Button buttonStyle="text" onClick={handleLogOut}>
            Log Out
          </Button>
        </CardFooter>
      </Card>
    </Container>
  );
}

export default Profile;