import React from "react";

const AuthLayout = ({ children }: React.PropsWithChildren<{}>) => (
  <div className="h-screen bg-gradient-to-r from-green-500 relative">
    <div className="flex justify-center items-center h-full w-full space-y-10">
      {children}
    </div>
  </div>
);

export default AuthLayout;
