import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Signup from './pages/Signup/Signup';
import Dashboard from './pages/Dashboard/Dashboard';
import Login from './pages/Login/Login';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';
import ForgotPassword from './pages/ForgotPassword/ForgotPassword';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { AuthProvider } from './contexts/AuthContext';
import './styles/index.scss';


const App = () => {
  return (
    <div className="full-page-container">
      <div className="full-page-card-container">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Dashboard} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  )
}

export default App;
