import React, { FC } from 'react'
import McqQuizContextProvider, { McqQuizItemState, McqQuizState } from '../contexts/McqQuizContextProvider'
import McqQuizContainer from './McqQuizContainer';

type McqQuizManagerProps = {
  questions: Question[]
}

const McqQuizManager:FC<McqQuizManagerProps> = ({ questions }) => {
  const quizState:McqQuizState = {
    isSubmitted: false,
    itemsState: convertToMcqQuizState(questions),
    timeTaken: 0,
  }

  return (
    <McqQuizContextProvider quizState={quizState}>
      <McqQuizContainer questions={questions} />
    </McqQuizContextProvider>
  )
}

const convertToMcqQuizState = (questions: Question[]): McqQuizItemState[] => {
  return questions.map(q => ({
    questionId: q.id,
    selectedChoiceId: -1
  }))
}

export default McqQuizManager
