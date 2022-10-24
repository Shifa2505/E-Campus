import React from 'react'
import {Bookmark} from '@mui/icons-material';
import {History} from '@mui/icons-material';
import { Avatar } from '@mui/material';

export default function Answer(props) {
  return (
    <div className="all-questions-container"
                  style={{
                    marginTop:"0px",
                  }}
                  >
                    <div className="all-questions-left">
                      <div className="all-options">
                        <p className="arrow">▲</p>

                        <p className="arrow">0</p>

                        <p className="arrow">▼</p>

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
