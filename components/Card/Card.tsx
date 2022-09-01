import React from "react";
import CardDateButton from "../CardDateButton";

interface Props {
  date: string;
  startTime: string;
  endTime: string;
  children?: JSX.Element;
}

const Card = ({ date, startTime, endTime, children }: Props) => {
  return (
    <div className="flex flex-col justify-start items-center w-[368px] bg-white rounded-lg border border-[#E7E8F2] h-fit ">
      <div className="flex justify-between px-4 w-full text-[#8A92A6] my-4 items-center">
        <div>
          <span>{date}</span> | <span>{startTime}</span> -{" "}
          <span>{endTime}</span>
        </div>
        <button>
          <img src="/asset/edit-2.png" />
        </button>
      </div>
      <div className="flex w-full justify-center space-x-2 text-xs mb-4">
        <CardDateButton label="Mon" isActive />
        <CardDateButton label="Tue" isActive />
        <CardDateButton label="Wed" isActive />
        <CardDateButton label="Thu" />
        <CardDateButton label="Fri" />
        <CardDateButton label="Sat" />
        <CardDateButton label="Sun" />
      </div>
      <div className="w-full px-2">{children}</div>
    </div>
  );
};

export default Card;
