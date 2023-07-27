// Create Template for UntimedMcqQuiz
/*
  ## DESIGN OF MCQ QUIZ
  1. McqQuizContainer
    - props:
      - questions:
      - options:
    - context:
      - McqQuizContext
        - keeps track of current items done
        - types:
          - SELECT_ANSWER
          - UPDATE_ANSWER
          - SUBMIT_QUIZ
          - SUBMIT_ANSWER
*/

import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";

type TimerForQuizType = { type: 'TIMED', quiz: number }
type TimerForQuizAndQuestionType = { type: 'TIMED', quiz: number, question: number }
type TimerForQuestionType = { type: 'TIMED', question: number }
  
interface McqQuizContainerProps {
  questions: Question [];
  options: (
    | { timer: 'UNTIMED' }
    | { timer : TimerForQuestionType | TimerForQuizAndQuestionType | TimerForQuizType }
  )
} 

// -----------/ Use Context /-------------------
interface McqQuizItemState {
  questionId: number,
  selectedChoiceId: number,
}

type McqQuizState = McqQuizItemState[];

type McqQuizContextAction = 
  | { type: 'SELECT_ANSWER', payload: McqQuizItemState }
  | { type: 'UPDATE_ANSWER', payload: McqQuizItemState}
  | { type: 'SUBMIT_QUIZ' }
  // | { type: 'SUBMIT_ANSWER' }

const reducer = (quizItemState: McqQuizState, action: McqQuizContextAction ): McqQuizState => {
  switch(action.type) {
    case "SELECT_ANSWER": return [ ...quizItemState, action.payload ];
    case "UPDATE_ANSWER": return quizItemState.map(q => q.questionId === action.payload.questionId ? action.payload : q);
    case "SUBMIT_QUIZ": return quizItemState; // return current state for now.
  }
}

const McqQuizContext = createContext<[McqQuizState, Dispatch<McqQuizContextAction>]>(undefined!);

const McqQuizContextProvider:FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <McqQuizContext.Provider value={useReducer(reducer, [])}>
      {children}
    </McqQuizContext.Provider>
  )
}


// -----------/ End of UseContext /-------------------


const McqQuizContainer:FC<McqQuizContainerProps> = ({ questions, options }) => {
  return (
    <>

    </>
  )
} 


