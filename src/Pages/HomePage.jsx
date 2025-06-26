import React from "react";

const HomePage = () => {
  return (
    <div className="mt-8 ">
      <div className="w-full h-[300px] bg-[#45437F] rounded-t-xl relative">
        <div className="w-[130px] h-[130px] bg-[#615DFA] rounded-full border-10 border-white absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-[50%]"></div>
        <div className="absolute right-[27px] bottom-0 translate-x-[-50%] translate-y-[50%]">
          <div className="  ">
            <button className="font-[Poppins] font-semibold text-[#ffffff] text-[14px]  py-[15px] px-[52px] bg-[#615DFA] rounded-[7px] cursor-pointer ">
              Add Friend
            </button>
            <button className="font-[Poppins] font-semibold text-[#ffffff] text-[14px]  py-[15px] px-[52px] bg-[#23D2E2] rounded-[7px] cursor-pointer ">
              Add Friend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
