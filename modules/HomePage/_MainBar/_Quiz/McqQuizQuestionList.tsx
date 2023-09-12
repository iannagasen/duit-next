import React, { FC, useContext } from 'react'
import McqQuizQuestionCard from './McqQuizQuestionCard'
import YScrollable from '@/components/layout/yScrollable'

type McqQuizQuestionsListProps = {
  questions: Question[]
}

const McqQuizQuestionList:FC<McqQuizQuestionsListProps> = ({ questions }) => {

  return (
    <YScrollable>
      { questions.map(q => <McqQuizQuestionCard key={q.id} {...q} />) }
    </YScrollable>
  )
}

export default McqQuizQuestionList