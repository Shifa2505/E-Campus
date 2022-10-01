import React from 'react';
import './css/index.css';
import Main from './main';
import Sidebar from './sidebar';

function Mainindex(){
  return(
    <div className="main-index">
       <div className="main-index-content">
       <Sidebar/>
       <Main/>
      </div>
    </div>
  );
}
export default Mainindex;
