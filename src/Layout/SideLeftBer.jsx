import React from "react";
import { FaNewspaper } from "react-icons/fa";
import Profile from "../Icon/ProfileIcon";
import ProfileIcon from "../Icon/ProfileIcon";
import LogOutIcon from "../Icon/LogOutIcon";
import FriendIcon from "../Icon/FriendIcon";
import FriendsIcon from "../Icon/FriendsIcon";
import PhotosIcon from "../Icon/PhotosIcon";
import GroupIcon from "../Icon/GroupIcon";
import { Link, NavLink } from "react-router";

const SideLeftBer = () => {
  return (
    <div className="w-[300px] h-full bg-[#ffffff]  font-[Poppins] ">
      <div className="relative ">
        <div className="w-full h-[75px] bg-[#45437F]  ">
          <div className="w-[120px] h-[120px] rounded-full bg-[#615DFA] border-[6px] border-white absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 shadow-md"></div>
        </div>
      </div>
      <div className="pr-[8px] pl-[24px]">
        <div className="flex flex-col items-center justify-center mb-[42px]  pt-[80px]">
          <h3 className="font-bold text-[16px] text-[#000000]">
            Md Jihadul Islam
          </h3>
          <p className="font-medium text-[12px] text-[#AFB0C0]">
            www.jihad.com
          </p>
        </div>
        {/* title end  */}
        <div className="flex gap-[49px] items-center text-center mb-[64px]">
          <div>
            <h4 className="font-bold text-[16px] text-[#000000]">930</h4>
            <span className="font-medium text-[12px] text-[#AFB0C0]">
              Friends
            </span>
          </div>
          <div className='relative after:content-[""] after:w-[1px] after:h-[25px] after:absolute after:top-[50%] after:left-[-24px] after:bg-[#AFB0C0] after:-translate-y-1/2 before:content-[""] before:w-[1px] before:h-[25px] before:absolute before:top-[50%] before:right-[-24px] before:bg-[#AFB0C0] before:-translate-y-1/2'>
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
        <div className="">
       <ul className="flex flex-col gap-[5px]">
  <li>
    <NavLink
      to="/newsfeed"
      className={({ isActive }) =>
        `group flex items-center gap-[29px] pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer font-[semibold] text-[14px] ${
          isActive
            ? "bg-[#23D2E2] text-white"
            : "text-[#AFB0C0] hover:bg-[#23D2E2] hover:text-white"
        }`
      }
    >
      <FaNewspaper className="text-[20px]" />
      <span className="font-[Poppins] font-semibold text-[14px]">
        Newsfeed
      </span>
    </NavLink>
  </li>
   <li>
    <NavLink
      to="/friends"
      className={({ isActive }) =>
        `group flex items-center gap-[29px] pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer font-[semibold] text-[14px] ${
          isActive
            ? "bg-[#23D2E2] text-white"
            : "text-[#AFB0C0] hover:bg-[#23D2E2] hover:text-white"
        }`
      }
    >
      <FriendsIcon className="text-[20px]" />
      <span className="font-[Poppins] font-semibold text-[14px]">Friends</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/profile"
      className={({ isActive }) =>
        `group flex items-center gap-[29px] pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer font-[semibold] text-[14px] ${
          isActive
            ? "bg-[#23D2E2] text-white"
            : "text-[#AFB0C0] hover:bg-[#23D2E2] hover:text-white"
        }`
      }
    >
      <ProfileIcon className="text-[20px]" />
      <span className="font-[Poppins] font-semibold text-[14px]">Profile</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/groups"
      className={({ isActive }) =>
        `group flex items-center gap-[29px] pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer font-[semibold] text-[14px] ${
          isActive
            ? "bg-[#23D2E2] text-white"
            : "text-[#AFB0C0] hover:bg-[#23D2E2] hover:text-white"
        }`
      }
    >
      <GroupIcon className="text-[20px]" />
      <span className="font-[Poppins] font-semibold text-[14px]">Groups</span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/photos"
      className={({ isActive }) =>
        `group flex items-center gap-[29px] pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer font-[semibold] text-[14px] ${
          isActive
            ? "bg-[#23D2E2] text-white"
            : "text-[#AFB0C0] hover:bg-[#23D2E2] hover:text-white"
        }`
      }
    >
      <PhotosIcon className="text-[20px]" />
      <span className="font-[Poppins] font-semibold text-[14px]">Photos</span>
    </NavLink>
  </li>
  <li>
    <NavLink
      to="/friend-requests"
      className={({ isActive }) =>
        `group flex items-center gap-[29px] pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer font-[semibold] text-[14px] ${
          isActive
            ? "bg-[#23D2E2] text-white"
            : "text-[#AFB0C0] hover:bg-[#23D2E2] hover:text-white"
        }`
      }
    >
      <FriendIcon className="text-[20px]" />
      <span className="font-[Poppins] font-semibold text-[14px]">
        Friends Request
      </span>
    </NavLink>
  </li>

  <li>
    <NavLink
      to="/logout"
      className={({ isActive }) =>
        `group flex items-center gap-[29px] pt-[15px] pb-[14px] pl-[20px] rounded-[10px] cursor-pointer font-[semibold] text-[14px] ${
          isActive
            ? "bg-[#23D2E2] text-white"
            : "text-[#AFB0C0] hover:bg-[#23D2E2] hover:text-white"
        }`
      }
    >
      <LogOutIcon className="text-[20px]" />
      <span className="font-[Poppins] font-semibold text-[14px]">Logout</span>
    </NavLink>
  </li>
</ul>

        </div>
        {/* -----end------ */}
      </div>
    </div>
  );
};

export default SideLeftBer;
