'use client'

import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";

type UpdateQuestionPayload = Question;
type CreateQuestionPayload = Question;
type DeleteQuestionPayload = { id: number };

type QuestionsContextAction =  
    | { type: 'CREATE', payload: CreateQuestionPayload }
    | { type: 'UPDATE', payload: UpdateQuestionPayload }
    | { type: 'DELETE', payload: DeleteQuestionPayload }

export const QuestionsContext = createContext<[Question[], Dispatch<QuestionsContextAction>]>(undefined!);

const questionsReducer = ( questionsState: Question[], action: QuestionsContextAction ): Question[] => {
  switch(action.type) {
    case "CREATE":
      return [...questionsState, action.payload]
    case "UPDATE":
      return questionsState.map(q => (q.id === action.payload.id) ? action.payload : q)
    case "DELETE":
      return questionsState.filter(q => action.payload.id )
    default:
      return questionsState;
  }  
}

type QuestionsContextProviderProps = {
  questions: Question[],
  children: ReactNode,
}

const QuestionsContextProvider:FC<QuestionsContextProviderProps> = ({ questions, children}) => {
  return (
    <QuestionsContext.Provider value={useReducer(questionsReducer, questions)}>
      {children}
    </QuestionsContext.Provider>
  )
}

export default QuestionsContextProvider;