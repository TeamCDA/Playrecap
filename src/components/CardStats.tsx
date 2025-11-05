import type { ReactNode } from 'react';
import { Card } from './ui/card'


interface CardStatsProps {
  title: string;
  icon? : ReactNode;
  stats: string | number;
}

const CardStats = ({title,icon,stats} : CardStatsProps)  => {
  return (
<Card className='p-6 bg-card hover:outline-1 '>
    <div className='flex items-center gap-4'>
       <div className=' p-3 rounded-lg bg-primary/30 '>
             {icon && <span className="h-6 w-6 text-primary">{icon}</span>}
       </div>
       <div>
        <p className='text-sm'>{title}</p>
        <div className='text-2xl font-bold'>{stats}</div>
       </div>
    </div>
</Card>
  )
}

export default CardStats
