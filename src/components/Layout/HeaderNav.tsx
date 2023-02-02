import { IconButton } from "../Shared/Button";
import {
  TbLayoutSidebarLeftCollapse,
  TbLayoutSidebarRightCollapse,
} from "react-icons/tb";
import NavProfile from "../Shared/NavProfile";
import { useDispatch, useSelector } from "react-redux";
import { setCollapsed } from "../../redux/feature/slices/collapsedSlice";

function HeaderNav() {
  let dispatch = useDispatch();
  const collapsed = useSelector((state: any) => state.collapsedState.collapsed);
  return (
    <div
      className={`bg-green-100/70 backdrop-filter backdrop-blur-sm flex justify-between mx-5 pl-3 pr-10 py-2 mt-3 rounded-xl  fixed top-2 right-0 ${
        collapsed ? "  w-[93%]" : "w-[93%] lg:w-10/12 "
      } `}
    >
      <IconButton
        className="hidden lg:block"
        type="text"
        icons={
          collapsed ? (
            <TbLayoutSidebarRightCollapse size={30} />
          ) : (
            <TbLayoutSidebarLeftCollapse size={30} />
          )
        }
        onClick={() => dispatch(setCollapsed(!collapsed))}
      />
      <IconButton
        className="lg:hidden "
        type="text"
        icons={<TbLayoutSidebarRightCollapse size={30} />}
        onClick={undefined}
      />
      <NavProfile />
    </div>
  );
}

export default HeaderNav;
