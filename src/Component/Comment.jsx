import { useState, useEffect, useRef } from "react";
import { BsThreeDots } from "react-icons/bs";
import LikeIcon from "../Icon/LikeIcon";
import LoveIcon from "../Icon/LoveIcon";
import DisLike from "../Icon/DisLike";
import Happy from "../Icon/Happy";
import Funny from "../Icon/Funny";
import WowIcon from "../Icon/WowIcon";
import Angry from "../Icon/Angry";
import Sad from "../Icon/Sad";
const Comment = () => {
  const [isComBer, setIsComBer] = useState(false);
  const [isReply, setIsReply] = useState(false);
  const [isReplyIcon, setIsReplyIcon] = useState(false);
  const [selectReplyIcon, setSelectReplyIcon] = useState(null);
  const [isCommentReaction, setIsCommentReaction] = useState(false);
  const [CommentReaction, setCommentReaction] = useState(null);
  const comBerRef = useRef(null);
  const replyRef = useRef(null);
  const replyIconRef = useRef(null);
  const commentReactionRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (comBerRef.current && !comBerRef.current.contains(event.target)) {
        setIsComBer(false);
      }
      if (replyRef.current && !replyRef.current.contains(event.target)) {
        setIsReply(false);
      }
      if (
        replyIconRef.current &&
        !replyIconRef.current.contains(event.target)
      ) {
        setIsReplyIcon(false);
      }
        if (
            commentReactionRef.current &&
            !commentReactionRef.current.contains(event.target)
        ) {
            setIsCommentReaction(false);
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  },
    []);
  const hendelComBer = () => {
    setIsComBer(!isComBer);
  };
  const hendelReply = () => {
    setIsReply(!isReply);
  };
  const hendelReplyIcon = () => {
    setIsReplyIcon(!isReplyIcon);
  };
  const replyReactionIcon = (reaction) => {
    setSelectReplyIcon(reaction);
    setIsReplyIcon(false);
    console.log("Selected Reaction:", reaction);
  };
const hendlCommentReaction = () => {
    setIsCommentReaction(!isCommentReaction);

    }
