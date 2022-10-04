import React from 'react';

import Sidebar from './sidebar';
// import Quiz from '@mui/icons-material/Quiz';
// import Quiz from '../MainFrame/Quiz/components';
import Quiz from "./Quiz/components/Quiz";
import { QuizProvider } from "./Quiz/contexts/quiz";
import QuizIndex from './Quiz';

function Test() {
  return (
    <div className="test-index">
      <div className="test-index-content">
        {/* <Sidebar /> */}
        <QuizIndex />
      </div>
    </div>
  );
}

export default Test;
