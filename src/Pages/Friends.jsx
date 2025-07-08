import React, { useRef, useState } from "react";
import ProfilePart from "../Component/ProfilePart";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import Findfrirnd from "../Component/Findfrirnd";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Friends = () => {
  const sliderRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    sliderRef.current.slickGoTo(index);
    setActiveIndex(index);
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setActiveIndex(index),
  };
  return (
    <div>
      <div className="w-full">
        <div>
          <div className="mb-[62px]">
            <ProfilePart />
          </div>
          <div className="mb-[39px]">
            <p className="font-[Poppins] font-normal text-[14px] text-[#AFB0C0]">
              BROWSE ABM SHAWON
            </p>
            <h3 className="font-[Poppins] font-medium text-[24px] text-[#24234B]">
              Friends 82
            </h3>
          </div>
          <div className="bg-white pt-[22px] pb-[15px] pl-[25px] w-full rounded-[10px] mb-[31px]">
            <div className="w-[717px] relative  ">
              <input
                className="border border-[#D9D9D9] w-full pt-[13px] pb-[12px] pl-[15px] rounded-[13px] font-[Poppins] font-normal text-[15px] text-[#D9D9D9]"
                type="text"
                placeholder="Search Friends"
              />
              <div className="absolute top-[0px] right-0">
                <button className="pt-[12px] pb-[11px] pl-[29px] pr-[30px] bg-[#23D2E2] rounded-[10px]  text-[25px] text-white">
                  <FaSearch />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="full ">
          <Slider {...settings} ref={sliderRef}>
            <div className="w-full px-4 ">
              <div className="grid grid-cols-4 gap-4">
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="grid grid-cols-4 gap-4">
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="grid grid-cols-4 gap-4">
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="grid grid-cols-4 gap-4">
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="grid grid-cols-4 gap-4">
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
              </div>
            </div>
            <div className="w-full px-4 ">
              <div className="grid grid-cols-4 gap-4">
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
                <Findfrirnd />
              </div>
            </div>
          </Slider>
          <div className="flex justify-end  mt-5">
            <div className="flex items-center gap-[35px] py-[17px] px-[20px] bg-white rounded-[15px]">
              
              <div className="flex items-center gap-4">
                
                <button onClick={() => sliderRef.current.slickPrev()}
                  className="text-[#AFB0C0] text-[25px] "
                  >
                  <FaAngleLeft />
                </button>

                
                <div className="flex gap-[20px]">
                  {[0, 1, 2, 3, 4, 5].map((i) => (
                    <button
                      key={i}
                      onClick={() => handleClick(i)}
                      className={`font-[Poppins] font-medium text-[14px] transition-colors duration-200 ${
                        activeIndex === i ? "text-[#23D2E2]" : "text-[#3E3F5E]"
                      }`}
                    >
                      {`0${i + 1}`}
                    </button>
                  ))}
                </div>

                
                <button 
                className="text-[#AFB0C0] text-[25px] "
                onClick={() => sliderRef.current.slickNext()}>
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friends;
