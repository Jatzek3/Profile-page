import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import Navigation from './Navigation/Navigation'

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/' component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
