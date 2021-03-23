import React from 'react';
import {BrowserRouter as Router } from 'react-router-dom';
import MinionsPage from './pages/minions_page/minions_page';
import "./App.css";

export const App = () => (
  <Router>
      <div>
       <MinionsPage/>
      </div>
  </Router>
);

export default App;
