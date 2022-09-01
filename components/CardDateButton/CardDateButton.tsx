import React, { useEffect, useState } from "react";
import style from "./style.module.css";

interface Props {
  label: string;
  isActive?: boolean;
}

const CardDateButton = ({ label, isActive = false }: Props) => {
  const [active, setActive] = useState<boolean>(false);
  useEffect(() => {
    console.log(isActive);

    if (isActive) {
      setActive(true);
    }
  }, [isActive]);

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
