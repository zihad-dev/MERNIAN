import React from "react";
import { BsThreeDots } from "react-icons/bs";

const ContentPost = () => {
  return (
    <div>
      <div className="bg-white pt-[15px] pr-[41px] pb-[20px] pl-[20px] rounded-[15px]">
        <div className="flex items-center justify-between mb-[23px]">
          <div className="flex items-center gap-[15px]">
            <div className="w-[50px] h-[50px] rounded-full bg-[#615DFA] border-3 border-[#D9D9D9]"></div>
            <div>
              <h4 className="font-[Poppins] font-bold text-[14px] text-[#303030]">Md Jihadul Islam</h4>
              <p className="font-medium font-[Poppins] text-[12px] text-[#AFB0C0]">29 minutes ago</p>
            </div>
          </div>
          <BsThreeDots />
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
        </div>
      </div>
    </div>
  );
};

export default ContentPost;
