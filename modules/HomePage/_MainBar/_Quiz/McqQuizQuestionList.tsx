import React, { FC, useContext } from 'react'
import McqQuizQuestionCard from './McqQuizQuestionCard'

type McqQuizQuestionsListProps = {
  questions: Question[]
}

const McqQuizQuestionList:FC<McqQuizQuestionsListProps> = ({ questions }) => {

  return (
    <div>
      { questions.map(q => <McqQuizQuestionCard key={q.id} {...q} />) }
    </div>
  )
}

export default McqQuizQuestionList
