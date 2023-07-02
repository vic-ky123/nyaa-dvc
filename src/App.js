// Common imports ---
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

// Component imports ---
import Navigation from './Navigation/Navigation';

// Style imports ---
import "./styles/App.css";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App;