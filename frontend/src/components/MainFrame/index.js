import React from 'react';
import './css/index.css';
import Main from './main';
import Sidebar from './sidebar';

function index(){
  if(window.localStorage.getItem("loginOk")==="true"){
    return(
      <div className="main-index">
         <div className="main-index-content">
         <Sidebar />
         <Main />
      </div>
      </div>
    );
  }
  else{
    return(<h1>Cannot visit homepage without login</h1>)
  }
}
export default index;
