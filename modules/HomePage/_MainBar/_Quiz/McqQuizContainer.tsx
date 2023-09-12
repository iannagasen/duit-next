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

export default McqQuizContainer
