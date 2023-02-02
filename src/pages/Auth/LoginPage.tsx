import { MouseEvent, useState } from "react";
import AuthLayout from "../../layout/AuthLayout";
import { BiHide, BiShow } from "react-icons/bi";
import { Button } from "../../components/Shared/Button";
function LoginPage() {
  const [show, setShow] = useState(true);
  return (
    <AuthLayout>
      <div className=" w-11/12 md:w-9/12 lg:w-1/4  flex flex-col  space-y-5 bg-green-50/90 rounded-xl shadow shadow-green-100 px-5 py-10 ">
        <div className="bg-green-500 w-16 h-16 transform rotate-45 rounded-xl flex self-center flex justify-center items-center ">
          <div className="h-3 w-3 bg-white rounded-full"></div>
        </div>
        <div className="text-center space-y-5 text-green-500">
          <h1 className="text-4xl">Welcome !!!</h1>
          <p className="text-2xl">Login and start</p>
        </div>

        <div className="flex flex-col space-y-12 text-green-500">
          <div className="flex flex-col space-y-3">
            <label htmlFor="name">Username</label>
            <input
              className=" border-transparent bg-transparent border-b-green-500 ring-none outline-none rounded "
              type="text"
              name="name"
              id="name"
              placeholder="Enter your Username"
            />
          </div>
          <div className="flex flex-col space-y-3 relative">
            <label htmlFor="password">Password</label>
            <input
              type={show ? "text" : "password"}
              name="password"
              id="password"
              placeholder="Enter your password"
              className="border-transparent bg-transparent border-b-green-500 ring-none outline-none rounded"
            />
            <button
              className="absolute right-3 top-8 text-2xl"
              onClick={() => setShow(!show)}
            >
              {show ? <BiHide /> : <BiShow />}
            </button>
          </div>

          <Button text={"Login"}  onClick={() => console.log("clicked")} />
        </div>
      </div>
    </AuthLayout>
  );
}

export default LoginPage;
