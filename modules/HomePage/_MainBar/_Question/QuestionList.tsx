import React, { FC, useContext, useState } from 'react'
import QuestionCard from './QuestionCard';
import axios from 'axios';
import { BASE_URL } from '@/modules/common/constants/base-url';
import { QuestionsContext } from '../contexts/QuestionContextProvider';
import YScrollable from '@/components/layout/yScrollable';

// interface Props {
//   questions: Question[];
//   onUpdateQuestion: (question: UpdateQuestionRequestBody) => void;
// }

const QuestionList:FC<{}> = () => {
  const [questions,] = useContext(QuestionsContext);

  return (
    <YScrollable>{ 
    questions.map((q, i) => (
      <QuestionCard key={q.id || i} question={q} />
    ))}
    </YScrollable>
  )
}

export default QuestionList
