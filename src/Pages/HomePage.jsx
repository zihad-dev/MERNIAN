import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import HomeLeft from "../Component/HomeLeft";
import ContentPost from "../Component/ContentPost";

const HomePage = () => {
  return (
    <div>
      <div className="mt-8 mb-[33px]">
      <div className="relative w-full h-[300px]">
        {/* Banner Image */}
        <img src="images/bnner.png" alt="Banner" className="w-full h-full object-cover rounded-t-xl" />

        {/* Profile Circle */}
        <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%] w-[130px] h-[130px] bg-[#615DFA] border-[10px] border-white rounded-full "></div>

        {/* Buttons */}
        <div className="absolute bottom-0 right-[27px] translate-y-[50%] flex gap-4">
          <button className="font-[Poppins] font-semibold text-white text-[14px] py-[15px] px-[52px] bg-[#615DFA] rounded-[7px] cursor-pointer hover:opacity-90 transition">
            Add Friend
          </button>
          <button className="font-[Poppins] font-semibold text-white text-[14px] py-[15px] px-[52px] bg-[#23D2E2] rounded-[7px] cursor-pointer hover:opacity-90 transition">
            Message
          </button>
        </div>
      </div>
      <div className="bg-white text-center pt-[62px] pr-[114px] pb-[21px] pl-[65px] rounded-b-xl">
        <div className="flex justify-between items-center">
          <div className="flex gap-[48px]">
            <div className=" ">
              <h5 className="font-[Poppins] font-bold text-[14px] text-[#000000] ">930</h5>
              <span className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] ">Friends</span>
            </div>
            <div>
              <h5 className="font-[Poppins] font-bold text-[14px] text-[#000000] ">89</h5>
              <span className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] ">Posts</span>
            </div>
            <div>
              <h5 className="font-[Poppins] font-bold text-[14px] text-[#000000] ">4.5k</h5>
              <span className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0]  ">Followers</span>
            </div>
          </div>
          <div className="">
            <h3 className="font-[Poppins] font-bold text-[16px] text-[#000000]">Md Jihadul Islam</h3>
            <h4 className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0]">www.jihad.com</h4>
          </div>
          <div className="flex gap-[12px]">
            <div className="w-[40px] h-[40px] bg-[#3763D2] rounded-xl flex items-center justify-center cursor-pointer">
              <IoLogoFacebook  className="text-white"/>
            </div>
            <div className="w-[40px] h-[40px] bg-[#F8468D] rounded-xl flex items-center justify-center cursor-pointer">
              <FaInstagram  className="text-white"/>
            </div>
            <div className="w-[40px] h-[40px] bg-[#1ABCFF] rounded-xl flex items-center justify-center cursor-pointer">
              <FaTwitter  className="text-white"/>
            </div>
            <div className="w-[40px] h-[40px] bg-[#FD434F] rounded-xl flex items-center justify-center cursor-pointer">
              <FaYoutube  className="text-white"/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="flex gap-[15px] ">
      <div className="">
        <HomeLeft/>
      </div>
    <div className="flex flex-col gap-[26px]">
      <ContentPost  videoContent={false}/>
      <ContentPost  videoContent={true}/>
     
    </div>
    </div>
    </div>
  );
};

export default HomePage;
