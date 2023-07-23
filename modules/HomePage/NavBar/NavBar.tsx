import React, { FC } from 'react'
import Topic from './Topic'

interface Props {
  topics: Topic[],
  show: (type: string, payload: string) => void,
}

export const NavBar:FC<Props> = ({topics, show}) => {
  return (
    <div className='p-2 m-2'>
      <div>Topics</div>
      {
        topics.map(t => (
          <Topic key={t.id} name={t.topic} show={show} />
        ))
      }
    </div>
  )
}
