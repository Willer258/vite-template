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
  collapsed?: boolean;
  sizeArray: number;
  childrens?: any[];
  textinWhite?: boolean;
  iAmChild?: boolean;
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
          ? "text-green-300 "
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
  iAmChild,
}: ILinkButtonProps) {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [hover, setHover] = useState(false);
  return (
    <div className=" w-full ">
      <button
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => {
          childrens && !collapsed
            ? setShow(!show)
            : childrens && collapsed
            ? null
            : navigate(link);
        }}
        key={index}
        className={` ${collapsed && !iAmChild ? "p-5" : " py-3 px-5"}  ${
          index > -0 && index - (1 % 2) === 0
            ? " border-b border-t border-white/80"
            : index == sizeArray - 1
            ? "border-t border-white/80"
            : ""
        } ${
          textinWhite
            ? "text-green-500 hover:bg-green-200 rounded-none pl-7 "
            : "text-white hover:(text-green-500 bg-green-50)"
        } 
        text-left  duration-300 font-semibold flex justify-between  z-10 items-center w-full`}
      >
        <div className="flex space-x-2 items-center">
          {icons}
          <span className={`${collapsed && !iAmChild ? "hidden" : ""} `}>
            {label}{" "}
          </span>

          {collapsed && !iAmChild ? (
            <div
              className={`${
                hover
                  ? "absolute left-16   bg-green-50 text-green-500  overflow-hidden  rounded"
                  : "hidden"
              }`}
            >
              {!childrens ? (
                <div className={`py-3 px-8 `}>
                  <span>{label} </span>
                </div>
              ) : (
                <div>
                  {childrens.map((child) => (
                    <LinkButton
                      label={child.label}
                      index={child.index}
                      link={child.link}
                      icons={child.icons}
                      textinWhite
                      iAmChild
                      collapsed={collapsed}
                      sizeArray={childrens.length}
                    />
                  ))}
                </div>
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        {childrens && show ? (
          <AiFillCaretUp className={`${collapsed ? "hidden" : ""}`} />
        ) : childrens && !show ? (
          <AiFillCaretDown className={`${collapsed ? "hidden" : ""}`} />
        ) : null}
      </button>
      {childrens && show ? (
        <div className=" flex flex-col  bg-white/80  ">
          {childrens &&
            childrens.map((child) => (
              <LinkButton
                label={child.label}
                index={child.index}
                link={child.link}
                icons={child.icons}
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
