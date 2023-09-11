import React, { useContext } from 'react'
import { StatBarContext } from '../contexts/StatBarContextProvider';
import QuizStatBar from './QuizStatBar';
 
const StatBar = () => {
  const [quizStat, ] = useContext(StatBarContext);

  return (
    <div className='flex p-2 m-2'>
      <QuizStatBar quizStat={quizStat}/>
    </div>
  )
}

export default StatBar;