import React from 'react'
import {Bookmark} from '@mui/icons-material';
import {History} from '@mui/icons-material';
import { Avatar } from '@mui/material';
import axios from 'axios';

export default function Answer(props) {
  async function upvote(){
    console.log(props)
    let request = {}
    request["question"] = props.question
    request["answer_index"] = props.index
    let {data} = await axios.post("http://localhost:8000/upvote",request)
    // console.log(data)
    // if(data["status"]==="ok"){
    //   console.log("upvote done")
    // }
    window.location.reload()
  }
  async function downvote(){
    console.log(props)
    let request = {}
    request["question"] = props.question
    request["answer_index"] = props.index
    let {data} = await axios.post("http://localhost:8000/downvote",request)
    // console.log(data)
    // if(data["status"]==="ok"){
    //   console.log("downvote done")
    // }
    window.location.reload()
  }
  return (
    <div className="all-questions-container"
                  style={{
                    marginTop:"0px",
                  }}
                  >
                    <div className="all-questions-left">
                      <div className="all-options">
                        <p className="arrow" onClick={upvote}>▲</p>

                        <p className="arrow">{props.votes}</p>

                        <p className="arrow" onClick={downvote}>▼</p>

                        <Bookmark style={{color: "rgba(0, 0, 0, 0.25)",
                        fontSize: "large",
                        margin: "5px 0", }}/>

                        <History style={{color: "rgba(0, 0, 0, 0.25)",
                        fontSize: "large",
                        margin: "5px 0", }}/>
                      </div>
                    </div>
                    <div className="question-answer">
                    <p dangerouslySetInnerHTML={{__html:props.body}}></p>
                      <div className="user">
                        <small>
                          asked "{props.time}"
                        </small>
                        <div className="user-details">
                          <Avatar />
                          <p>
                          {props.user}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
  )
}
