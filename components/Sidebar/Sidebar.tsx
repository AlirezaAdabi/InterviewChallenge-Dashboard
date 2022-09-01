import React from "react";
import SidebarButton from "../SidebarButton";
import Profile from "../Profile";
import style from "./style.module.css";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside
      className={`${style.navbar} h-screen min-w-[240px] flex justify-between flex-col`}
    >
      <div className="w-full">
        <Link href="/">
          <a>
            {" "}
            <img src={"/Logo.png"} className="pl-4 my-9" />
          </a>
        </Link>

        <ul className="text-[#928EA0]">
          <SidebarButton
            label="Reports"
            icon="/asset/note.png"
            url="/reports"
          />
          <SidebarButton
            label="Factory"
            icon="/asset/factory.png"
            url="/factory"
          />
          <SidebarButton
            label="Integrations"
            icon="/asset/data.png"
            url="/integrations"
          />
          <SidebarButton
            label="Support"
            icon="/asset/shield-tick.png"
            url="/support"
          />
        </ul>
      </div>
      <div>
        <Profile />
      </div>
    </aside>
  );
};

export default Sidebar;
