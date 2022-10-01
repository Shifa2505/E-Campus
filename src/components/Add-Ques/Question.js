import React from 'react';
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {TagsInput} from "react-tag-input-component";
import './Question.css';
function Question(){
  return(
    <div className="add-que">
    <div className="add-que-content">
    <div className="add-que-title">
    <h1>Ask a Public Question</h1>
    </div>
    <div className="que-container">
    <div className="add-que-opts">
    <div className="add-que-opt">
    <div className="opt-title">
    <h3>Title</h3>
    <small>Be specific and imaging you are asking a question to another person</small>
    <input type="text" placeholder="Add question title" />
    </div>
    </div>
    <div className="add-que-opt">
    <div className="opt-title">
    <h3>Body</h3>
    <small>Include all the information someone should need to answer your question</small>
    <ReactQuill className="react-quill" theme="snow" />
    </div>
    </div>
    <div className="add-que-opt">
    <div className="opt-title">
    <h3>Tags</h3>
    <small>Add upto 5 tags to describe what your question is about</small>
    <TagsInput className="tags" name="tags" placeholder="Press enter to add new tags" />
    </div>
    </div>
    </div>
    </div>
    <button className="button">Add your question</button>
    </div>
    </div>
  );
}

export default Question;
