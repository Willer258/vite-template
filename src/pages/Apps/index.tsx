import React from "react";
import { Routes, Route } from "react-router-dom";

function AppPages() {
  return (
    <Routes>
      <Route index element={"<AppLayout />"} />
    </Routes>
  );
}

export default AppPages;
