import React from 'react';
import { FilterList } from "@mui/icons-material";
import AllQuestions from "./AllQuestions";
import { Link } from 'react-router-dom';
import "./css/Main.css";

function Main() {
  return (
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
                <Link to="">Newest</Link>
              </div>
              <div className="main-frame-tab">
                <Link to="">Active</Link>
              </div>
              <div className="main-frame-tab">
                <Link to="">More</Link>
              </div>
            </div>
            <div className="main-frame-filteritem">
              <FilterList style={{ margin: "auto" }} />
              <p>Filter</p>
            </div>
          </div>
        </div>
        <div className="questions">
          <div className="question">
            <AllQuestions />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Main;
