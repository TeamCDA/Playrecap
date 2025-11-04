const getConsoleColor = ( console : string) => {
  const colors: { [key: string]: string } = {
    pc: "bg-primary/20 text-primary",
    playStation: "bg-blue-500/20 text-blue-400",
    xbox: "bg-green-500/20 text-green-400",
    nintendo: "bg-red-500/20 text-red-400",
  };
  return colors[console] || "bg-accent/20 text-accent";
};

export default getConsoleColor;
