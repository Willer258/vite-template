import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { Ilink, links } from "../../config/nav-config";
import { Button, LinkButton } from "../Shared/Button";
import Logo from "../Shared/Logo";

function SideNav() {
  const navigate = useNavigate();
  const collapsed = false;
  return (
    <div className="h-screen bg-green-500 w-[15%] mr-5 fixed flex flex-col space-y-10  py-10">
      <div className="px-5">
        {" "}
        <Logo isWhite />
      </div>

      <div className="  flex flex-col  mx-4  rounded-lg overflow-hidden bg-green-100/50 ">
        {links.map((item: Ilink, index: number) =>
          item.subLink ? (
            <LinkButton
              index={index}
              label={item.label}
              link={item.link}
              collapsed={collapsed}
              sizeArray={links.length}
              icons={item.icons}
              childrens={item.subLink}
            />
          ) : (
            <LinkButton
              index={index}
              label={item.label}
              link={item.link}
              collapsed={collapsed}
              sizeArray={links.length}
              icons={item.icons}
            />
          )
        )}
      </div>
    </div>
  );
}

export default SideNav;
