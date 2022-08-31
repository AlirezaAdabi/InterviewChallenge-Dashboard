import React from "react";
import style from "./style.module.css";
const Profile = () => {
  return (
    <div className={`${style.profile_box}`}>
      <div className="flex justify-start items-center">
        <img
          src="/asset/Ellipse2.png"
          className="w-[36px] h-[36px]  m-[13px]"
        />
        <div className="my-[10px] text-[#928EA0] leading-3	">
          <span className="text-base"> Matthew Perry </span>
          <span className="text-xs">mathewperry@xyz.com</span>
        </div>
      </div>
      <div>
        <a href="" className="flex justify-start items-center  m-[13px]">
          <img
            src="/asset/logout.png"
            className="mr-[26px] w-[20px] h-[20px]"
          />
          <span className="text-[#928EA0]">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Profile;
