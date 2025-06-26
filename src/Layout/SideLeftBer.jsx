import React from "react";
import { FaNewspaper } from "react-icons/fa";
import Profile from "../Icon/ProfileIcon";
import ProfileIcon from "../Icon/ProfileIcon";
import LogOutIcon from "../Icon/LogOutIcon";
import FriendIcon from "../Icon/FriendIcon";
import FriendsIcon from "../Icon/FriendsIcon";
import PhotosIcon from "../Icon/PhotosIcon";
import GroupIcon from "../Icon/GroupIcon";

const SideLeftBer = () => {
  return (
    <div className="w-[300px] h-full bg-[#ffffff] pt-[15px] pr-[8px] pl-[24px] font-[Poppins] ">
      <div className="flex flex-col items-center mb-[42px]">
        <div>
          <div className="w-[120px] h-[120px] rounded-full bg-[#615DFA] mb-[15px]"></div>
        </div>
        
        <h3 className="font-bold text-[16px] text-[#000000]">
          Md Jihadul Islam
        </h3>
        <p className="font-medium text-[12px] text-[#AFB0C0]">www.jihad.com</p>
      </div>
      {/* title end  */}
      <div className="flex gap-[49px] items-center text-center mb-[64px]">
        <div>
          <h4 className="font-bold text-[16px] text-[#000000]">930</h4>
          <span className="font-medium text-[12px] text-[#AFB0C0]">
            Friends
          </span>
        </div>
        <div className='relative after:content-[""] after:w-[1px] after:h-[25px] after:absolute after:top-[50%] after:left-[-24px] after:bg-[#AFB0C0] after:-translate-y-1/2 before:content-[""] before:w-[1px] before:h-[25px] before:absolute before:top-[50%] before:right -[-24px] before:bg-[#AFB0C0] before:-translate-y-1/2'>
          <h4 className="font-bold text-[16px] text-[#000000]">58</h4>
          <span className="font-medium text-[12px] text-[#AFB0C0]">Post</span>
        </div>
        <div>
          <h4 className="font-bold text-[16px] text-[#000000]">1k</h4>
          <span className="font-medium text-[12px] text-[#AFB0C0]">
            Followers
          </span>
        </div>
      </div>
      {/* ------end------- */}
      <div className="mb-50">
        <ul className="flex flex-col gap-[5px] font-[Poppins] font-semibold text-[14px] text-[#AFB0C0]">
          <li className="group flex items-center gap-[29px] bg-transparent pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer hover:bg-[#23D2E2] font-[semibold] text-[14px] text-[#AFB0C0] ">
            
            <FaNewspaper className="text-[#AFB0C0] group-hover:text-white text-[20px]" />
            <span className=" group-hover:text-white">
               Newsfeed
            </span>
          </li>
          <li className="group flex items-center gap-[29px] bg-transparent pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer hover:bg-[#23D2E2] font-[semibold] text-[14px] text-[#AFB0C0]">
            <ProfileIcon className="text-[#AFB0C0] group-hover:text-white" />
            <span className="group-hover:text-white">
              Profile
            </span>
          </li>
          <li className="group flex items-center gap-[29px] bg-transparent pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer hover:bg-[#23D2E2] font-[semibold] text-[14px] text-[#AFB0C0]">
            <GroupIcon className="text-[#AFB0C0] group-hover:text-white" />
            <span className="group-hover:text-white">
              Groups
            </span>
          </li>
          <li className="group flex items-center gap-[29px] bg-transparent pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer hover:bg-[#23D2E2] font-[semibold] text-[14px] text-[#AFB0C0]">
            <PhotosIcon className="text-[#AFB0C0] group-hover:text-white" />
            <span className="group-hover:text-white">
              Photos
            </span>
          </li>
          <li className="group flex items-center gap-[29px] bg-transparent pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer hover:bg-[#23D2E2] font-[semibold] text-[14px] text-[#AFB0C0]">
            <FriendsIcon className="text-[#AFB0C0] group-hover:text-white" />
            <span className=" group-hover:text-white">
             Friends
            </span>
          </li>
          <li className="group flex items-center gap-[29px] bg-transparent pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer hover:bg-[#23D2E2] font-[semibold] text-[14px] text-[#AFB0C0]">
            <FriendIcon className="text-[#AFB0C0] group-hover:text-white" />
            <span className="group-hover:text-white">
              Friends Request
            </span>
          </li>
          <li className="group flex items-center gap-[29px] bg-transparent pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer hover:bg-[#23D2E2] font-[semibold] text-[14px] text-[#AFB0C0]">
            <LogOutIcon className="text-[#AFB0C0] group-hover:text-white" />
            <span className="group-hover:text-white">
             Logout
            </span>
          </li>
        </ul>
      </div>
      {/* -----end------ */}
    </div>
  );
};

export default SideLeftBer;
