"use client"

import { MainLayout } from '@/modules/common/layout'
import React, { FC, useState } from 'react'
import { NavBar } from './NavBar/NavBar';
import MainBar from './MainBar/MainBar';
import StatBar from './StatBar/StatBar';
import { DEFAULT_NULL_STR } from '../common/constants/constants';

interface Props {
  topics: Topic[],
  questions: Question[];
}


export const HomePage:FC<Props> = ({ topics, questions}) => {
  const [mainContent, setMainContent] = useState({type: DEFAULT_NULL_STR, topic: DEFAULT_NULL_STR});

  const showHandler = (type: string, topic: string) => {
    setMainContent({type, topic});
  }

  return (
    <div className='w-full bg-clr-background text-white'>
      <MainLayout>
        <NavBar show={showHandler} topics={topics} />
        <MainBar questions={questions} topic={mainContent.topic} />
        <StatBar />
      </MainLayout>
    </div>
  )
}