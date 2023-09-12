import { BASE_URL } from '@/modules/common/constants/base-url';
import React, { FC, useEffect, useState } from 'react'
import { toLocaleString } from '../../common/utils/datetime.utils';
import { QuizStat } from '../types/QuizStat.types';
import { cn } from '@/lib/utils';

type Props = {
  quizStat: QuizStat
}
const QuizStatBar:FC<Props> = (props) => {
  return (
    <>
    <div className='font-extrabold text-3xl text-right'>Quiz Statistics</div>
    <div className='overflow-x-auto w-full'>
      <table className='table w-full caret-transparent'>
        <thead>
          <tr>
            <th></th>
            <td>Date Taken</td>
            <td className='text-right'>Score</td>
            <td className='text-right'>Total</td>
          </tr>
        </thead>
        <tbody>
        {props.quizStat.data?.map((q, i) => (
          <tr key={q.dateTaken}>
            <th className='relative w-6'>
              <div className={cn(
                'absolute w-4 h-4 top-1.5 left-1',
                isPass(q) ? 'bg-green-400' : 'bg-red-400'
              )}></div>
            </th>
            <td>{toLocaleString(q.dateTaken)}</td>
            <td className='text-right'>{q.score}</td>
            <td className='text-right'>{q.totalItems}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </div>
    </>
  )
}

const isPass = (item: {score: number, totalItems: number}) => {
  const passingPercent = 0.50;
  return item.score / item.totalItems >= passingPercent;
}

export default QuizStatBar
