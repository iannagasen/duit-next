import React, { FC } from 'react'

interface Props {
  questions: Mcq[]
}

export const QuestionList:FC<Props> = ({questions}) => {
  return (
    <>
    {
      questions.map(q => (
        <div key={q.id}>{q.question}</div>
      ))
    } 
    </>
  )
}
