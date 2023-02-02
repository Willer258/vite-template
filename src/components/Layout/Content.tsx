import Breacrumb from "./Breacrumb";
import Footer from "./Footer";

function Content({ children }: React.PropsWithChildren<{}>) {
  return (
    <div className="flex flex-col space-y-3 w-10/12 mr-5 py-2  absolute right-0 z-0 top-[10%]" style={{zIndex:'-99999'}}>
      <Breacrumb />

      <div className="bg-green-500/30 p-5 rounded min-h-[75vh]">{children}</div>

      <Footer />
    </div>
  );
}

export default Content;
