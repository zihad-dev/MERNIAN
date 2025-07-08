import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";

const AboutMe = () => {
  const [isAbout, setIsAbout] = useState(false);
  const aboutRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAbout(false);
      }
    });

    return () => {
      document.addEventListener("mousedown", (event) => {
        if (aboutRef.current && !aboutRef.current.contains(event.target)) {
          setIsAbout(false);
        }
      });
    };
  }, []);
  const hendelAboutDot = () => {
    setIsAbout(!isAbout);
  };
  return (
    <div>
      <div className="w-[283px] h-auto bg-white py-[29px] pl-[27px] pr-[26px] rounded-[15px]">
        <div className="flex justify-between items-center mb-[29px]">
          <h4 className="font-[Poppins] font-bold text-[#Poppins] text-[14px] ">
            About Me
          </h4>
          <div className="relative">
            <span
              onClick={hendelAboutDot}
              ref={aboutRef}
              className="font-[Poppins] font-bold text-[#Poppins] text-[14px] cursor-pointer "
            >
              <BsThreeDots />
            </span>
            {isAbout && (
              <ul className="absolute w-[200px] right-[0%] top-[20px] bg-white rounded-[12px] p-4 z-10 shadow-md flex flex-col gap-[6px]">
                <li
                  className="font-[Poppins] font-normal text-[12px] text-[#303030]
                        hover:bg-gray-200 cursor-pointer"
                >
                  Overview
                </li>
                <li
                  className="font-[Poppins] font-normal text-[12px] text-[#303030]
                        hover:bg-gray-200 cursor-pointer"
                >
                  Places lived
                </li>
                <li
                  className="font-[Poppins] font-normal text-[12px] text-[#303030]
                        hover:bg-gray-200 cursor-pointer"
                >
                  Work and education
                </li>
                <li
                  className="font-[Poppins] font-normal text-[12px] text-[#303030]
                        hover:bg-gray-200 cursor-pointer"
                >
                  Contact and basic info
                </li>
                <li
                  className="font-[Poppins] font-normal text-[12px] text-[#303030]
                        hover:bg-gray-200 cursor-pointer"
                >
                  Profile transparency
                </li>
              </ul>
            )}
          </div>
        </div>
        <p className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0] mb-6">
          Hi! My name is Md Jihadul Islam but some people may know me as
          GameHuntress! I have a Twitch channel where I stream, play and review
          all the newest games.
        </p>
        <div className="flex items-center gap-[25px]">
          <span className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mb-6">
            Joined:
          </span>
          <h5 className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0] mb-6">
            24 November 2021
          </h5>
        </div>
        <div className="flex items-center gap-x-[25px]">
          <span className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mb-6">
            City:
          </span>
          <h5 className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0] mb-6">
            Dhaka
          </h5>
        </div>
        <div className="flex items-center gap-[25px]">
          <span className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mb-6">
            Age:{" "}
          </span>
          <h5 className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0] mb-6">
            23 years
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
