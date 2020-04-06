import React from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';

import Navbar from "./components/navbar.component";
import Music from "./components/music.component";
import CreateMusic from "./components/create-music.component";

function App() {
  return (
    <Router>
          <Navbar />
          <Route path="/" exact component={Music} />
          <Route path="/create" exact component={CreateMusic} />
    </Router>
  );
}

export default App;
