import React from "react";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import HomeLeft from "../Component/HomeLeft";
import ContentPost from "../Component/ContentPost";
import ProfilePart from "../Component/ProfilePart";

const HomePage = () => {
  return (
    <div>
     <ProfilePart/>
    <div className="flex gap-[15px] ">
      <div className="">
        <HomeLeft/>
      </div>
    <div className="flex flex-col gap-[26px]">
      {/* <ContentPost  videoContent={false}/> */}
      <ContentPost />
      <ContentPost  videoContent={true} Participants={true} />
      <ContentPost  photos={true} Participants={true}/>
      <ContentPost  videoContent={true} Participants={true}/>
      <ContentPost />
     
    </div>
    </div>
    </div>
  );
};

export default HomePage;
