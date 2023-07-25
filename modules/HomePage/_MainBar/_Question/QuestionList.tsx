import React, { FC, useContext, useState } from 'react'
import QuestionCard from './QuestionCard';
import axios from 'axios';
import { BASE_URL } from '@/modules/common/constants/base-url';
import { QuestionsContext } from '../contexts/QuestionContextProvider';

// interface Props {
//   questions: Question[];
//   onUpdateQuestion: (question: UpdateQuestionRequestBody) => void;
// }

const QuestionList:FC<{}> = () => {
  const [questions,] = useContext(QuestionsContext);

  return (
    <div>
    {
      questions.map((q, i) => (
        <QuestionCard key={q.id || i} question={q} />
      ))
    }
    </div>
  )
}

export default QuestionList
