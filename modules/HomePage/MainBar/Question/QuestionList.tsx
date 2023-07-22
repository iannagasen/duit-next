import React, { FC, useState } from 'react'
import QuestionCard from './QuestionCard';

interface Props {
  questions: Question[];
  onUpdateQuestion: (question: Question) => void;
}

const QuestionList:FC<Props> = ({ questions, onUpdateQuestion }) => {
  // const [activeQuestionId, setActiveQuestionId] = useState<number>();

  const handleQuestionUpdate = (question: Question) => {
    onUpdateQuestion(question);
    // setActiveQuestionId(question.id);
  }

  return (
    <div>
    {
      questions.map((q, i) => (
        <QuestionCard 
          key={q.id || i} 
          question={q} 
          onUpdate={handleQuestionUpdate} />
      ))
    }
    </div>
  )
}

export default QuestionList
