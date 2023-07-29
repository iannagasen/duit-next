import { BASE_URL } from "@/modules/common/constants/base-url";
import axios from "axios";
import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";
import { CreateMcqQuizRequestBody } from './../../types/request/CreateMcqQuizRequestBody.types';

export interface McqQuizItemState {
  questionId: number,
  selectedChoiceId: number,
}

export type McqQuizState = {
  isSubmitted: boolean
  itemsState: McqQuizItemState[]
  timeTaken: number
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
        ...quizItemState,
        itemsState: [...quizItemState.itemsState, action.payload]
      }
    case "UPDATE_ANSWER": 
      return {
        ...quizItemState,
        itemsState: quizItemState.itemsState.map(q => q.questionId === action.payload.questionId ? action.payload : q)
      }
    case "SUBMIT_QUIZ":
      // todo function that will receive a type of the request body
      // this will enhance type system
      console.log(quizItemState)
      console.log(CreateMcqQuizRequestBody.fromQuizState(quizItemState));
      console.log("SUBMITTING")
      axios
        .post(`${BASE_URL}/quiz`, CreateMcqQuizRequestBody.fromQuizState(quizItemState))
        .then(d => console.log(d))
        .catch(e => console.log(e))

      return {
        ...quizItemState,
        isSubmitted: true,
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