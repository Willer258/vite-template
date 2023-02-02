import { IconButton } from "../Shared/Button";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import NavProfile from "../Shared/NavProfile";

function HeaderNav() {
  const collapsed = true;
  return (
    <div className="bg-green-100/70 backdrop-filter backdrop-blur-sm flex justify-between mx-5 pl-3 pr-10 py-2 mt-3 rounded-xl  fixed top-2 right-0 w-10/12">
      <IconButton
        type="text"
        icons={
          collapsed ? (
            <TbLayoutSidebarLeftCollapse size={30} />
          ) : (
            <TbLayoutSidebarRightCollapse size={30} />
          )
        }
        onClick={() => console.log(collapsed)}
      />
      <NavProfile />
    </div>
  );
}

export default HeaderNav;
