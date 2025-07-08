import React from "react";
import { FaTwitter, FaYoutube } from "react-icons/fa";

const ProductItem = () => {
  return (
    <div className="max-w-[285px] h-auto bg-white rounded-[15px]">
      <div className="relative mb-[36px]">
        <div className="w-full h-[180px] bg-[#615DFA] rounded-t-[15px]"></div>
        <div
          style={{ boxShadow: "0px 0px 4px 0px rgba(0, 0, 0, 0.10)" }}
          className="py-[5px] px-[24px] rounded-[24px] bg-white absolute bottom-[-15px] right-[14px]"
        >
          <p className="font-[Poppins] font-bold text-[14px] text-[#615DFA]">
            $15
          </p>
        </div>
      </div>
      <div className="">
        <div className="mb-[26px] flex flex-col justify-center items-center">
          <div >
            <h3 className="font-[poppins] font-bold text-[#000000] text-[16px] max-w-[220px] mb-[9px]">
              Intel Pentium G6400 10th Gen Special Deal PC
            </h3>
            <div className="flex items-center gap-[5px] mb-[13px]">
              <div className="w-[10px] h-[10px] rounded-full bg-[#23D2E2]"></div>
              <p className="font-[poppins] font-light text-[#000000] text-[14px]">Laptop</p>
            </div>
            <span className="font-[poppins] font-light text-[#615DFA] text-[13px] underline cursor-pointer">Full Screen View</span>
          </div>
        </div>

        <div className="flex ">
          <button className="bg-[#615DFA] w-[50%] rounded-bl-[15px] pt-[9px] pb-2 font-[Poppins] font-semibold text-[12px] text-[#FFFFFF] cursor-pointer">
            Add Friend
          </button>
          <button className="bg-[#23D2E2] w-[50%] rounded-br-[15px] pt-[9px] pb-2 font-[Poppins] font-semibold text-[12px] text-[#FFFFFF] cursor-pointer">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
