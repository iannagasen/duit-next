'use client'

import { Dispatch, FC, ReactNode, SetStateAction, createContext, useReducer, useState } from "react";

type SelectedMainBarTabContextAction = { selected: MainBarTab }
export const MainBarTabContext = createContext<[MainBarTab, Dispatch<SetStateAction<MainBarTab>>]>(undefined!);

type MainBarTabProviderProps = {
  children: ReactNode,
  defaultTab: MainBarTab
}

const MainBarTabProvider:FC<MainBarTabProviderProps> = ({ children, defaultTab }) => {
  return (
    <MainBarTabContext.Provider value={useState(defaultTab)}>
      {children}
    </MainBarTabContext.Provider>
  )
}

export default MainBarTabProvider;