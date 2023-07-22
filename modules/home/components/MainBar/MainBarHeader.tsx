import React, { FC } from 'react'

interface Props {
  left: string | null,
  right: string | null
}

const MainBarHeader:FC<Props> = ({left, right}) => {
  return (
    <div className='flex justify-between'>
      <div className='flex-grow text-4xl font-extrabold orange_gradient'>
        {left}
      </div>
      <div className='flex-shrink text-2xl font-extrabold'>
        {right}
      </div>
      
    </div>
  )
}

export default MainBarHeader
