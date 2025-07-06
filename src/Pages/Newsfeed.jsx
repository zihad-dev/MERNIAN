import React from "react";
import ProfilePart from "../Component/ProfilePart";
import HomeLeft from "../Component/HomeLeft";
import StatusBer from "../Icon/StatusBer";
import ProductBer from "../Icon/ProductBer";
import { FaCamera, FaPhotoVideo } from "react-icons/fa";

const Newsfeed = () => {
  return (
    <div>
      <ProfilePart />
      <div className="flex  items-start mt-10 gap-[15px]">
        <div>
          <HomeLeft />
        </div>
        <div>
          <div className="pb-[19px] bg-white rounded-[15px] w-[585px]">
            <div className="flex items-center justify-between border-b border-[#D9D9D9] ">
              <div className="flex items-center justify-center w-full py-[29px] text-[#D9D9D9] font-[inter] font-bold text-[12px] rounded-tl-[15px] hover:text-[#ffffff] hover:bg-[#615DFA] transition-all duration-300 ease-in-out ">
                <button className="flex items-center gap-[16px]">
                  <StatusBer /> Status
                </button>
              </div>
              <div className="flex items-center justify-center w-full py-[29px] text-[#D9D9D9] font-[inter] font-bold text-[12px] rounded-tr-[15px] hover:text-[#ffffff] hover:bg-[#615DFA] transition-all duration-300 ease-in-out">
                <button className="flex items-center gap-[16px] ">
                  <ProductBer /> Product Upload
                </button>
              </div>
            </div>
            <div>
              <div className="border-b border-[#D9D9D9]">
                <input
                  className="pt-[25px] pb-[110px] pl-[26px]  w-full outline-none"
                  type="text"
                  placeholder="Hi, Md Jihadul Islam, Share your post ..."
                />
              </div>
              <div className="flex items-center justify-between px-[28px] pt-[17px]">
                <div className="flex items-center gap-[20px]">
                  <FaCamera className="cursor-pointer text-[20px] text-[#3E3F5E]"/>
                  <FaPhotoVideo className="cursor-pointer text-[20px] text-[#3E3F5E]"/>
                </div>
                <div className="flex items-center gap-[20px]">
                  <button className="pt-[12px] pb-[13px] pr-[38px] pl-[38px] bg-[#181828] font-[Inter] font-bold text-[12px] text-[#ffffff] rounded-[6px] cursor-pointer">Discard</button>
                  <button className="pt-[12px] pb-[13px] pr-[47px] pl-[46px] bg-[#615DFA] font-[Inter] font-bold text-[12px] text-[#ffffff] rounded-[6px] cursor-pointer">Post</button>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
