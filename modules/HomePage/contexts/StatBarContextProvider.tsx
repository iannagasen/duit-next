'use client';

import { Dispatch, FC, ReactNode, createContext, useReducer } from "react";
import { QuizStat, StatInfo } from "../types/QuizStat.types";

export const StatBarContext = createContext<[StatInfo, Dispatch<StatBarAction>]>(undefined!);

type Props = {
  children: ReactNode[] | ReactNode
  statInfo: StatInfo
}

type StatBarAction = 
  | { type: 'QUIZ_STAT', payload: QuizStat }

const statBarReducer = (prevState: StatInfo, action: StatBarAction ): StatInfo => {
  switch (action.type) {
      case 'QUIZ_STAT': return action.payload;
      default: return prevState;
  }
}

const StatBarContextProvider:FC<Props> = ({ children, statInfo }) => {
  const [state, dispatch] = useReducer(statBarReducer, statInfo);
  return (
    <StatBarContext.Provider value={[state, dispatch]}>
      {children}
    </StatBarContext.Provider>
  )
}

export default StatBarContextProvider;