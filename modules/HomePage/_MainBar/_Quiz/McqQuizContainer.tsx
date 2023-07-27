import React, { FC } from 'react'
import McqQuizQuestionList from './McqQuizQuestionList'
import McqQuizContextProvider, { McqQuizState } from '../contexts/McqQuizContextProvider'

type McqQuizContainerProps = {
  questions: Question[]
}

const McqQuizContainer:FC<McqQuizContainerProps> = ({ questions }) => {
  return (
    <McqQuizContextProvider quizState={convertToMcqQuizState(questions)}>
      <McqQuizQuestionList questions={questions}/>
    </McqQuizContextProvider>
  )
}

const convertToMcqQuizState = (questions: Question[]): McqQuizState => {
  return questions.map(q => ({
    questionId: q.id,
    selectedChoiceId: -1
  }))
}

export default McqQuizContainer
