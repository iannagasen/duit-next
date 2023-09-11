import React, { FC, useContext } from 'react'
import { MainBarTabContext } from './contexts/MainBarProvider';
import { cn } from '@/lib/utils';

type MainBarTabProps = {
  selected: MainBarTab,
  onSelect: (tab: MainBarTab) => void
}

const MainBarTab:FC<MainBarTabProps> = ({ selected, onSelect }) => {
  const tabs: MainBarTab[] = ['Content', 'Questions', 'Quiz'];

  return (
    <ul className="grid grid-flow-col text-center bg-clr-secondary rounded-lg m-3 p-3">
      { tabs.map(t => (
        <li key={t}>
          <a className={cn(
                "flex justify-center py-2", 
                selected === t && 'bg-clr-accent rounded-lg shadow')}
             onClick={() => onSelect(t)}>
            {t}
          </a>
        </li>
      ))}
    </ul>
  )
}

export default MainBarTab
