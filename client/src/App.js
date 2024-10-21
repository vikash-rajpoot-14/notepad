import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/Home';
import { Box, Container } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import LandingPage from './components/LandingPage';
import backgroundImage from './static/images/stephen-walker-onIXxjH56AA-unsplash.jpg';
function App() {
  return (
    <div>
      <Container
        style={{
          maxWidth: "100%",
          height: "100vh",
          margin: "0px",
          padding: "0px",
          background: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"
        }}
      >
      <NavBar />
        <Container style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          // backgroundColor: "#c7dff6",
          maxWidth: "100%",
          height: "94%",
        }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="Home" element={<Home />} />
          </Routes>
        </Container>
      </Container>
    </div>

  );
}

export default App;
