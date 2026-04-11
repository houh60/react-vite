import React from 'react';
import './App.css';
import Logo from './components/Logo/Logo.jsx';
import CoreConcepts from './components/CoreConcepts/CoreConcepts';
import Examples from './components/Examples/Examples.jsx';

const reactDescriptions = ['Fundamental', 'Crucial', 'Core'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <>
      <Logo />
      <h1>{description} Vite + React</h1>
      <CoreConcepts />
      <Examples />
    </>
  );
}

export default App;
