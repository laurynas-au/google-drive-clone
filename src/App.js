import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Signup from "./pages/Signup/Signup";
import Profile from "./pages/Profile/Profile";
import Login from "./pages/Login/Login";
import UpdateProfile from "./pages/UpdateProfile/UpdateProfile";
import ForgotPassword from "./pages/ForgotPassword/ForgotPassword";
import Dashboard from "./pages/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { Container } from "./components";
import { AuthProvider } from "./contexts/AuthContext";
import "./styles/index.scss";


const App = () => {
  return (
    <Container type="full-page">
      <Router>
        <AuthProvider>
          <Switch>
            {/* Drive */}
            <PrivateRoute exact path="/" component={Dashboard} />
            {/* Profile */}
            <PrivateRoute path="/user" component={Profile} />
            <PrivateRoute path="/update-profile" component={UpdateProfile} />
            
            {/* Auth */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/forgot-password" component={ForgotPassword} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
};

export default App;
