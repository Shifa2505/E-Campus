import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router , Switch , Route
}from 'react-router-dom';
// eslint-disable-next-line
import MainFrame from './components/MainFrame'
import SingleQuePage from './components/SingleQuePage';
import Question from './components/Add-Ques/Question';
// eslint-disable-next-line

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar />
    <Switch>
    <Route exact path='/question' component = {SingleQuePage} />
    <Route exact path='/add-question' component = {Question} />
    <Route exact path='/' component = {MainFrame} />
    </Switch>
    </Router>
    </div>
  );
}

export default App;
