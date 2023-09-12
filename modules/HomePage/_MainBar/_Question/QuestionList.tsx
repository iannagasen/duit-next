import React, { FC, useContext, useState } from 'react'
import QuestionCard from './QuestionCard';
import { QuestionsContext } from '../contexts/QuestionContextProvider';
import YScrollable from '@/components/layout/yScrollable';

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
