import React, { useEffect, useRef, useState } from "react";
import ProfilePart from "../Component/ProfilePart";
import HomeLeft from "../Component/HomeLeft";
import AboutMe from "../Component/AboutMe";
import { HiDotsHorizontal } from "react-icons/hi";

const About = () => {
  const [isInfo, setIsInfo] = useState(false);
  const [isInterests, setIsInterests] = useState(false);
  const [isJob,setIsJob]=useState(false)
  const infoRef = useRef(null);
  const interestsRef = useRef(null);
  const jobRef=useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) {
        setIsInfo(false);
      }
      if (
        interestsRef.current &&
        !interestsRef.current.contains(event.target)
      ) {
        setIsInterests(false);
      }
      if (
        jobRef.current &&
        !jobRef.current.contains(event.target)
      ) {
        setIsJob(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const hendelInfo = () => {
    setIsInfo(!isInfo);
  };
  const hendelInterests = () => {
    setIsInterests(!isInterests);
  };
  const hendelJob =()=>{
    setIsJob(!isJob)
  }
  return (
    <div>
      <div>
        <ProfilePart />
      </div>
      <div className="flex gap-[18px] ">
        <div className="flex flex-col gap-[16px]">
          <AboutMe />
          <div className="pt-[30px] pr-[35px] pb-[34px] pl-[27px] bg-white rounded-[15px]">
            <div className="flex justify-between">
              <h4 className="font-[Poppins] font-bold text-[14px] text-[#3E3F5E]">
                Personal Info
              </h4>
              <div className="relative">
                <button
                  ref={infoRef}
                  className="cursor-pointer"
                  onClick={hendelInfo}
                >
                  <HiDotsHorizontal className="font-[Poppins] font-bold text-[14px] text-[#3E3F5E]" />
                </button>
                {isInfo && (
                  <div className="absolute buttom-[-20px] right-0 bg-white shadow-xl p-[20px]">
                    <ul className="font-[Poppins] font-normal text-[14px] text-[#000000] flex flex-col gap-[8px] ">
                      <li className=" hover:bg-gray-200 cursor-pointer">
                        Email
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Birthday
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Occupation
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Status
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Birthplace
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[15px] mt-[30px]">
              <span className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0]">
                <strong className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mr-[14px]">
                  Email:{" "}
                </strong>{" "}
                zihadvai42@gmail.com
              </span>
              <span className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0]">
                <strong className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mr-[14px]">
                  {" "}
                  Birthday:{" "}
                </strong>{" "}
                24 November 2000
              </span>
              <span className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0]">
                <strong className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mr-[14px]">
                  Occupation:{" "}
                </strong>{" "}
                MernStack Developer
              </span>
              <span className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0]">
                <strong className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mr-[14px]">
                  Status:{" "}
                </strong>{" "}
                unmarried
              </span>
              <span className="font-[Poppins] font-normal text-[12px] text-[#AFB0C0]">
                <strong className="font-[Poppins] font-bold text-[12px] text-[#AFB0C0] mr-[14px]">
                  Birthplace:{" "}
                </strong>{" "}
                Pabna
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-[16px]">
          <div className="pt-[14px] pr-[41px] pb-[26px] pl-[30px] bg-white rounded-[15px]">
            <div className="flex justify-between">
              <h4 className="font-[Poppins] font-bold text-[14px] text-[#3E3F5E]">
                Interests
              </h4>
              <div className="relative">
                <button
                  ref={interestsRef}
                  className="cursor-pointer"
                  onClick={hendelInterests}
                >
                  <HiDotsHorizontal className="font-[Poppins] font-bold text-[14px] text-[#3E3F5E]" />
                </button>
                {isInterests && (
                  <div className="absolute buttom-[-20px] right-0 bg-white shadow-xl p-[20px]">
                    <ul className="font-[Poppins] font-normal text-[14px] text-[#000000] flex flex-col gap-[8px] ">
                      <li className=" hover:bg-gray-200 cursor-pointer">
                        Email
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Birthday
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Occupation
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Status
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Birthplace
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-[15px] mt-[30px]">
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                  Favourite Tv Shows
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] max-w-[523px]">
                  Breaking good,Red devil,people of interest,the running
                  dead,found,american guy Game of wars.
                </p>
              </div>
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                  Favourite Tv Shows
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] max-w-[523px]">
                  Breaking good,Red devil,people of interest,the running
                  dead,found,american guy Game of wars.
                </p>
              </div>
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                  Favourite Tv Shows
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] max-w-[523px]">
                  Breaking good,Red devil,people of interest,the running
                  dead,found,american guy Game of wars.
                </p>
              </div>
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                  Favourite Tv Shows
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] max-w-[523px]">
                  Breaking good,Red devil,people of interest,the running
                  dead,found,american guy Game of wars.
                </p>
              </div>
            </div>
          </div>
          <div className="pt-[14px] pr-[41px] pb-[26px] pl-[30px] bg-white rounded-[15px]">
            <div className="flex justify-between">
              <h4 className="font-[Poppins] font-bold text-[14px] text-[#3E3F5E]">
                Jobs & Education
              </h4>
              <div className="relative">
                <button
                  ref={jobRef}
                  className="cursor-pointer"
                  onClick={hendelJob}
                >
                  <HiDotsHorizontal className="font-[Poppins] font-bold text-[14px] text-[#3E3F5E]" />
                </button>
                {isJob && (
                  <div className="absolute buttom-[-20px] right-0 bg-white shadow-xl p-[20px]">
                    <ul className="font-[Poppins] font-normal text-[14px] text-[#000000] flex flex-col gap-[8px] ">
                      <li className=" hover:bg-gray-200 cursor-pointer">
                        Email
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Birthday
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Occupation
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Status
                      </li>
                      <li className="hover:bg-gray-200 cursor-pointer">
                        Birthplace
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[15px] mt-[30px]">
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                  Lead custom designer
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] max-w-[523px]">
                  Breaking good,Red devil,people of interest,the running dead,found,american guy Game of wars.
                </p>
              </div>
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                 Mernstack developer
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] max-w-[523px]">
                  Breaking good,Red devil,people of interest,the running
                  dead,found,american guy Game of wars.
                </p>
              </div>
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                 fronend developer
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] max-w-[523px]">
                  Breaking good,Red devil,people of interest,the running
                  dead,found,american guy Game of wars.
                </p>
              </div>
              <div className="max-w-[523px] h-[78px]">
                <h3 className="font-[Poppins] font-semibold text-[#000000] text-[12px] mb-[6px]">
                  Favourite Tv Shows
                </h3>
                <p className="font-[Poppins] font-normal text-[#181828] text-[12px] ">
                  Breaking good,Red devil,people of interest,the running
                  dead,found,american guy Game of wars.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
