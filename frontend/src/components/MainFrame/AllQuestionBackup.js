import React, { Component, useEffect, useState } from 'react';
// import {Link} from 'react-router-dom';
// import { Avatar } from '@mui/material';
import './css/AllQuestions.css';
import axios from "axios"
import OneQuestion from './OneQuestion';

function AllQuestions(){
  const [questions,getQuestions] = useState([])
  
  useEffect(()=>{
      // console.log("fetching")
      fetchData()
    },[])
    
    const fetchData = async ()=>{
      const {data} = await axios.get("http://localhost:8000/getQuestions")
      getQuestions(data)
    }

    // console.log(questions)
  // let inner=""
  // const [inner,changeInner] = useState("")
  // async function getQuestions(){
  //   let prom = await fetch("http://localhost:8000/getQuestions")
  //   prom = await prom.json()
  //   console.log(prom)
  //   for(let x=0;x<prom.length;x++){
  //     let tag=""
  //     for(let y=0;y<prom[x].tags.length;y++){
  //       tag = tag + `<span class="que-tags">${prom[x].tags[y]}</span>`
  //     }
  //     // console.log(tag)
  //     // console.log(prom[x])
  //     inner = inner + `<div class="allquestion-content"><div class="allquestion-left"><div class="allquestion-opts"><div class="allquestion-opt"><p>0</p><span>Votes</span></div><div class="allquestion-opt"><p>0</p><span>Answers</span></div><div class="allquestion-opt"><small>0 Views</small></div></div></div><div class="que-ans"><a href="/question/${prom[x]._id}">${prom[x].title}</a><div style="width: 80%; text-align: justify;"><div>${prom[x].body}</div></div><div style="display: flex;">${tag}</div><div class="user"><small>${prom[x].created_at}</small><div class="user-details"><div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2s90m6-MuiAvatar-root"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-10mi8st-MuiSvgIcon-root-MuiAvatar-fallback" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg></div><p>${prom[x].user}</p></div></div></div></div>`
  //   }
  // }
  // getQuestions().then(()=>{
  //   // console.log(inner)
  //   document.querySelector(".allquestion-frame").innerHTML = inner
  // })
//   let questionDisplays = questions.map((question)=>{
//     <OneQuestion title={question.title} user={question.user} tags={question.tags} timestamp={question.created_at} body={question.body}/>
//   })
// console.log(questions)
  return(
  <div className="allquestion-frame">
    {questions.map((question)=>{
      // console.log(question._id)
      return(
    <OneQuestion key={question._id} 
    url={question._id}
    title={question.title} 
    user={question.user} 
    tags={question.tags} 
    timestamp={question.created_at} 
    body={question.body}/>)
  })}
  </div>)}
    

    //  <div className="allquestion-frame">
    //  <div className="allquestion-content" dangerouslySetInnerHTML={{__html:'<div class="allquestion-left"><div class="allquestion-opts"><div class="allquestion-opt"><p>0</p><span>Votes</span></div><div class="allquestion-opt"><p>0</p><span>Answers</span></div><div class="allquestion-opt"><small>0 Views</small></div></div></div><div class="que-ans"><a href="/question">Here is question title</a><div style="width: 80%; text-align: justify;"><div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div></div><div style="display: flex;"><span class="que-tags">tag1</span><span class="que-tags">tag2</span><span class="que-tags">tag3</span></div><div class="user"><small>Timestamp</small><div class="user-details"><div class="MuiAvatar-root MuiAvatar-circular MuiAvatar-colorDefault css-2s90m6-MuiAvatar-root"><svg class="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiAvatar-fallback css-10mi8st-MuiSvgIcon-root-MuiAvatar-fallback" focusable="false" aria-hidden="true" viewBox="0 0 24 24" data-testid="PersonIcon"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path></svg></div><p>User name</p></div></div></div>'}}>
    {/* <div className="allquestion-left">
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
     <div style={{width: "80%" , textAlign:"justify" }}>
     <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
     </div>
     <div style={{display: "flex"}}>
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
     </div> */}
    //  </div>
    //  </div>
//   );
// }

export default AllQuestions;