const commentReaction = (type) => {
    setCommentReaction(type);
    setIsCommentReaction(false);
  };

  const CommentReactionIcons = {
    like: <LikeIcon width={20} height={20} />,
    love: <LoveIcon width={20} height={20} />,
    dislike: <DisLike width={20} height={20} />,
    happy: <Happy width={20} height={20} />,
    funny: <Funny width={20} height={20} />,
    wow: <WowIcon width={20} height={20} />,
    angry: <Angry width={20} height={20} />,
    sad: <Sad width={20} height={20} />,
  };
  const replyRecationIcon = {
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
      <div className="w-full h-auto bg-[#FCFCFD] pt-[13px] pb-[18px]">
        <div className="ml-[26px] flex  gap-[11px] ">
          <div className="bg-[#615DFA] w-[38px] h-[38px] rounded-full border-2 border-[#D9D9D9] "></div>
          <div>
            <p className="max-w-[475px] font-[Poppins] font-normal text-[12px] text-[#3E3F5E] mb-[15px]">
              {" "}
              <strong className="font-medium">Sohel rana</strong> It’s a always
              pleasure to do this streams with you. If we have at least half
              half the fun than last time it will be an incredible success!
            </p>
            <div className="flex items-center gap-[25px]">
              <div className="font-[Poppins] font-medium text-[12px] text-[#000000] cursor-pointer flex items-center gap-2">
                {
                    CommentReaction ?(
                        <span className="flex items-center gap-1">
                            {CommentReactionIcons[CommentReaction]}
                        </span>
                    ):(
                    ""
                    )
                }
                <span className=" font-[Poppins] font-medium text-[12px] text-[#000000]">
                  {CommentReaction ? 1 : ""}    
                </span>
              </div>
              <div 
              ref={commentReactionRef}
              className="relative">
                <h3 
                onClick={hendlCommentReaction}
                className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] cursor-pointer">
                  React!
                </h3>
                {isCommentReaction && (
                  <div className="absolute bottom-[25px] left-0 rounded-[50px] shadow-xl bg-white py-3 px-[13px] flex items-center gap-[8px]">
                    <div onClick={() => commentReaction("like")}>
                      <LikeIcon
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => commentReaction("love")}>
                      <LoveIcon
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => commentReaction("dislike")}>
                      <DisLike
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => commentReaction("happy")}>
                      <Happy
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => commentReaction("funny")}>
                      <Funny
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => commentReaction("wow")}>
                      <WowIcon
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => commentReaction("angry")}>
                      <Angry
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => commentReaction("sad")}>
                      <Sad width={40} height={40} className="cursor-pointer" />
                    </div>
                  </div>
                )}
              </div>
              <h3 className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] cursor-pointer">
                Reply
              </h3>
              <h3 className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] cursor-pointer">
                15 minutes ago
              </h3>
              <span
                onClick={hendelComBer}
                ref={comBerRef}
                className="font-[Poppins] font-normal text-[15px] text-[#000000] cursor-pointer relative"
              >
                <BsThreeDots />
                {isComBer && (
                  <div
                    style={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.11)" }}
                    className="absolute w-[140px] h-auto  bottom-[20px] left-0 bg-white w-[100px] h-[100px] z-10 rounded-[7px] py-4 pl-4"
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
              </span>
            </div>
          </div>
        </div>
        <div className="ml-[44px] mt-[30px] flex  gap-[11px] ">
          <div className="bg-[#615DFA] w-[38px] h-[38px] rounded-full border-2 border-[#D9D9D9] "></div>
          <div>
            <p className="max-w-[475px] font-[Poppins] font-normal text-[12px] text-[#3E3F5E] mb-[15px]">
              {" "}
              <strong className="font-medium">Noyon</strong> It’s great
              oppurtunity
            </p>
            <div className="flex items-center gap-[25px]">
              <div className="font-[Poppins] font-medium text-[12px] text-[#000000] cursor-pointer flex items-center gap-1">
                {selectReplyIcon ? (
                  <span className="flex items-center gap-1">
                    {replyRecationIcon[selectReplyIcon]}
                  </span>
                ) : (
                  ""
                )}
                <div>
                  <span className=" font-[Poppins] font-medium text-[12px] text-[#000000]">
                    {selectReplyIcon ? 1 : ""}
                  </span>
                </div>
              </div>
              <div ref={replyIconRef} className="relative">
                <h3
                  onClick={hendelReplyIcon}
                  className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] cursor-pointer"
                >
                  React!
                </h3>
                {isReplyIcon && (
                  <div className="absolute bottom-[25px] left-0 rounded-[50px] shadow-xl bg-white py-3 px-[13px] flex items-center gap-[8px]">
                    <div onClick={() => replyReactionIcon("like")}>
                      <LikeIcon
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => replyReactionIcon("love")}>
                      <LoveIcon
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => replyReactionIcon("dislike")}>
                      <DisLike
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => replyReactionIcon("happy")}>
                      <Happy
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => replyReactionIcon("funny")}>
                      <Funny
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => replyReactionIcon("wow")}>
                      <WowIcon
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => replyReactionIcon("angry")}>
                      <Angry
                        width={40}
                        height={40}
                        className="cursor-pointer"
                      />
                    </div>
                    <div onClick={() => replyReactionIcon("sad")}>
                      <Sad width={40} height={40} className="cursor-pointer" />
                    </div>
                  </div>
                )}
              </div>
              <h3 className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] cursor-pointer">
                Reply
              </h3>
              <h3 className="font-[Poppins] font-medium text-[12px] text-[#AFB0C0] cursor-pointer">
                15 minutes ago
              </h3>
              <span
                onClick={hendelReply}
                ref={replyRef}
                className="font-[Poppins] font-normal text-[15px] text-[#000000] cursor-pointer relative"
              >
                <BsThreeDots />
                {isReply && (
                  <div
                    style={{ boxShadow: "0px 1px 4px 1px rgba(0, 0, 0, 0.11)" }}
                    className="absolute w-[140px] h-auto  bottom-[20px] left-0 bg-white w-[100px] h-[100px] z-10 rounded-[7px] py-4 pl-4"
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
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
