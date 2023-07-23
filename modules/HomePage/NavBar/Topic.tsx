import React, { FC, useState } from 'react'

interface Props {
  name: string,
  show: (type: string, payload: string) => void,
}

const Topic:FC<Props>= ({name, show}: Props) => {
  const [topicClicked, setTopicClicked] = useState(false);
  const [questionClicked, setQuestionClicked] = useState(false);

  const showQuestions = () => {
    show("questions", name);
    setQuestionClicked(prev => !prev);
  }

  return (
    <>
      <div onClick={() => setTopicClicked(prev => !prev)}>{name}</div>
      {
        topicClicked &&
        <div onClick={showQuestions}>
          Questions
        </div>
      }

    </>
  )
}

export default Topic