import { useSelector } from "react-redux";
import Breacrumb from "./Breacrumb";
import Footer from "./Footer";

function Content({ children }: React.PropsWithChildren<{}>) {
  const collapsed = useSelector((state: any) => state.collapsedState.collapsed);
  return (
    <div
      className={`flex flex-col space-y-3 ${
        collapsed ? "w-[93%]" : "w-[93%] lg:w-10/12 "
      }  mr-5 py-2  absolute right-0 z-0 top-[15%] lg:top-[10%] `}
      style={{ zIndex: "-99999" }}
    >
      <Breacrumb />

      <div className="bg-green-500/30 p-5 rounded min-h-[75vh]">{children}</div>

      <Footer />
    </div>
  );
}

export default Content;
