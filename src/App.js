import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import { Container } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        maxWidth: "100%",
        height: "100vh",
        backgroundColor:"#c7dff6"
      }}
    >
      <NavBar/>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </Container>

  );
}

export default App;
