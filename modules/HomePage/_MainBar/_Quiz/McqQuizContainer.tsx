import React, { FC, useContext } from 'react'
import McqQuizQuestionList from './McqQuizQuestionList'
import McqQuizContextProvider, { McqQuizContext, McqQuizItemState, McqQuizState } from '../contexts/McqQuizContextProvider'
import { Button } from '@/components/ui/button'
import { calculateScore } from '../util/calculateScore'
import ScoreTallyContainer from './ScoreTallyContainer'

type McqQuizContainerProps = {
  questions: Question[]
}

const McqQuizContainer:FC<McqQuizContainerProps> = ({ questions }) => {
  const [quizState, dispatch] = useContext(McqQuizContext);

  return (
    <div>
      <McqQuizQuestionList questions={questions}/>
      { !quizState.isSubmitted && 
        <Button 
          className='w-full bg-clr-accent'
          onClick={() => dispatch({type: 'SUBMIT_QUIZ'})}
        >
          Submit
        </Button>
      }
      { quizState.isSubmitted && <ScoreTallyContainer {...calculateScore(questions, quizState.itemsState)}/> }
    </div>
  )
}

// const ScoreTallyContainer:FC<ScoreTally> = (score) => {
//   return (
//     <div>
//       <div>TOTAL SCORE: {score.score}</div>
//       <div>UNANSWERED ITEMS: {score.unAnswered}</div>
//       <div>TOTAL NO OF ITEMS: {score.total}</div>
//     </div>
//   )
// }

export default McqQuizContainer
