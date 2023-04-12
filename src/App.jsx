import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import PartsList from "./components/pages/PartsList";

const App = () => {
  return (
    <Router>
      <Header />
      <PageWrapper>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/components-list" element={<PartsList />}></Route>
        </Routes>
      </PageWrapper>
    </Router>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  margin: 80px 0 0 0;
  padding: 40px;
  background-color: #282c34;
  text-align: center;
`;

export default App;
