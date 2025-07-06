import React, { useState } from "react";
import ProfilePart from "../Component/ProfilePart";
import HomeLeft from "../Component/HomeLeft";
import StatusBer from "../Icon/StatusBer";
import ProductBer from "../Icon/ProductBer";
import { FaCamera, FaPhotoVideo } from "react-icons/fa";
import ContentPost from "../Component/ContentPost";

const Newsfeed = () => {
  const [isStatus, setIsStatus] = useState(true);
  const [isProduct, setIsProduct] = useState(false);

  const handleStatus = () => {
    setIsStatus(!isStatus);
    setIsProduct(false);
  };
  const handleProduct = () => {
    setIsProduct(!isProduct);
    setIsStatus(false);
  };
  return (
    <div>
      <ProfilePart />
      <div className="flex  items-start mt-10 gap-[15px]">
        <div>
          <HomeLeft />
        </div>
        <div>
          <div className="pb-[19px] bg-white rounded-[15px] w-[585px]">
            <div className="flex items-center justify-between border-b border-[#D9D9D9]">
              {/* Status Tab */}
              <div
                onClick={handleStatus}
                className={`w-full py-[29px] font-[inter] font-bold text-[12px] rounded-tl-[15px] transition-all duration-300 ease-in-out flex items-center justify-center
      ${
        isStatus
          ? "bg-[#615DFA] text-white"
          : "bg-white text-[#D9D9D9] hover:bg-[#F0F0FF]"
      }
    `}
              >
                <button className="flex items-center gap-[16px]">
                  <StatusBer
                    className={isStatus ? "text-white" : "text-[#D9D9D9]"}
                  />
                  Status
                </button>
              </div>

              {/* Product Upload Tab */}
              <div
                onClick={handleProduct}
                className={`w-full py-[29px] font-[inter] font-bold text-[12px] rounded-tr-[15px] transition-all duration-300 ease-in-out flex items-center justify-center
      ${
        !isStatus
          ? "bg-[#615DFA] text-white"
          : "bg-white text-[#D9D9D9] hover:bg-[#F0F0FF]"
      }
    `}
              >
                <button className="flex items-center gap-[16px]">
                  <ProductBer
                    className={!isStatus ? "text-white" : "text-[#D9D9D9]"}
                  />
                  Product Upload
                </button>
              </div>
            </div>

            {isStatus && (
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
                    <FaCamera className="cursor-pointer text-[20px] text-[#3E3F5E]" />
                    <FaPhotoVideo className="cursor-pointer text-[20px] text-[#3E3F5E]" />
                  </div>
                  <div className="flex items-center gap-[20px]">
                    <button className="pt-[12px] pb-[13px] pr-[38px] pl-[38px] bg-[#181828] font-[Inter] font-bold text-[12px] text-[#ffffff] rounded-[6px] cursor-pointer">
                      Discard
                    </button>
                    <button className="pt-[12px] pb-[13px] pr-[47px] pl-[46px] bg-[#615DFA] font-[Inter] font-bold text-[12px] text-[#ffffff] rounded-[6px] cursor-pointer">
                      Post
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
          {isStatus ?(
            <div className="mt-[18px] flex flex-col gap-[25px] ">
              <ContentPost/>
              <ContentPost videoContent={true}/>
              <ContentPost/>
              <ContentPost videoContent={true}/>
              <ContentPost photos={true}/>
            </div>
          ):("")}
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
