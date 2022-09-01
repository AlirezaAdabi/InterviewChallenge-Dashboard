import React, { useState } from "react";
import style from "./style.module.css";

interface Props {
  label: string;
}

const CardDateButton = ({ label }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`${active ? style.btn_active : style.btn}`}
      onClick={() => {
        setActive(!active);
      }}
    >
      {label}
    </button>
  );
};

export default CardDateButton;
