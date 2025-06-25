import React from "react";
import Navber from "./Navber";
import { Outlet } from "react-router";
import SideRightBer from "./SideRightBer";
import SideLeftBer from "./SideLeftBer";
import Container from "../Component/Container";

const Layout = () => {
  return (
    <>
  
      <Navber />
      <div className="flex gap-[30px]">
        <SideLeftBer />
        <Outlet />
        <SideRightBer />
      </div>
      
    </>
  );
};

export default Layout;
