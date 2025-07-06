import React, { useState } from "react";
import ProfilePart from "../Component/ProfilePart";
import HomeLeft from "../Component/HomeLeft";
import StatusBer from "../Icon/StatusBer";
import ProductBer from "../Icon/ProductBer";
import { FaAngleDown, FaCamera, FaPhotoVideo } from "react-icons/fa";
import ContentPost from "../Component/ContentPost";
import DeleteIcon from "../Icon/DeleteIcon";

const Newsfeed = () => {
  const [isStatus, setIsStatus] = useState(true);
  const [isProduct, setIsProduct] = useState(false);
  const [additionalInfoList, setAdditionalInfoList] = useState([
    { name: "", value: "" },
  ]);

  const handleAdd = () => {
    setAdditionalInfoList([...additionalInfoList, { name: "", value: "" }]);
  };

  const handleRemove = (index) => {
    const newList = [...additionalInfoList];
    newList.splice(index, 1);
    setAdditionalInfoList(newList);
  };

  const handleChange = (index, field, value) => {
    const newList = [...additionalInfoList];
    newList[index][field] = value;
    setAdditionalInfoList(newList);
  };

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
            {isProduct && (
              <div>
                <div className="border-b border-[#D9D9D9]">
                  <div className="flex items-center gap-[20px] pt-[29px] pl-[21px] pr-[22px] pb-[17px] ">
                    <div className="flex items-center gap-[10px] flex-wrap w-full">
                      <div className=" border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-[266px] px-[10px] relative font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                        <input
                          className="w-full outline-none"
                          type="text"
                          placeholder="Product name "
                        />
                        <div className="absolute right-[10px] top-[50%] -translate-y-1/2 cursor-pointer">
                          <FaAngleDown />
                        </div>
                      </div>
                      <div className=" border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-[266px] px-[10px] font-[Inter] font-normal text-[12px] text-[#000000]">
                        <input
                          className="w-full outline-none"
                          type="text"
                          placeholder="$12"
                        />
                      </div>
                      <div className=" border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-[266px] px-[10px] relative font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                        <input
                          className="w-full outline-none"
                          type="text"
                          placeholder="Product Categoty"
                        />
                        <div className="absolute right-[10px] top-[50%] -translate-y-1/2 cursor-pointer">
                          <FaAngleDown />
                        </div>
                      </div>
                      <div className=" border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-[266px] px-[10px] relative font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                        <input
                          className="w-full outline-none"
                          type="text"
                          placeholder="Product Color"
                        />
                        <div className="absolute right-[10px] top-[50%] -translate-y-1/2 cursor-pointer">
                          <FaAngleDown />
                        </div>
                      </div>
                      <div className=" border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-[266px] px-[10px] relative font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                        <input
                          className="w-full outline-none"
                          type="text"
                          placeholder="Product Size"
                        />
                        <div className="absolute right-[10px] top-[50%] -translate-y-1/2 cursor-pointer">
                          <FaAngleDown />
                        </div>
                      </div>
                      <div className=" border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-[266px] px-[10px] font-[Inter] font-normal text-[12px] text-[#000000]">
                        <input
                          className="w-full outline-none"
                          type="text"
                          placeholder="10"
                        />
                      </div>

                      <div className="flex items-center justify-center bg-[#24234B] rounded-[6px] w-[266px] py-2 cursor-pointer">
                        <button className="text-white font-[Inter] font-normal text-[12px]">
                          Image Preview
                        </button>
                      </div>
                      <div className="flex items-center justify-center bg-[#615DFA] rounded-[6px] w-[266px] py-2 cursor-pointer">
                        <button className="text-white font-[Inter] font-normal text-[12px]">
                          Image Thumbnail
                        </button>
                      </div>
                      <div className="flex items-center gap-[10px] mt-[5px]">
                        <div className="w-[265px] h-[130px] bg-[#615DFA]"></div>
                        <div className="w-[265px] h-[130px] bg-[#24234B]"></div>
                      </div>
                      <div className=" border border-[#D9D9D9] rounded-[6px]  w-full px-[10px] font-[Inter] font-normal text-[12px] text-[#D9D9D9]">
                        <input
                          className="w-full outline-none pt-[10px] pb-[47px] pl-[10px] pr-full"
                          type="text"
                          placeholder="Product Description"
                        />
                      </div>
                      <div className="w-full ">
                        <div>
                          <div className="flex items-center justify-between">
                            <h4 className="text-[16px] font-bold">
                              Additional Information
                            </h4>
                            <button
                              onClick={handleAdd}
                              className="px-[12px] py-[6px] bg-[#615DFA] rounded-[15px] flex items-center justify-center font-[Inter] font-normal text-white text-[12px] cursor-pointer"
                            >
                              +
                            </button>
                          </div>

                          {additionalInfoList.map((info, index) => (
                            <div
                              key={index}
                              className="flex items-center gap-[10px] mt-[10px]"
                            >
                              <div className="border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-full px-[10px] relative font-[Inter] font-normal text-[12px] text-[#000000]">
                                <input
                                  className="w-full outline-none"
                                  type="text"
                                  placeholder="Additional Name"
                                  value={info.name}
                                  onChange={(e) =>
                                    handleChange(index, "name", e.target.value)
                                  }
                                />
                              </div>
                              <div className="border border-[#D9D9D9] rounded-[6px] pt-[7px] pb-[8px] pl-[10px] w-full px-[10px] font-[Inter] font-normal text-[12px] text-[#000000]">
                                <input
                                  className="w-full outline-none"
                                  type="text"
                                  placeholder="Feature Value"
                                  value={info.value}
                                  onChange={(e) =>
                                    handleChange(index, "value", e.target.value)
                                  }
                                />
                              </div>
                              <div>
                                <button
                                  onClick={() => handleRemove(index)}
                                  className="px-[3px] py-[10px] bg-[#EA5050] rounded-[3px] flex items-center justify-center font-[Inter] font-normal text-white text-[12px] cursor-pointer"
                                >
                                  <DeleteIcon />
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-end px-[28px] pt-[17px]">
                  <div className="flex items-center gap-[20px]">
                    <button className="w-[120px] py-[12px] bg-[#181828] font-[Inter] font-bold text-[12px] text-white rounded-[6px] cursor-pointer">Discard</button>
                    <button className="w-[120px] py-[12px] bg-[#615DFA] font-[Inter] font-bold text-[12px] text-white rounded-[6px] cursor-pointer">Post</button>
                    
                  </div>
                </div>
              </div>
            )}
          </div>
          {isStatus ? (
            <div className="mt-[18px] flex flex-col gap-[25px] ">
              <ContentPost />
              <ContentPost videoContent={true} />
              <ContentPost />
              <ContentPost videoContent={true} />
              <ContentPost photos={true} />
            </div>
          ) : (
            ""
          )}
          {isProduct ? (
            <div className="mt-[18px] flex flex-col gap-[25px] ">
              <ContentPost />
              <ContentPost />
              <ContentPost />
              <ContentPost videoContent={true} />
              <ContentPost />
              <ContentPost  morePhotos={true}/>
            </div>
          ):("")}
        </div>
      </div>
    </div>
  );
};

export default Newsfeed;
