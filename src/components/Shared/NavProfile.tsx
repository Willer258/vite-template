import { useState } from "react";
import { AiFillTool, AiOutlineUser } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";
import { Button, LinkButton } from "./Button";

function NavProfile() {
  const user = {
    name: "Nahida",
    role: "Admnistrateur",
    urlphoto:
      "https://images.pexels.com/photos/13326901/pexels-photo-13326901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  };
  const [show, setShow] = useState(false);
  return (
    <div className="relative">
      <div
        onClick={() => setShow(!show)}
        className="flex items-center space-x-2 hover:bg-green-500/30 px-3 py-1 duration-300 rounded "
      >
        <div className="bg-light-300 rounded-full overflow-hidden w-15 h-15">
          <img
            src={user.urlphoto}
            alt=""
            className="object-cover w-full h-full "
          />
        </div>
        <div className="flex flex-col space-y-1">
          <span className="text-black font-medium">{user.name}</span>
          <span className="text-green-500 font-semibold">{user.role}</span>
        </div>
      </div>

      {show ? (
        <div style={{zIndex:'100000'}} className="absolute  flex flex-col  rounded-lg w-full w-[15em] bg-green-500/50 pt-5 pb-3">
          <div>
            <div className="flex items-center space-x-2 px-5 pb-3 border-b border-white   ">
              <div className="bg-light-300 rounded-full overflow-hidden w-15 h-15">
                <img
                  src={user.urlphoto}
                  alt=""
                  className="object-cover w-full h-full "
                />
              </div>
              <div className="flex flex-col space-y-1">
                <span className="text-white font-medium">{user.name}</span>
                <span className="text-green-100 font-semibold">
                  {user.role}
                </span>
              </div>
            </div>
          </div>
          <div className="pb-3  space-y-3 flex flex-col">
            <LinkButton
              label={"Profile"}
              index={0}
              link={""}
              icons={<AiOutlineUser size={20} />}
              collapsed={false}
              sizeArray={2}
            />
            <LinkButton
              label={"Settings"}
              index={0}
              link={""}
              icons={<AiFillTool size={20} />}
              collapsed={false}
              sizeArray={2}
            />
            <div
              className="
          w-9/12 self-center"
            >
              <Button
                className=" justify-center w-full mt-3"
                onClick={undefined}
                icons={<BiLogOutCircle size={20} />}
                type="cancel"
                text="Logout"
              />
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default NavProfile;
