import React, { FC, useContext, useState } from 'react'
import MainBarHeader from './MainBarHeader';
import QuestionManager from './_Question/QuestionManager';
import { DEFAULT_NULL_STR } from '@/modules/common/constants/constants';
import MainBarTab from './MainBarTab';
import McqQuizContainer from './_Quiz/McqQuizContainer';


interface Props {
  topic: string;
  questions: Question[];
}

const MainBar:FC<Props> = ({ topic, questions }) => {
  const [selectedTab, setSelectedTab] = useState<MainBarTab>('Questions');

  return (
    <div className='flex flex-col p-2 m-2'>
      <MainBarHeader left="Topic" right={topic} />
      { topic && <MainBarTab selected={selectedTab} onSelect={(t) => setSelectedTab(t)} /> }
      { topic && selectedTab === 'Questions' && <QuestionManager questions={questions} topic={topic} /> }
      { topic && selectedTab === 'Quiz' && <McqQuizContainer questions={questions} /> }
    </div>
  )
}

export default MainBar
