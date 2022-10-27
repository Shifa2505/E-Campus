import React, {useState, useEffect} from 'react';
import {FilterList} from "@mui/icons-material";
import AllQuestions from "./AllQuestionBackup";
import {Link} from 'react-router-dom';
import "./css/Main.css";
import axios from "axios"

function Main(){
  const [questions,getQuestions] = useState([])
  const [sort, setSort] = useState('newest')
  
  useEffect(()=>{
      // console.log("fetching")
      fetchData()
    },[sort])
    
    const fetchData = async ()=>{
      const {data} = await axios.get("http://localhost:8000/getQuestions/"+sort)
      getQuestions(data)
    }
  return(
    <div className="main-frame">
    <div className="main-frame-content">
    <div className="main-frame-start">
    <h2>All Questions</h2>
    <Link to="/add-question"><button>Ask Question</button></Link>
    </div>
    <div className="main-frame-desc">
    <p>All question stat</p>
    <div className="main-frame-filter">
    <div className="main-frame-tabs">
    <div className="main-frame-tab">
    <span onClick={()=>{setSort("newest")}}>Newest</span>
    </div>
    <div className="main-frame-tab">
    <span onClick={()=>{setSort("views")}}>Active</span>
    </div>
    <div className="main-frame-tab">
    <span onClick={()=>{setSort("oldest")}}>Oldest</span>
    </div>
    </div>
    <div className="main-frame-filteritem">
    <FilterList style={{ margin:"auto"}}/>
    <p>Filter</p>
    </div>
    </div>
    </div>
    <div className="questions">
    <div className="question">
    <AllQuestions questions={questions}/>
    </div>
    </div>
    </div>
    </div>
  );
}
export default Main;
