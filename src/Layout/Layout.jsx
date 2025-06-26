import React from "react";
import Navber from "./Navber";
import { Outlet } from "react-router";
import SideRightBer from "./SideRightBer";
import SideLeftBer from "./SideLeftBer";

const Layout = () => {
  return ( 
    <>
  
      <Navber />
      <div className="flex gap-[30px] justify-between">
        <SideLeftBer />
        <Outlet />
        <SideRightBer />
      </div>
      
    </>
  );
};

export default Layout;
