import React from "react";
import Navber from "./Navber";
import SideRightBer from "./SideRightBer";
import SideLeftBer from "./SideLeftBer";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Navber />
      
      {/* Page Body */}
      <div className="flex justify-center gap-[30px]  py-6 bg-[#F8F8F8] mt-[56px]">
        {/* Left Sidebar */}
        <div className="w-[20%] hidden lg:block">
          <SideLeftBer />
        </div>

        {/* Main Content (Container applied here) */}
        <div className=" w-full">
          <div className="bg-[#F7F7FB] ">
            <Outlet />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-[5%] hidden lg:block">
          <SideRightBer />
        </div>
      </div>
    </>
  );
};

export default Layout;
