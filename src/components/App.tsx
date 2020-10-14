import React from 'react';
import './App.scss';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './Home/Home';

function App() {
  return (
    <BrowserRouter>
      <Route path='/' component={Home} />
    </BrowserRouter>
  );
}

export default App;
