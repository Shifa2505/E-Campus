import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router, Route, Routes, 
} from 'react-router-dom';
// eslint-disable-next-line
import MainFrame from './components/MainFrame'
import SingleQuePage from './components/SingleQuePage';
import Question from './components/Add-Ques/Question';

import { Switch } from '@mui/material';
import Sidebar from './components/MainFrame/sidebar';
import Mainindex from './components/MainFrame';
import Single from './components/SingleQuePage';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import Test from './components/MainFrame/test';

// eslint-disable-next-line
//hello world

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path='/question' component={<SingleQuePage/>} />
          <Route exact path='/add-question' component={<Question/>} /> */}
          {/* <Route exact path="/" component={<MainFrame/>} /> */}
          {/* <Route path = "/" element = {<Sidebar/>} /> */}
          <Route path = "/" element = {<Mainindex/>} />
          <Route path = "question" element = {<Single/>} />
          <Route path = "/add-question" element ={<Question/>} />
          <Route path = "/login" element = {<Login/>} />
          <Route path = "/register" element = {<Register/>} />
          <Route path = "/test" element = {<Test/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App