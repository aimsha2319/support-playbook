import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Home from './components/Home';
import Category from './components/Category';
import Scenario from './components/Scenario';
import styled from 'styled-components';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding-top: 64px; /* Height of the header */
`;

const MainContent = styled.main`
  flex: 1;
  padding: 1.5rem;
  margin-left: 0;
  @media (min-width: 768px) {
    margin-left: 16rem;
  }
`;

const AppContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const App = () => {
  return (
    <Router basename="/support-playbook">
      <AppContainer>
        <Header />
        <AppContent>
          <Sidebar />
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category/:slug" element={<Category />} />
              <Route path="/scenario/:id" element={<Scenario />} />
            </Routes>
          </MainContent>
        </AppContent>
      </AppContainer>
    </Router>
  );
};

export default App;
