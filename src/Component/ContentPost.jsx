import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import BelLogo from "../Icon/BelLogo";
import LikeIcon from "../Icon/LikeIcon";
import LoveIcon from "../Icon/LoveIcon";
import Sad from "../Icon/Sad";
import WowIcon from "../Icon/WowIcon";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt, FaShareAlt } from "react-icons/fa";

const ContentPost = () => {
  const [ispostDropdwon, SetIspostDropdwon] = useState(false);
  const postRef = useRef(null);

  useEffect(() => {
    let hendelClickOutside = (event) => {
      // console.log(postRef.current && !postRef.current.contains(event.target));
      if (postRef.current && !postRef.current.contains(event.target)) {
        SetIspostDropdwon(false);
      }
    };
    document.addEventListener("mousedown", hendelClickOutside);

    return () => {
      document.addEventListener("mousedown", hendelClickOutside);
    };
  }, []);

  const hendelDropdwone = () => {
    SetIspostDropdwon(!ispostDropdwon);
  };

  return (
    <div>
      <div className="bg-white pt-[15px] pr-[41px] pb-[20px] pl-[20px] rounded-t-[15px] ">
        <div className="flex items-center justify-between mb-[23px] ">
          <div className="flex items-center gap-[15px]">
            <div className="w-[50px] h-[50px] rounded-full bg-[#615DFA] border-3 border-[#D9D9D9]"></div>
            <div>
              <h4 className="font-[Poppins] font-bold text-[14px] text-[#303030]">
                Md Jihadul Islam
              </h4>
              <p className="font-medium font-[Poppins] text-[12px] text-[#AFB0C0]">
                29 minutes ago
              </p>
            </div>
          </div>
          <div onClick={hendelDropdwone} className="relative">
            <BsThreeDots className="text-[#000000] text-[20px] cursor-pointer" />
            {ispostDropdwon && (
              <div
                ref={postRef}
                style={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.11)" }}
                className="w-[140px] h-auto bg-white absolute top-[20px] right-0 z-10 rounded-[7px] py-4 pl-4"
              >
                <ul className="flex flex-col gap-[6px]">
                  <li className="cursor-pointer font-[Poppins] font-normal text-[12px] text-[#000000] hover:font-semibold transition-all duration-300">
                    Edit Post
                  </li>
                  <li className="cursor-pointer font-[Poppins] font-normal text-[12px] text-[#000000] hover:font-semibold transition-all duration-300">
                    Delete Post
                  </li>
                  <li className="cursor-pointer font-[Poppins] font-normal text-[12px] text-[#000000] hover:font-semibold transition-all duration-300">
                    Report Post
                  </li>
                  <li className="cursor-pointer font-[Poppins] font-normal text-[12px] text-[#000000] hover:font-semibold transition-all duration-300">
                    Report Author
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <div>
          <p className="font-[Poppins] font-normal text-[12px] text-[#000000] max-w-[524px] relative after:absolute after:bottom-[-29px] after:left-0 after:content-[''] after:w-[100%] after:h-[1px] after:bg-[#D9D9D9] mb-[44px]">
            I have great news to share with you all! I’ve been officially made a
            game streaming verified partner by Streamy http://lyt.ly/snej25.
            What does this mean? I’ll be uploading new content every day,
            improving the quality and I’m gonna have access to games a month
            before the official release. This is a dream come true, thanks to
            all for the support!!!
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center relative">
              <div className="z-30">
                <LikeIcon />
              </div>
              <div className="-ml-2 z-20">
                <LoveIcon />
              </div>
              <div className="-ml-2 z-10">
                <WowIcon />
              </div>
              <span className="font-[Inter] font-bold text-[12px] text-[#000000] ml-[13px] ">
                12
              </span>
            </div>
            <h5 className="font-['Inter'] font-bold text-[12px] text-[#000000] cursor-pointer">
              13 Comments
            </h5>
            <span className="font-['Inter'] font-bold text-[12px] text-[#000000] cursor-pointer">
              2 Shares
            </span>
          </div>
        </div>
      </div>
      <div className="w-[100%] bg-[#FCFCFD] pt-[23px] pr-[41px] pb-[20px] pl-[20px] border-t border-[#D9D9D9] relative">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4 cursor-pointer">
            <AiFillLike className="text-[15px] text-[#D9D9D9]" />
            <span className="font-[Inter] font-bold text-[#D9D9D9] text-[12px]">
              Like
            </span>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaCommentAlt className="text-[15px] text-[#D9D9D9]" />
            <span className="font-[Inter] font-bold text-[#D9D9D9] text-[12px]">
              Comment
            </span>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <FaShareAlt className="text-[15px] text-[#D9D9D9]" />
            <span className="font-[Inter] font-bold text-[#D9D9D9] text-[12px]">
              Share
            </span>
          </div>
        </div>
        <div 
        style={{boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.11)"}}
        className="absolute left-0 top-[-82px] rounded-[50px] w-[410px] h-[40px] bg-red-500"></div>
      </div>
    </div>
  );
};

export default ContentPost;
