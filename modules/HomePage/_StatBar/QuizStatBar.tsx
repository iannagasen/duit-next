import { BASE_URL } from '@/modules/common/constants/base-url';
import React, { FC, useEffect, useState } from 'react'

type Props = {
  quizStat: {
    dateTaken: string, 
    score: number, 
    totalItems: number
  }[] | null;
}
const QuizStatBar:FC<Props> = (props) => {
  
  return (
    <div>
      {props.quizStat?.map(q => (
        <div key={q.dateTaken}>
          <div>{q.dateTaken}</div>
          <div>{q.score}</div>
          <div>{q.totalItems}</div>
        </div>
      ))}
    </div>
  )
}

export default QuizStatBar
