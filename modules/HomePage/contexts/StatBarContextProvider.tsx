'use client';

import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";

export const StatBarContext = createContext<[QuizStat, Dispatch<StatBarAction>]>(undefined!);

type QuizStat = {
  dateTaken: string, 
  score: number, 
  totalItems: number
}[] | null;

type Props = {
  children: ReactNode[] | ReactNode
  statInfo: QuizStat
}

type StatBarAction = 
  | { type: 'QUIZ_STAT'
      payload: QuizStat };

const statBarReducer = (prevState: QuizStat, action: StatBarAction ) => {
  console.log("statBarReducer")
  return action.payload;
}

const StatBarContextProvider:FC<Props> = ({ children, statInfo }) => {
  return (
    <StatBarContext.Provider value={useReducer(statBarReducer, statInfo)}>
      {children}
    </StatBarContext.Provider>
  )
}

export default StatBarContextProvider;