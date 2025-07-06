import React, { useEffect, useRef, useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import LikeIcon from "../Icon/LikeIcon";
import LoveIcon from "../Icon/LoveIcon";
import Sad from "../Icon/Sad";
import WowIcon from "../Icon/WowIcon";
import { AiFillLike } from "react-icons/ai";
import { FaCommentAlt, FaShareAlt } from "react-icons/fa";
import DisLike from "../Icon/DisLike";
import Happy from "../Icon/Happy";
import Funny from "../Icon/Funny";
import Angry from "../Icon/Angry";
import Comment from "./Comment";
import VideoPlay from "../Icon/VideoPlay";
import VideoPlayBox from "./VideoPlayBox";

const ContentPost = ({ videoContent, Participants, photos, morePhotos }) => {
  const [ispostDropdwon, SetIspostDropdwon] = useState(false);
  const [isReact, setIsReact] = useState(false);
  const [selectedReaction, setSelectedReaction] = useState(null);
  const [isComment, setIsComment] = useState(false);
  const [moreComment, setMoreComment] = useState(false);
  const [activeVideoSrc, setActiveVideoSrc] = useState(null);
  const postRef = useRef(null);
  const reactRef = useRef(null);

  useEffect(() => {
    const hendelClickOutside = (event) => {
      if (postRef.current && !postRef.current.contains(event.target)) {
        SetIspostDropdwon(false);
      }
      if (reactRef.current && !reactRef.current.contains(event.target)) {
        setIsReact(false);
      }
    };
    document.addEventListener("mousedown", hendelClickOutside);

    return () => {
      document.removeEventListener("mousedown", hendelClickOutside);
    };
  }, []);

  const hendelDropdwone = () => {
    SetIspostDropdwon(!ispostDropdwon);
  };

  const hendelReact = () => {
    setIsReact(!isReact);
  };

  const handleReaction = (type) => {
    setSelectedReaction(type);
    setIsReact(false);
  };

  const hendelComment = () => {
    setIsComment(!isComment);
  };
  const hendelMoreComment = () => {
    setMoreComment(!moreComment);
  };
  const reactionIcons = {
    like: <LikeIcon width={20} height={20} />,
    love: <LoveIcon width={20} height={20} />,
    dislike: <DisLike width={20} height={20} />,
    happy: <Happy width={20} height={20} />,
    funny: <Funny width={20} height={20} />,
    wow: <WowIcon width={20} height={20} />,
    angry: <Angry width={20} height={20} />,
    sad: <Sad width={20} height={20} />,
  };

  return (
    <div>
      <div className="bg-white  rounded-t-[15px]">
        <div>
          <div className="pt-[15px] pr-[41px] pb-[0px] pl-[20px]">
            <div className="flex items-center justify-between mb-[23px]">
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
                      <li className="cursor-pointer text-[12px] hover:font-semibold">
                        Edit Post
                      </li>
                      <li className="cursor-pointer text-[12px] hover:font-semibold">
                        Delete Post
                      </li>
                      <li className="cursor-pointer text-[12px] hover:font-semibold">
                        Report Post
                      </li>
                      <li className="cursor-pointer text-[12px] hover:font-semibold">
                        Report Author
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-[15px] mb-[29px]">
              <p className="font-[Poppins] text-[12px] text-[#000000] max-w-[524px] relative ">
                I have great news to share with you all! I’ve been officially
                made a game streaming verified partner by Streamy
                http://lyt.ly/snej25. I’ll be uploading new content every day,
                improving the quality and have access to games a month before
                official release.
              </p>
            </div>
          </div>
          {videoContent && (
            <div
              onClick={() => setActiveVideoSrc("videos/video2.mp4")}
              className="w-full h-[300px] mb-[15px]"
            >
              <div className="w-full h-full bg-[#7A77FD] relative">
                <div className="absolute top-[50%] left-[50%] w-[96px] h-[96px] rounded-full bg-[#181828] translate-x-[-50%] translate-y-[-50%] border-4 border-[#41EFFF] ">
                  <div className="flex items-center justify-center w-full h-full cursor-pointer">
                    <VideoPlay width={25} height={25} />
                  </div>
                  {/* <video className="w-full h-full object-cover rounded-full" controls>
                    <source src="video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video> */}
                </div>
              </div>
            </div>
          )}
        </div>
        {activeVideoSrc && (
          <VideoPlayBox
            videoSrc={activeVideoSrc}
            onClose={() => setActiveVideoSrc(null)}
          />
        )}
        {photos && (
          <div className="w-full h-[300px] bg-[#7A77FD] mb-[15px] relative"></div>
        )}
        {morePhotos && (
          <div className="flex flex-wrap gap-[12px] px-[20px] w-[585px]">
            <div className="w-[265px] h-[207px] rounded-[15px] bg-[#615DFA] cursor-pointer"></div>
            <div className="w-[265px] h-[207px] rounded-[15px] bg-[#615DFA] cursor-pointer"></div>
            <div className="w-[265px] h-[207px] rounded-[15px] bg-[#615DFA] cursor-pointer"></div>
            <div className="w-[265px] h-[207px] rounded-[15px] bg-[#41EFFF] flex items-center justify-center text-white font-[inter] font-normal text-[14px] cursor-pointer ">
              <p>10+</p>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-[17px] pr-[42px] pb-[18px] pl-[19px]  ">
          {Participants ? (
            <div className="w-full flex items-center justify-between border-t border-[#D9D9D9] pt-[15px]">
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-[22px]">
                  <div className="flex items-center relative">
                    <div className="z-1">
                      <LikeIcon />
                    </div>
                    <div className="-ml-2 z-1">
                      <LoveIcon />
                    </div>
                    <div className="-ml-2 z-1">
                      <WowIcon />
                    </div>
                    <span className="font-[Inter] font-bold text-[12px] text-[#000000] ml-[13px]">
                      12
                    </span>
                  </div>
                  <div className="flex items-center relative">
                    <div className="z-1 bg-[#615DFA] w-[20px] h-[20px] rounded-full border border-[#D9D9D9]"></div>
                    <div className="-ml-2 z-1 bg-[#615DFA] w-[20px] h-[20px] rounded-full border border-[#D9D9D9]"></div>
                    <div className="-ml-2 z-1 bg-[#615DFA] w-[20px] h-[20px] rounded-full border border-[#D9D9D9]"></div>
                    <div className="-ml-2 z-1 bg-[#615DFA] w-[20px] h-[20px] rounded-full border border-[#D9D9D9]"></div>
                    <span className="font-[Inter] font-bold text-[12px] text-[#000000] ml-[12px]">
                      12 Participants
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-[15px]">
                  <h5 className="font-bold text-[12px] text-[#000000] cursor-pointer">
                    13 Comments
                  </h5>
                  <span className="font-bold text-[12px] text-[#000000] cursor-pointer">
                    2 Shares
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="w-full flex items-center justify-between border-t border-[#D9D9D9] pt-[15px]">
              <div className="flex items-center relative">
                <div className="z-1">
                  <LikeIcon />
                </div>
                <div className="-ml-2 z-1">
                  <LoveIcon />
                </div>
                <div className="-ml-2 z-1">
                  <WowIcon />
                </div>
                <span className="font-[Inter] font-bold text-[12px] text-[#000000] ml-[13px]">
                  12
                </span>
              </div>
              <h5 className="font-bold text-[12px] text-[#000000] cursor-pointer">
                13 Comments
              </h5>
              <span className="font-bold text-[12px] text-[#000000] cursor-pointer">
                2 Shares
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="w-full bg-[#FCFCFD] pt-[23px] pr-[41px] pb-[20px] pl-[20px] border-t border-[#D9D9D9]  relative">
        <div className="flex items-center justify-between">
          <div ref={reactRef} className="relative">
            <div
              onClick={hendelReact}
              className="flex items-center gap-4 cursor-pointer"
            >
              {selectedReaction ? (
                <div>{reactionIcons[selectedReaction]}</div>
              ) : (
                <AiFillLike className="text-[15px] text-[#D9D9D9]" />
              )}
              <span className="font-bold text-[#D9D9D9] text-[12px]">
                {selectedReaction
                  ? selectedReaction.charAt(0).toUpperCase() +
                    selectedReaction.slice(1)
                  : "Like"}
              </span>
            </div>

            {/* Dropdown */}
            {isReact && (
              <div
                style={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.11)" }}
                className="absolute left-0 top-[-110px] rounded-[50px] bg-white pt-3 pr-[14px] pb-[11px] pl-[13px] z-20"
              >
                <div className="flex items-center gap-[12px]">
                  <div onClick={() => handleReaction("like")}>
                    <LikeIcon
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </div>
                  <div onClick={() => handleReaction("love")}>
                    <LoveIcon
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </div>
                  <div onClick={() => handleReaction("dislike")}>
                    <DisLike
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </div>
                  <div onClick={() => handleReaction("happy")}>
                    <Happy width={40} height={40} className="cursor-pointer" />
                  </div>
                  <div onClick={() => handleReaction("funny")}>
                    <Funny width={40} height={40} className="cursor-pointer" />
                  </div>
                  <div onClick={() => handleReaction("wow")}>
                    <WowIcon
                      width={40}
                      height={40}
                      className="cursor-pointer"
                    />
                  </div>
                  <div onClick={() => handleReaction("angry")}>
                    <Angry width={40} height={40} className="cursor-pointer" />
                  </div>
                  <div onClick={() => handleReaction("sad")}>
                    <Sad width={40} height={40} className="cursor-pointer" />
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Comment Button */}
          <div
            onClick={hendelComment}
            className="flex items-center gap-4 cursor-pointer"
          >
            <FaCommentAlt className="text-[15px] text-[#D9D9D9]" />
            <span className="font-bold text-[#D9D9D9] text-[12px]">
              Comment
            </span>
          </div>

          {/* Share Button */}
          <div className="flex items-center gap-4 cursor-pointer">
            <FaShareAlt className="text-[15px] text-[#D9D9D9]" />
            <span className="font-bold text-[#D9D9D9] text-[12px]">Share</span>
          </div>
        </div>
      </div>
      {isComment && (
        <>
          <Comment />
          {moreComment && <Comment />}
          <div>
            <div className="w-full bg-[#FCFCFD] pt-[16px] pb-[16px]  border-t border-[#D9D9D9] border-b border-[#D9D9D9]  ">
              <div
                onClick={hendelMoreComment}
                className="text-center cursor-pointer font-[Poppins] font-normal text-[12px] text-[#3E3F5E] flex itwms-center gap-1 justify-center hover:underline hover:text-[#01C7D9] transition-all duration-300"
              >
                Load more comments
                <span className="font-[Poppins] font-medium text-[#01C7D9] text-[12px] ">
                  {moreComment ? "" : "2+"}
                </span>
              </div>
            </div>
            <div
              className="w-full bg-[#FCFCFD] py-[18px] pl-[25px] pr-[27px] rounded-b-[15px]
           flex items-center gap-[19px]"
            >
              <div className="w-[36px] h-[36px] rounded-full bg-[#615DFA] border-2 border-[#D9D9D9]"></div>
              <div>
                <input
                  type="text"
                  placeholder="Your reply "
                  className="w-[476px] p-[15px] bg-white rounded-[13px] px-3 text-[14px] text-[#000000] focus:outline-none border border-[#D9D9D9] focus:border-[#615DFA] transition-all duration-300 font-[Poppins] font-semibold text-[12px] text-[#D9D9D9]"
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContentPost;
