import React from "react";
import { FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Findfrirnd = () => {
  return (
    <div className="max-w-[285px] h-auto bg-white rounded-[15px]">
      <div className="relative mb-[50px]">
        <div className="w-full h-[85px] bg-[#45437F] rounded-t-[15px]"></div>
        <div className="w-[75px] h-[75px] rounded-full bg-[#615DFA] border-4 border-white absolute bottom-[-38px] left-[50%] translate-x-[-50%]"></div>
      </div>
      <div className="text-center">
        <h3 className="font-[Poppins] font-medium text-[15px] text-[#000000] ">
          Azmir Uddin Alif
        </h3>
        <span className="font-[Poppins] font-normal text-[17px] text-[#AFB0C0] mb-[22px] ">
          azmir@gmail.com
        </span>
        <div className="flex items-center justify-center gap-[48px] mb-[26px]">
          <div className="relative after:content-[''] after:w-[1px] after:h-[25px] after:bg-[#AFB0C0] after:absolute after:right-[-24px] after:top-[50%] after:translate-y-[-50%]">
            <h4 className="font-[Poppins] font-bold text-[14px] text-[#000000] ">
              930
            </h4>
            <p className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] ">
              Friends
            </p>
          </div>
          <div className="relative after:content-[''] after:w-[1px] after:h-[25px] after:bg-[#AFB0C0] after:absolute after:right-[-24px] after:top-[50%] after:translate-y-[-50%]">
            <h4 className="font-[Poppins] font-bold text-[14px] text-[#000000] ">
              930
            </h4>
            <p className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] ">
              Friends
            </p>
          </div>
          <div>
            <h4 className="font-[Poppins] font-bold text-[14px] text-[#000000] ">
              930
            </h4>
            <p className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] ">
              Friends
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mb-[29px]">
          <div className="w-10 h-10 rounded-[10px] bg-[#3763D2] flex items-center justify-center text-white cursor-pointer">
            <FaFacebookSquare />
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-[#F8468D] flex items-center justify-center text-white cursor-pointer">
            <FaInstagram />
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-[#1ABCFF] flex items-center justify-center text-white cursor-pointer">
            <FaTwitter />
          </div>
          <div className="w-10 h-10 rounded-[10px] bg-[#FD434F] flex items-center justify-center text-white cursor-pointer">
            <FaYoutube />
          </div>
        </div>
        <div className="flex ">
          <button className="bg-[#615DFA] w-[50%] rounded-bl-[15px] pt-[9px] pb-2 font-[Poppins] font-semibold text-[12px] text-[#FFFFFF] cursor-pointer">Add Friend</button>
          <button className="bg-[#23D2E2] w-[50%] rounded-br-[15px] pt-[9px] pb-2 font-[Poppins] font-semibold text-[12px] text-[#FFFFFF] cursor-pointer">Send Message</button>
          
        </div>
      </div>
    </div>
  );
};

export default Findfrirnd;
