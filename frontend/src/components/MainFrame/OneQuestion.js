// import { ThirtyFpsSelect } from '@mui/icons-material'
import {Link} from 'react-router-dom';
import { Avatar } from '@mui/material';
import React, { Component } from 'react'

export default class OneQuestion extends Component{
    constructor(props){
        super(props)
        this.props = props
      }
      render(){
        let url = `/questions/${this.props.question}`
        // console.log(this.props)
        const tagComponents = this.props.tags.map((x)=><span key={x} className="que-tags">{x}</span>)
      return (
        <div className='allquestion-content'>
        <div className="allquestion-left">
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
         <Link to={this.props.url}>{this.props.title}</Link>
         <div style={{width: "80%" , textAlign:"justify" }}>
         <div dangerouslySetInnerHTML={{__html:this.props.body}}></div>
         </div>
         <div style={{display: "flex"}}>
            {tagComponents}
         </div>

         <div className="user">
         <small>{this.props.timestamp}</small>
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
