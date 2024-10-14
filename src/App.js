import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import Register from './components/Register';
import { Container } from '@chakra-ui/react'

function App() {
  return (
    <Container
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%",
        height: "100vh"
      }}
    >
      <Routes>
        <Route path="/" element={<Register />} />
        <Route path="Home" element={<Home />} />
      </Routes>
    </Container>

  );
}

export default App;
