import React, { FC, useState } from 'react'
import QuestionCard from './QuestionCard';
import axios from 'axios';
import { BASE_URL } from '@/modules/common/constants/base-url';

interface Props {
  questions: Question[];
  onUpdateQuestion: (question: UpdateQuestionRequestBody) => void;
}

const QuestionList:FC<Props> = ({ questions, onUpdateQuestion }) => {
  return (
    <div>
    {
      questions.map((q, i) => (
        <QuestionCard 
          key={q.id || i} 
          question={q} 
          onUpdate={onUpdateQuestion} />
      ))
    }
    </div>
  )
}

export default QuestionList
