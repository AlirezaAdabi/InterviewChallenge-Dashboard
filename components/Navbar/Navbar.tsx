import React from "react";
import NavbarButton from "../NavbarButton";

const Navbar = () => {
  return (
    <nav className="flex justify-between w-full px-[35px] pt-[48px] items-center mb-4">
      <ul className="flex justify-between w-[700px]">
        <NavbarButton label="stations" url="/factory/stations" />
        <NavbarButton label="operators" url="/factory/operators" />
        <NavbarButton label="watchers" url="/factory/watchers" />
        <NavbarButton label="resource" url="/factory/resources" />
        <NavbarButton label="sensors" url="/factory/sensors" />
      </ul>
      <button>
        <img src="/asset/notification.png" />
      </button>
    </nav>
  );
};

export default Navbar;
