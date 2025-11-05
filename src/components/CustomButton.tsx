

interface ButtonProps {
  title: string;
  className?: string; 
  onClick?: () => void;
}

/*    <Button onClick={onClick}> 
      {iconLeft && <span className="mr-2">{iconLeft}</span>}
       {titleButton}  
        {iconRight && <span className="mr-2">{iconRight}</span>}
      </Button>*/
const CustomButton = ({  title, className, onClick }: ButtonProps) => {
  return (

      <button className={`p-2 ${className ? className + ' ' : ''}dark:bg-slate-700 bg-slate-300 text-black dark:text-white`}
      onClick={onClick}>
        {title}
      </button>

  );
};

export default CustomButton;
