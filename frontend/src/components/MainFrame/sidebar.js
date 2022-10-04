import React from 'react';
import {Public} from '@mui/icons-material';
// import {Stars} from '@mui/icons-material';
import QuizIcon from '@mui/icons-material/Quiz';
import HomeIcon from '@mui/icons-material/Home';
import "./css/Sidebar.css";
import {Link} from 'react-router-dom';
// import Test from "./test";

function Sidebar(){
  return(
    <div className="sideList">
    <div className="sideList-container">
    <div className="sideList-opts">
    <div className="sideList-opt">
    <div className="sideLink">
    <div className="sideTags">
    <HomeIcon style={{color:"rgba(245,162,9)", marginRight:"5px" , fontSize:"1rem"}}/>
    <Link to="/home">Home</Link>
    </div>
    </div>
    </div>

    <div className="sideList-opt">
    <p>PUBLIC</p>
    <div className="sideLink">
    <div className="sideTags">
        <Public style={{color:"rgba(245,162,9)", marginRight:"5px" , fontSize:"1rem"}}/>
        <Link to="/">Questions</Link>
    </div>
    <div className="public-tag">
        <p>Tags</p>
        <p>Users</p>
    </div>
    </div>
    </div>

        <div className="sideList-opt">
        <div className="sideLink">
        <div className="sideTags">
        <QuizIcon style={{color:"rgba(245,162,9)", marginRight:"5px" , fontSize:"1rem"}}/>
        <p className="test">Test</p>
        </div>
      <div className="public-tag">
            <Link to="/test">Start Test</Link>
        </div>
        </div>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Sidebar;
