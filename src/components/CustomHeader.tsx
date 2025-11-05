import { Button } from '@/components/ui/button';
import type { ReactNode } from "react";


interface CustomHeaderProps {
  title: string;
  subtitle?: string;
  titleButton: string;
    className?: string; 
  onClick?: () => void;
  iconLeft?: ReactNode;
  iconRight? : ReactNode;
}

const CustomHeader = ({title, subtitle,titleButton, onClick ,iconLeft,iconRight
} : CustomHeaderProps) => {
  return (
<div className=" p-4">
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-white text-5xl">{title}</h1>
      <p className="">{subtitle}</p>
    </div>
    <Button onClick={onClick}> 
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
       {titleButton}  
        {iconRight && <span className="mr-2">{iconRight}</span>}
      </Button>
  </div>
   </div>
  )
}

export default CustomHeader
