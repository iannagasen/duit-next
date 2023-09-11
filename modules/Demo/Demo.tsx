import React, { FC } from 'react'

type Props = {
  name: String
}

const Demo:FC<Props> = ({ name }) => {
  return (
    <div>
      <div>HELLO WORLD { name }</div>
    </div>
  )
}

export default Demo
