import React, { ReactNode, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { To, useNavigate } from "react-router-dom";
interface ButtonProps {
  text?: string;
  onClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
  icons?: ReactNode;
  type?: "primary" | "secondary" | "outlined" | "text" | "cancel";
  className?: string;
}

interface ILinkButtonProps {
  label: string;
  index: number;
  link: To;
  icons?: ReactNode;
  collapsed: boolean;
  sizeArray: number;
  childrens?: any[];
  textinWhite?: boolean;
}

export function Button({ text, onClick, icons, type, className }: ButtonProps) {
  return (
    <button
      className={`${
        type === "secondary"
          ? "bg-green-300 hover:bg-green-200 text-white"
          : type === "outlined"
          ? "outline-green-300 hover:bg-green-300 text-green-50"
          : type == "text"
          ? "text-green-300 bg-green-50"
          : type == "cancel"
          ? " bg-red-500 hover:bg-red-400 text-white"
          : "bg-green-400 hover:bg-green-500 text-green-50"
      }  ${className}  px-3 py-2 ${
        icons && "space-x-3"
      }   duration-300   rounded font-semibold flex items-center`}
      onClick={onClick}
    >
      <span>{text}</span>
      {icons}
    </button>
  );
}

export function IconButton({ onClick, icons, type, className }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${
        type === "secondary"
          ? "bg-green-300 hover:bg-green-200 text-white"
          : type === "outlined"
          ? "outline-green-300 hover:bg-green-300 text-green-50"
          : type == "text"
          ? "text-green-300 bg-green-50"
          : type == "cancel"
          ? "bg-red-500/70 text-white"
          : "bg-green-400 hover:bg-green-500 text-green-50"
      }  ${className}  duration-300 px-2 py-2  rounded-full `}
    >
      {icons}
    </button>
  );
}

export function LinkButton({
  label,
  index,
  link,
  collapsed,
  sizeArray,
  icons,
  childrens,
  textinWhite,
}: ILinkButtonProps) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  return (
    <div className=" w-full">
      <button
        onClick={() => {
          childrens ? setShow(!show) : navigate(link);
        }}
        key={index}
        className={` ${collapsed ? "p-5" : " py-3 px-5"}  ${
          index > -0 && index - (1 % 2) === 0
            ? " border-b border-t border-white/80"
            : index == sizeArray - 1
            ? "border-t border-white/80"
            : ""
        } ${
          textinWhite
            ? "text-green-500 hover:bg-green-200 rounded-none "
            : "text-white hover:(text-green-500 bg-green-50)"
        }   text-left  duration-300 font-semibold     flex justify-between items-center w-full`}
      >
        <div className="flex space-x-2 items-center">
          {icons}
          <span>{label} </span>
        </div>

        {childrens && show ? (
          <AiFillCaretUp />
        ) : childrens && !show ? (
          <AiFillCaretDown />
        ) : null}
      </button>
      {childrens && show ? (
        <div className=" flex flex-col  bg-white/80 ">
          {childrens &&
            childrens.map((child) => (
              <LinkButton
                label={child.label}
                index={child.index}
                link={child.link}
                textinWhite
                collapsed={collapsed}
                sizeArray={childrens.length}
              />
            ))}
        </div>
      ) : null}
    </div>
  );
}
