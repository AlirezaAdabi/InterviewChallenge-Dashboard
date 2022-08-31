import Link from "next/link";
import React, { memo, useMemo } from "react";
import { useRouter } from "next/router";
import style from "./style.module.css";

interface Props {
  label: string;
  icon: string;
  url: string;
}

const SidebarButton = ({ label, icon, url }: Props) => {
  const route = useRouter();
  const isActive = route.pathname.startsWith(url);
  return (
    <li>
      <Link href={url}>
        <a className={`${style.option} ${isActive ? style.active : ""}`}>
          <img
            src={icon}
            alt=""
            className={`${isActive ? style.image_active : ""}`}
          />
          <span>{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default memo(SidebarButton);
