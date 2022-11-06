import React, {useState, useEffect} from 'react';
import {FilterList, SettingsAccessibility} from "@mui/icons-material";
import AllQuestions from "./AllQuestions";
import {Link} from 'react-router-dom';
// import "./css/Main.css";
import SearchIcon from '@mui/icons-material/Search';
import axios from "axios"

function MainContent(){
  const [questions,getQuestions] = useState([])
  const [sort, setSort] = useState('newest')
  const [tag, setTag] = useState('')
  
  useEffect(()=>{
      // console.log("fetching")
      fetchData()
    },[sort,tag])
    
    const fetchData = async ()=>{
        // console.log("http://localhost:8000/getQuestions/tags"+sort+"/"+tag)
      const {data} = await axios.get("http://localhost:8000/getQuestions/tags/"+sort+"/"+tag)
      getQuestions(data)
    }
  return(
    
    <div className="main-frame">
        <div className="nav-centre mx-auto">
      <ul className="navbar-nav">
      <li className="nav-item mx-2 my-3 nav-search">
      <form className="d-flex" role="search" onSubmit={(e)=>{
        e.preventDefault()
        // console.log("searched for tag")
        let tagValue = e.target.querySelector("input").value
        setTag(tagValue)
        }}>
      <SearchIcon style={{color:"#ccc", marginTop:"6px"}}/>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      </form>
      </li>
      </ul>
      </div>
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
export default MainContent;
