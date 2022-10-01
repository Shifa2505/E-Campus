import React from 'react';
import Sidebar from '../MainFrame/sidebar';
import "./index.css";
import MainQue from './MainQue';

function Single(){
  return(
    <div className="main-index">
       <div className="main-index-content">
       <Sidebar />
       <MainQue />
    </div>
    </div>
  );
}
export default Single;
