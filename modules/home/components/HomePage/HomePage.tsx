"use client"

import { MainLayout } from '@/modules/common/layout'
import { MainBar } from '@/modules/home/components/MainBar'
import { NavBar } from '@/modules/home/components/NavBar'
import { StatBar } from '@/modules/home/components/StatBar/StatBar'
import React, { FC, useState } from 'react'

interface Props {
  data: HomePageData;
}


export const HomePage:FC<Props> = ({data}) => {
  const [mainContent, setMainContent] = useState({type: '', payload: ''});

  console.log(data)

  const showHandler = (type: string, payload: string) => {
    setMainContent({type, payload});
  }

  return (
    <div className='w-full'>
      <MainLayout>
        <NavBar 
          topics={data.topics.topics} 
          show={showHandler}
        />
        <MainBar 
          type={mainContent.type} 
          content={
            mainContent.type === 'questions' 
            ? data.mcqs.list 
            : []
          } 
        />
        <StatBar />
      </MainLayout>
    </div>
  )
}
