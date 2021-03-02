import React from "react";
import { Container, Navbar } from "../../components";
import AddFolderButton from "../../features/AddFolderButton/AddFolderButton";

const Dashboard = (props) => {
  return (
    <>
      <Navbar />
      <Container type="content">
        <h3>Content</h3>
        <AddFolderButton />
      </Container>     
    </>
  );
};

export default Dashboard;
