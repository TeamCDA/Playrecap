import CustomButton from './CustomButton'

interface CustomHeaderProps {
  title: string;
  subtitle?: string;
  titleButton: string;
    className?: string; 
  onClick?: () => void;
}

const CustomHeader = ({title, subtitle,titleButton,onClick ,className} : CustomHeaderProps) => {
  return (
<div className=" p-4">
  <div className="flex items-center justify-between">
    <div>
      <h1 className="text-white text-5xl">{title}</h1>
      <p className="">{subtitle}</p>
    </div>

<CustomButton
      className={`p-2 ${className ? className + ' ' : ''}`}
          title={titleButton}
         onClick={onClick}
/>


  </div>
   </div>
  )
}

export default CustomHeader
