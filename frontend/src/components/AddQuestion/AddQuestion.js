import React, { Component } from 'react'
import {TagsInput} from "react-tag-input-component";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"
import "./AddQuestion.css"

export default class AddQuestion extends Component {
  constructor(props){
    super(props)
    this.props = props
    this.watchBody = this.watchBody.bind(this)
  }
  watchBody(){
    console.log(document.querySelector(".quill .ql-container .ql-editor").innerHTML)
  }
  render() {
    return (
        <div className="add-question">
        <div className="add-question-container">
          <div className="head-title">
            <h1>Ask a public question</h1>
          </div>
          <div className="question-container">
            <div className="question-options">
              <div className="question-option">
                <div className="title">
                  <h3>Title</h3>
                  <small>
                    Be specific and imagine you're asking a question to another
                    person
                  </small>
                  <input className='question-title-input'/>
                </div>
              </div>
              <div className="question-option">
                <div className="title">
                  <h3>Body</h3>
                  <small>
                    Include all the information someone would need to answer your
                    question
                  </small>
                  <ReactQuill theme="snow" onChange={this.watchBody}
                  />
                </div>
              </div>
              <div className="question-option">
                <div className="title">
                  <h3>Tags</h3>
                  <small>
                    Add up to 5 tags to describe what your question is about
                  </small>
                  <TagsInput/>
                </div>
              </div>
            </div>
          </div>
  
          <button className='submit-question'>
            Add your question
          </button>
        </div>
      </div>
    )
  }
}

