import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import style from "./style.module.css";

interface Props {
  label: string;
  url: string;
}
const NavbarButton = ({ url, label }: Props) => {
  const route = useRouter();
  const isActive = route.pathname.includes(url);
  return (
    <li>
      <Link href={url}>
        <a className={`${style.btn} ${isActive ? style.btn_active : ""}`}>
          <span className="uppercase font-semibold">{label}</span>
        </a>
      </Link>
    </li>
  );
};

export default NavbarButton;
