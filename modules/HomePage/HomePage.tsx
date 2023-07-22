"use client"

import { MainLayout } from '@/modules/common/layout'
import React, { FC, useState } from 'react'
import { NavBar } from './NavBar/NavBar';

interface Props {
  topics: string[],
  questions: QuestionList;
}


export const HomePage:FC<Props> = ({ topics, questions}) => {
  const [mainContent, setMainContent] = useState({type: '', payload: ''});

  const showHandler = (type: string, payload: string) => {
    setMainContent({type, payload});
  }

  return (
    <div className='w-full'>
      <MainLayout>
        <NavBar show={showHandler} topics={topics}/>
      </MainLayout>
    </div>
  )
}
