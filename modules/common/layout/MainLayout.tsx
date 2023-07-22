"use client"

import React, { FC, ReactNode } from 'react'

interface Props {
  children: [ReactNode, ReactNode, ReactNode]
}

export const MainLayout: FC<Props> = ({
  children: [navBar, mainBar, statBar]
}) => {
  return (
    <div className='flex min-h-screen items-stretch'>
      <div className='basis-1/4'>
        {navBar}
      </div>
      <div className='basis-1/2'>
        {mainBar}
      </div>
      <div className='basis-1/4'>
        {statBar}
      </div>
    </div>
  )
}

