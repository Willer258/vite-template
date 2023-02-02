interface ILogoProps {
  isWhite?: boolean;
  collapsed?: boolean;
  noText?: boolean;
}

function Logo({ isWhite, noText }: ILogoProps) {
  return (
    <div className="flex items-center space-x-3">
      <div
        className={` ${
          isWhite ? "bg-green-300 " : "bg-green-500"
        }   w-10 h-10 transform rotate-45 rounded-xl flex self-center flex justify-center items-center `}
      >
        <div className="h-3 w-3 bg-white rounded-full"></div>
      </div>

      {!noText && (
        <span className={`text-2xl font-bold ${isWhite && "text-white"} `}>
          Logo
        </span>
      )}
    </div>
  );
}

export default Logo;
