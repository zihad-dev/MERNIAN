import React, { useEffect, useRef, useState } from "react";
import {
  BsFillCalendarEventFill,
  BsFillCameraReelsFill,
  BsShop,
  BsThreeDots,
} from "react-icons/bs";
import { FaBars, FaUserFriends } from "react-icons/fa";
import Cart from "../Icon/Cart";
import SmsLogo from "../Icon/SmsLogo";
import BelLogo from "../Icon/BelLogo";
import Setting from "../Icon/Setting";
import { Link } from "react-router";
import { RiCalendarEventFill } from "react-icons/ri";
import { GrGroup } from "react-icons/gr";
import { MdPageview } from "react-icons/md";

const Navber = () => {
  const [isBerOpen, setIsBerOpen] = useState(false);
  const [isDotOpen, setIsDotOpen] = useState(false);
  const berRef = useRef(null);
  const dotRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      console.log(berRef.current.contains(event.target));

      if (berRef.current && !berRef.current.contains(event.target)) {
        setIsBerOpen(false);
      }
      if (dotRef.current && !dotRef.current.contains(event.target)) {
        setIsDotOpen(false);
      }
    });

    return () => {
      document.addEventListener("mousedown", (event) => {
        if (berRef.current && !berRef.current.contains(event.target)) {
          setIsBerOpen(false);
        }
        if (dotRef.current && !dotRef.current.contains(event.target)) {
          setIsDotOpen(false);
        }
      });
    };
  }, []);

  const hendelBerClick = () => {
    setIsBerOpen(!isBerOpen);
    console.log("click");
  };
  const hendelDotClick = () => {
    setIsDotOpen(!isDotOpen);
  };

  return (
    <div className="absolute top-0 left-0 z-10 w-full">
      <div className=" bg-[#615DFA] flex items-center px-[24px] py-[15px] justify-between font-[Poppins]">
        <div className=" w-[90px] h-[40px] mr-[174px]">
          <a className="w-[90px] block" href="/" data-discover="true">
            <img src="images/logo.png" alt="logo" />
          </a>
        </div>

        <div className=" ">
          <ul className="flex items-center gap-[48px] font-[Poppins] font-bold text-white text-[14px] cursor-pointer">
            <li className="relative">
              <button onClick={hendelBerClick} ref={berRef}>
                <FaBars />
              </button>

              {isBerOpen && (
                <div className="z-10 w-[300px] h-auto bg-[#FCFCFD] absolute top-[40px] left-[-10px] shadow-xs rounded-[10px] p-4">
                  <ul className="flex flex-col gap-2">
                    <li className=" flex  gap-4">
                      <RiCalendarEventFill className="text-[20px] text-[#615DFA] " />
                      <div>
                        <h3 className="font-[Poppins] font-medium text-[12px] text-[#000000]">
                          Events
                        </h3>
                        <p className="font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                          Lorem ipsum dolor sit amet..
                        </p>
                      </div>
                    </li>
                    <li className=" flex gap-4">
                      <FaUserFriends className="text-[20px] text-[#615DFA] " />
                      <div>
                        <h3 className="font-[Poppins] font-medium text-[12px] text-[#000000]">
                          Friend
                        </h3>
                        <p className="font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                          Dolor lorem ipsum sit amet
                        </p>
                      </div>
                    </li>
                    <li className=" flex gap-4">
                      <GrGroup className="text-[20px] text-[#615DFA] " />
                      <div>
                        <h3 className="font-[Poppins] font-medium text-[12px] text-[#000000]">
                          Group
                        </h3>
                        <p className="font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                          Ipsum dolor sit amet.
                        </p>
                      </div>
                    </li>
                    <li className=" flex gap-4">
                      <MdPageview className="text-[20px] text-[#615DFA] " />
                      <div>
                        <h3 className="font-[Poppins] font-medium text-[12px] text-[#000000]">
                          Pages
                        </h3>
                        <p className="font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                          Lorem dolor amet adipisicing
                        </p>
                      </div>
                    </li>
                    <li className=" flex gap-4">
                      <BsFillCameraReelsFill className="text-[20px] text-[#615DFA] " />
                      <div>
                        <h3 className="font-[Poppins] font-medium text-[12px] text-[#000000]">
                          Reels
                        </h3>
                        <p className="font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                          Lorem ipsum dolor sit
                        </p>
                      </div>
                    </li>
                    <li className=" flex gap-4">
                      <BsShop className="text-[20px] text-[#615DFA] " />
                      <div>
                        <h3 className="font-[Poppins] font-medium text-[12px] text-[#000000]">
                          Marketplase
                        </h3>
                        <p className="font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                          Lorem ipsum dolor sit amet consectetur
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              )}
            </li>

            <li>
              <Link to={"#"}>Careers</Link>
            </li>
            <li>
              <Link to={"/Store"}> Store</Link>
            </li>
            <li>
              <Link to={"#"}> FAQ</Link>
            </li>
            <li className="relative mt-2" ref={dotRef}>
              <button className="flex " onClick={hendelDotClick}>
                <BsThreeDots />
                {isDotOpen && (
                  <div className="z-10 w-[200px] h-auto bg-[#FCFCFD] absolute top-[30px] right-[0] shadow-xs rounded-[10px] p-4">
                    <ul className="flex flex-col gap-3 items-start">
                      <li className="font-[Poppins] font-normal text-[14px] text-[#000000] hover:font-medium cursor-pointer duration-300 ">
                        Settings & privacy
                      </li>
                      <li className="font-[Poppins] font-normal text-[14px] text-[#000000] hover:font-medium cursor-pointer duration-300 ">
                        Display & accessibility
                      </li>
                      <li className="font-[Poppins] font-normal text-[14px] text-[#000000] hover:font-medium cursor-pointer duration-300 ">
                        Give feedback
                      </li>
                      <li className="font-[Poppins] font-normal text-[14px] text-[#000000] hover:font-medium cursor-pointer duration-300 ">
                        Log out
                      </li>
                    </ul>
                  </div>
                )}
              </button>
            </li>
          </ul>
        </div>
        <div className="">
          <form action="#">
            <input
              type="text"
              placeholder="Search here ...."
              className="w-[415px] h-[50px] pt-[15px] pb-[14px] px-4 bg-[#4E4AC8] rounded-[11px] outline-none focus:bg-white transition duration-700 ease-in-out font-normal text-[#6965E0] text-[14px] "
            />
          </form>
        </div>
        <div className="flex items-center gap-[70px] ">
          <div
            className="relative 
  after:content-[''] after:absolute after:w-[1px] after:h-[32px] 
  after:bg-[#7A77FD] after:top-[-5px] after:right-[-40px]"
          >
            <div className=" relative flex gap-[46px] after:absolute after:content-[''] after:w-full after:h-[3px] after:left-0 after:bottom-[-3px] after:bg-[#4E4AC8] after:rounded-[7px] after:z-0 before:absolute before:content-[''] before:w-[80%] before:h-[3px] before:left-0 before:bottom-[-3px] before:bg-[#41EFFF] before:rounded-[7px] before:z-10 font-normal text-white text-[12px] ">
              <span>Next</span>
              <span>35 EXP</span>
            </div>
          </div>
          <div className="flex gap-[33px] ">
            <span>
              <Cart />
            </span>
            <span>
              <SmsLogo />
            </span>
            <span>
              <BelLogo />
            </span>
            <div
              className="ml-[33px] relative 
  after:content-[''] after:absolute after:w-[1px] after:h-[32px] 
  after:bg-[#7A77FD] after:top-[-5px] after:left-[-33px] "
            >
              <span>
                <Setting />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navber;
