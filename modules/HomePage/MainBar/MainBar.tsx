import React, { FC } from 'react'
import MainBarHeader from './MainBarHeader';
import QuestionManager from './Question/QuestionManager';
import { DEFAULT_NULL_STR } from '@/modules/common/constants/constants';


interface Props {
  topic: string;
  questions: Question[];
}

const MainBar:FC<Props> = ({ topic, questions }) => {

  console.log("from main bar")
  console.log(questions)

  return (
    <div className='flex flex-col p-2 m-2'>
      <MainBarHeader left="Topic" right={topic} />
      { topic && <QuestionManager questions={questions} topic={topic} /> }
    </div>
  )
}

export default MainBar
