import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";

export interface McqQuizItemState {
  questionId: number,
  selectedChoiceId: number,
}

export type McqQuizState = {
  isSubmitted: boolean
  itemsState: McqQuizItemState[]
};

type McqQuizContextAction = 
  | { type: 'SELECT_ANSWER', payload: McqQuizItemState }
  | { type: 'UPDATE_ANSWER', payload: McqQuizItemState}
  | { type: 'SUBMIT_QUIZ' }
  // | { type: 'SUBMIT_ANSWER' }

const reducer = (quizItemState: McqQuizState, action: McqQuizContextAction ): McqQuizState => {
  switch(action.type) {
    case "SELECT_ANSWER": 
      return {
        isSubmitted: false,
        itemsState: [ ...quizItemState.itemsState, action.payload ]
      }
    case "UPDATE_ANSWER": 
      return {
        isSubmitted: false,
        itemsState: quizItemState.itemsState.map(q => q.questionId === action.payload.questionId ? action.payload : q)
      }
    case "SUBMIT_QUIZ": 
      return {
        isSubmitted: true,
        itemsState: quizItemState.itemsState
      }
  }
}

export const McqQuizContext = createContext<[McqQuizState, Dispatch<McqQuizContextAction>]>(undefined!);

type McqQuizContextProviderProps = {
  children: ReactNode,
  quizState: McqQuizState
}

const McqQuizContextProvider:FC<McqQuizContextProviderProps> = ({ children, quizState }) => {
  return (
    <McqQuizContext.Provider value={useReducer(reducer, quizState)}>
      {children}
    </McqQuizContext.Provider>
  )
}

export default McqQuizContextProvider;