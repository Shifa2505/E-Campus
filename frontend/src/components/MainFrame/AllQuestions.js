import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from '@mui/material';
import './css/AllQuestions.css';

function AllQuestions() {
  return (
    <div className="allquestion-frame">
      <div className="allquestion-content">
        <div className="allquestion-left">
          <div className="allquestion-opts">
            <div className="allquestion-opt">
              <p>0</p>
              <span>Votes</span>
            </div>
            <div className="allquestion-opt">
              <p>0</p>
              <span>Answers</span>
            </div>
            <div className="allquestion-opt">
              <small>0 Views</small>
            </div>
          </div>
        </div>
        <div className="que-ans">
          <Link to="/question" >Here is question title</Link>
          <div style={{ width: "80%", textAlign: "justify" }}>
            <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
          </div>
          <div style={{ display: "flex" }}>
            <span className="que-tags">tag1</span>
            <span className="que-tags">tag2</span>
            <span className="que-tags">tag3</span>
          </div>

          <div className="user">
            <small>Timestamp</small>
            <div className="user-details">
              <Avatar />
              <p>User name</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllQuestions;
