import { cn } from '@/lib/utils';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode[] | ReactNode,
  height?: 75 | 70 | 65 | 60 | 80
}

const YScrollable:FC<Props> = ({children, height = 75}) => {
  return (
    <div className={cn(
      'no-scrollbar overflow-y-auto',
      height === 75 && 'max-h-[75vh]',
      height === 70 && 'max-h-[70vh]',
      height === 60 && 'max-h-[60vh]',
      height === 80 && 'max-h-[80vh]',
      height === 65 && 'max-h-[65vh]',
    )}>
      {children}
    </div>      
  )
}

export default YScrollable
