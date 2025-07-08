import React, { useRef, useState } from "react";
import MerketHead from "../Component/MerketHead";
import { FaAngleLeft, FaAngleRight, FaSearch } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ProductItem from "../Component/ProductItem";
const Store = () => {
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
    <div className="mt-[36px]">
      <div>
        <div>
          <MerketHead />
        </div>
        <div className="mb-[39px]">
          <h3 className="font-[Poppins] font-bold text-[24px] text-[#000000]">
            Categories
          </h3>
        </div>
        <div className="bg-white pt-[14px] pb-[15px] pl-[14px] w-full rounded-[10px] mb-[31px]">
          <div className="flex gap-[15px] w-full"> 
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Desktop
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Laptop
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Component
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Monitor
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
             UPS
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Tablet
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Office Equipment
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Camera 
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Security
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Networking
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Software
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Accessories
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Gadget
            </button>
            <button className="font-[Poppins] font-medium text-[#000000] text-[14px] cursor-pointer hover:text-[13px] hover:font-bold duration-300">
              Gaming
            </button>
          </div>
        </div>
        {/* .................. */}
        <div>
          <div className="full ">
            <Slider {...settings} ref={sliderRef}>
              <div className="w-full px-4 ">
                <div className="grid grid-cols-4 gap-4">
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                   <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                </div>
              </div>
              <div className="w-full px-4 ">
                <div className="grid grid-cols-4 gap-4">
            <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                   <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                </div>
              </div>
              <div className="w-full px-4 ">
                <div className="grid grid-cols-4 gap-4">
                <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                   <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                </div>
              </div>
              <div className="w-full px-4 ">
                <div className="grid grid-cols-4 gap-4">
               <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                   <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                </div>
              </div>
              <div className="w-full px-4 ">
                <div className="grid grid-cols-4 gap-4">
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                   <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                </div>
              </div>
              <div className="w-full px-4 ">
                <div className="grid grid-cols-4 gap-4">
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                   <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                  <ProductItem/>
                </div>
              </div>
            </Slider>
            <div className="flex justify-end  mt-5">
              <div className="flex items-center gap-[35px] py-[17px] px-[20px] bg-white rounded-[15px]">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => sliderRef.current.slickPrev()}
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
                          activeIndex === i
                            ? "text-[#23D2E2]"
                            : "text-[#3E3F5E]"
                        }`}
                      >
                        {`0${i + 1}`}
                      </button>
                    ))}
                  </div>

                  <button
                    className="text-[#AFB0C0] text-[25px] "
                    onClick={() => sliderRef.current.slickNext()}
                  >
                    <FaAngleRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Store;
