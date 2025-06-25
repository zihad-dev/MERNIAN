import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import Cart from "../Icon/Cart";

const Navber = () => {
  return (
    <div>
      <div className=" w-full bg-[#615DFA] flex items-center px-[24px] py-[15px] ">
        <div className=" w-[90px] h-[40px] mr-[174px]">
          <a className="w-[90px] block" href="/" data-discover="true">
            <img src="images/logo.png" alt="logo" />
          </a>
        </div>
       <div className="flex items-center justify-between w-full">
            <div className="flex gap-[73px] ">
              <ul className="flex items-center gap-[48px] font-[Poppins] font-bold text-white text-[14px] cursor-pointer">
                <li>
                  <FaBars />
                </li>
                <li>Careers</li>
                <li>Store</li>
                <li>FAQ</li>
                <li>
                  <BsThreeDots />
                </li>
              </ul>
              <form action="#">
              <input type="text"placeholder="Search here ...." className="w-[415px] h-[50px] pt-[15px] pb-[14px] px-x bg-[#4E4AC8] rounded-[11px] outline-none " />
            </form>
            </div>
            <div className=" flex items-center gap-[70px]  ">
              <div className=" relative flex gap-[46px] after:absolute after:content-[''] after:w-full after:h-[3px] after:left-0 after:bottom-[-3px] after:bg-[#4E4AC8] after:rounded-[7px] after:z-0 before:absolute before:content-[''] before:w-[80%] before:h-[3px] before:left-0 before:bottom-[-3px] before:bg-[#41EFFF] before:rounded-[7px] before:z-10 ">
                <span>Next</span>
                <span>35 EXP</span>
              </div>
              <div className="flex gap-[33px] ">
                <span>
                  <Cart />
                </span>
                <span>
                  <Cart />
                </span>
                <span>
                  <Cart />
                </span>
                <div>
                  <span>
                    <Cart />
                  </span>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default Navber;
