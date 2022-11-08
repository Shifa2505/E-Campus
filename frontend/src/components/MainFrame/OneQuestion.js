// import { ThirtyFpsSelect } from '@mui/icons-material'
import {Link} from 'react-router-dom';
import { Avatar } from '@mui/material';
import React, { Component } from 'react'

export default class OneQuestion extends Component{
    constructor(props){
        super(props)
        this.props = props
        // this.url = `/question/${this.props.url}`;
        // console.log(this.props.answers)
      }
      getQuestionVotes(){
        let count = 0;
        this.props.answers.map((answer)=>{
          count+=answer.upvotes
          count+=answer.downvotes
        })
        return count;
      }
      render(){
        // console.log(this.url)
        // console.log(this.props.url)y
        // let url = `/questions/${this.props.question}`
        // console.log(this.props.tags)
        const tagComponents = this.props.tags.map((x)=><span key={x} className="que-tags">{x}</span>)
      return (
        <div className='allquestion-content'>
        <div className="allquestion-left">
     <div className="allquestion-opts">
     <div className="allquestion-opt">
     <p>{true && this.getQuestionVotes()}</p>
     <span>Votes</span>
     </div>
     <div className="allquestion-opt">
     <p>{this.props.answers.length}</p>
     <span>Answers</span>
     </div>
     <div className="allquestion-opt">
     <small>{this.props.views} Views</small>
     </div>
     </div>
     </div>
        <div className="que-ans">
         <Link to={"/question/"+this.props.url}>{this.props.title}</Link>
         <div style={{width: "80%" , textAlign:"justify" }}>
         <div dangerouslySetInnerHTML={{__html:this.props.body}}></div>
         </div>
         <div style={{display: "flex"}}>
            {tagComponents}
            {/* <span className="que-tags">Tag 1</span>
            <span className="que-tags">Tag 2</span>
            <span className="que-tags">Tag 3</span> */}
         </div>

         <div className="user">
         <small>{new Date(this.props.timestamp).toDateString()}</small>
         <div className="user-details">
         <Avatar />
         <p>{this.props.user}</p>
         </div>
         </div>
         </div>
         </div>
      )
    }
}
