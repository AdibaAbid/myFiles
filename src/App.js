import React from 'react';
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'


import './App.css';

function App() {
  return (
    <div className="App">
    
    <ul className="header">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
    <div className="content">
      <Contact/>
    </div>
    </div>
  );
}

export default App;
