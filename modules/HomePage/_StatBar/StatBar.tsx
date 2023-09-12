import React, { useContext } from 'react'
import { StatBarContext } from '../contexts/StatBarContextProvider';
import QuizStatBar from './QuizStatBar';
 
const StatBar = () => {
  const [stat, ] = useContext(StatBarContext);

  return (
    <div className='p-2 m-2'>
      { stat.type === 'QUIZ_STAT' && <QuizStatBar quizStat={stat}/> }
    </div>
  )
}

export default StatBar;