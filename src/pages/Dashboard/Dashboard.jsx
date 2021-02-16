import React from "react";
// import PropTypes from 'prop-types';
import { Container, Navbar } from "../../components";

const Dashboard = (props) => {
  return (
    <>
      <Navbar />
      <Container type="content">
        <h3>Content</h3>
      </Container>     
    </>
  );
};

// Dashboard.propTypes = {

// }

export default Dashboard;
