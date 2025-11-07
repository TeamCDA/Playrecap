import getConsoleColor from "@/helpers/getConsoleColor";

type Props = {
    console : string
}

const ConsoleName = ({ console } : Props) => {
  return (
    <span
      className={`text-xs px-3 py-1 rounded-full font-medium capitalize ${getConsoleColor(
        console
      )}`}
    >
      {console}
    </span>
  );
};

export default ConsoleName;
