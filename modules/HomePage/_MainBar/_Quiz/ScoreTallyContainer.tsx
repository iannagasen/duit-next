import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { FC } from 'react'

const ScoreTallyContainer:FC<ScoreTally> = (score) => {
  return (
    <Dialog defaultOpen>
      <DialogContent className='bg-clr-accent'>
        <DialogHeader>
          <DialogTitle>Quiz Statistics:</DialogTitle>
          <DialogDescription>
            <div>Score: {score.score}</div>
            <div>Score: {score.score}</div>
            <div>Score: {score.score}</div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ScoreTallyContainer
