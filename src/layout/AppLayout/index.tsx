import React from "react";
import Content from "../../components/Layout/Content";
import Footer from "../../components/Layout/Footer";
import HeaderNav from "../../components/Layout/HeaderNav";
import SideNav from "../../components/Layout/SideNav";
import AppPages from "../../pages/Apps";
import { routes } from "../../utils/routes";

function AppLayout() {
  return (
    <div>
      <div className="w-full">
        <HeaderNav />
        <SideNav />
        <Content>
          <AppPages />
        </Content>
      </div>
    </div>
  );
}

export default AppLayout;
