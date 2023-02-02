import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";

function AppPages() {
  return (
    <Routes>
      <Route index element={<HomePage/>} />
    </Routes>
  );
}

export default AppPages;
