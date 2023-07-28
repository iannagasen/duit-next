import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import React, { FC } from 'react'

const ScoreTallyContainer:FC<ScoreTally> = (score) => {
  return (
    <Dialog defaultOpen>
      <DialogContent className='border-clr-modal bg-clr-modal opacity-85 top-[30%]'>
        <DialogHeader>
          <DialogTitle>
            <div className='text-3xl font-extrabold mb-2'>Quiz Statistics</div>
            <div className='text-xl'>Score: {score.score}</div>
            <div className='text-xl'>Unanswered: {score.unAnswered}</div>
            <div className='text-xl'>Total: {score.total}</div>
          </DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default ScoreTallyContainer
