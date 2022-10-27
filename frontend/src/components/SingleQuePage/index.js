import axios from 'axios';
import React, { useState , useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../MainFrame/sidebar';
import "./index.css";
import MainQue from './MainQue';

function Index(){
  const {id} = useParams()
  const [question,setQuestion]= useState({})

  // console.log(id)
  useEffect(()=>{
    // console.log("fetching")
    fetchQuestion()
  },[])

  const fetchQuestion = async () =>{
    // console.log("fetching")
    const {data} = await axios.get(`http://localhost:8000/question/${id}`)
    // console.log(data)
    // console.log(typeof data)
    setQuestion(data[0])
    // console.log(data[0])
  }

  return(
    <div className="main-index">
       <div className="main-index-content">
       <Sidebar />
       <MainQue qid={id} question={question}/>
    </div>
    </div>
  );
}
export default Index;
