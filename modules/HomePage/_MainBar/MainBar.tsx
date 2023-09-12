import React, { FC, useEffect, useState } from 'react'
import MainBarHeader from './MainBarHeader';
import QuestionManager from './_Question/QuestionManager';
import MainBarTab from './MainBarTab';
import McqQuizManager from './_Quiz/McqQuizManager';
import { useStatBar } from '../hooks/useStatBar';


interface Props {
  topic: string;
  questions: Question[];
}

const MainBar:FC<Props> = ({ topic, questions }) => {
  const [selectedTab, setSelectedTab] = useState<MainBarTab>('Questions');

  useStatBar({ 
    type: selectedTab === 'Quiz' ? 'QUIZ_STAT' : 'EMPTY', 
    quizTopic: topic
  });

  return (
    <div className='flex flex-col p-2 m-2'>
      <MainBarHeader left="Topic" right={topic} />
      { topic && <MainBarTab selected={selectedTab} onSelect={(t) => setSelectedTab(t)} /> }
      { topic && selectedTab === 'Questions' && <QuestionManager questions={questions} topic={topic} /> }
      { topic && selectedTab === 'Quiz' && <McqQuizManager questions={questions} /> }
    </div>
  )
}

export default MainBar
