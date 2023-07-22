import React, { FC } from 'react'
import { QuestionList } from './QuestionList'
import { QuestionManager } from './QuestionManager'
import MainBarHeader from './MainBarHeader'

interface Props {
  type: string | null,
  content: Mcq[]
}

export const MainBar:FC<Props> = ({type, content}) => {
  return (
    <div className='border border-red-500 p-2 m-2'>
      <MainBarHeader left='Current Topic' right='AWS' />
      { 
        type === 'questions' &&
        <QuestionList questions={content}/>
      }
      <QuestionManager />
    </div>
  )
}
