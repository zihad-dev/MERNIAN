import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import VideoPlay from "../Icon/VideoPlay";

const HomeLeft = () => {
  const [isAbout, setIsAbout] = useState(false);
  const [isPhotos, setIsPhotos] = useState(false);
  const [isVideo, setIsVideo] = useState(false);
  const [IsVideoBox, setIsVideoBox]=useState(false)
  const aboutRef = useRef(null);
  const PhotosRef = useRef(null);
  const videoRef = useRef(null);
  useEffect(() => {
    document.addEventListener("mousedown", (event) => {
      console.log(aboutRef.current && !aboutRef.current.contains(event.target));

      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setIsAbout(false);
      }
      if (PhotosRef.current && !PhotosRef.current.contains(event.target)) {
        setIsPhotos(false);
      }
      if (videoRef.current && !videoRef.current.contains(event.target)) {
        setIsVideo(false);
      }
    });

    return () => {
      document.addEventListener("mousedown", (event) => {
        console.log(
          aboutRef.current && !aboutRef.current.contains(event.target)
        );

        if (aboutRef.current && !aboutRef.current.contains(event.target)) {
          setIsAbout(false);
        }
        if (PhotosRef.current && !PhotosRef.current.contains(event.target)) {
          setIsPhotos(false);
        }
        if (videoRef.current && !videoRef.current.contains(event.target)) {
          setIsVideo(false);
        }
      });
    };
  }, []);

  const hendelAboutDot = () => {
    setIsAbout(!isAbout);
  };
  const hendelPhotosDot = () => {
    setIsPhotos(!isPhotos);
  };
  const hendelVideoDot = () => {
    setIsVideo(!isVideo);
  };
  const hendelVideoBox = () => {
    setIsVideoBox(!IsVideoBox)
  };
  return (
    <div className="flex flex-col gap-[15px]">
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
      <div className="w-[283px] h-auto bg-white py-[19px] px-[29px] rounded-[15px]">
        <div className="flex justify-between items-center mb-[29px]">
          <h4 className="font-[Poppins] font-bold text-[#Poppins] text-[14px] ">
            Photos{" "}
            <strong className="font-[Poppins] font-bold text-[12px] text-[#23D2E2]">
              37
            </strong>
          </h4>
          <div className="relative">
            <span
              onClick={hendelPhotosDot}
              ref={PhotosRef}
              className="font-[Poppins] font-bold text-[#Poppins] text-[14px] cursor-pointer "
            >
              <BsThreeDots />
            </span>
            {isPhotos && (
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
        <div className="flex flex-wrap gap-[15px] ">
          <div className="w-[105px] h-[100px] rounded-[15px] bg-[#615DFA]"></div>
          <div className="w-[105px] h-[100px] rounded-[15px] bg-[#24234B]"></div>
          <div className="w-[105px] h-[100px] rounded-[15px] bg-[#615DFA]"></div>
          <div className="w-[105px] h-[100px] rounded-[15px] bg-[#24234B]"></div>
          <div className="w-[105px] h-[100px] rounded-[15px] bg-[#615DFA]"></div>
          <div className="w-[105px] h-[100px] rounded-[15px] bg-[#41EFFF] font-[Poppins] font-bold text-[12px] text-white flex items-center justify-center">
            32+
          </div>
        </div>
      </div>
      <div className="w-[283px] h-auto bg-white py-[29px] pl-[27px] pr-[26px] rounded-[15px]">
        <div className="flex justify-between items-center mb-[29px]">
          <h4 className="font-[Poppins] font-bold text-[#Poppins] text-[14px] ">
            Videos{" "}
            <strong className="font-[Poppins] font-bold text-[12px] text-[#23D2E2]">
              7
            </strong>
          </h4>
          <div className="relative">
            <span
              onClick={hendelVideoDot}
              ref={videoRef}
              className="font-[Poppins] font-bold text-[#Poppins] text-[14px] cursor-pointer "
            >
              <BsThreeDots />
            </span>
            {isVideo && (
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
        <div className="flex flex-col gap-5">
          <div
        onClick={hendelVideoBox}
         className="">
          <div className="w-[215px] h-[100px] bg-[#615DFA] rounded-[15px] flex items-center justify-center">
            <div className="w-[40px] h-[40px] rounded-full bg-black border-2 border-[#41EFFF] flex items-center justify-center">
              <VideoPlay />
            </div>
          </div>
          {IsVideoBox &&(
            <div className="fixed backdrop-blur-sm  z-50 inset-0 bg-black/40  flex items-center justify-center px-4">
          <div className="w-[800px] h-[500px] bg-white rounded-[15px] p-10">
            <div className="w-[100%] h-[100%] overflow-hidden object-cover">
                 <video width="100%" height="100%" controls autoPlay >
                <source src="videos/simple.mp4" type="video/mp4" />
              </video>
            </div>
           
          </div>
          </div>
          )}
        </div>
          <div
        onClick={hendelVideoBox}
         className="">
          <div className="w-[215px] h-[100px] bg-[#24234B] rounded-[15px] flex items-center justify-center">
            <div className="w-[40px] h-[40px] rounded-full bg-black border-2 border-[#41EFFF] flex items-center justify-center">
              <VideoPlay />
            </div>
          </div>
          {IsVideoBox &&(
            <div className="fixed backdrop-blur-sm  z-50 inset-0 bg-black/40  flex items-center justify-center px-4">
          <div className="w-[800px] h-[500px] bg-white rounded-[15px] p-10">
            <div className="w-[100%] h-[100%] overflow-hidden object-cover">
                 <video width="100%" height="100%" controls autoPlay >
                <source src="videos/video2.mp4" type="video/mp4" />
              </video>
            </div>
           
          </div>
          </div>
          )}
        </div>
          <div
        onClick={hendelVideoBox}
         className="">
          <div className="w-[215px] h-[100px] bg-[#615DFA] rounded-[15px] flex items-center justify-center">
            <div className="w-[40px] h-[40px] rounded-full bg-black border-2 border-[#41EFFF] flex items-center justify-center">
              <VideoPlay />
            </div>
          </div>
          {IsVideoBox &&(
            <div className="fixed backdrop-blur-sm  z-50 inset-0 bg-black/40  flex items-center justify-center px-4">
          <div className="w-[800px] h-[500px] bg-white rounded-[15px] p-10">
            <div className="w-[100%] h-[100%] overflow-hidden object-cover">
                 <video width="100%" height="100%" controls autoPlay >
                <source src="videos/simple.mp4" type="video/mp4" />
              </video>
            </div>
           
          </div>
          </div>
          )}
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeLeft;
