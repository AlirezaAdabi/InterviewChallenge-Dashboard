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
    <div className="flex flex-col justify-center items-center w-[368px] bg-white rounded-lg border border-[#E7E8F2] ">
      <div className="flex justify-between px-4 w-full text-[#8A92A6] my-4 items-center">
        <div>
          <span>{date}</span> | <span>{startTime}</span> -{" "}
          <span>{endTime}</span>
        </div>
        <img src="/asset/edit-2.png" />
      </div>
      <div className="flex w-full justify-center space-x-1.5 text-xs mb-4">
        <CardDateButton label="Mon"/>
        <CardDateButton label="Tue"/>
        <CardDateButton label="Wed"/>
        <CardDateButton label="Thu"/>
        <CardDateButton label="Fri"/>
        <CardDateButton label="Sat"/>
        <CardDateButton label="Sun"/>
      </div>
    </div>
  );
};

export default Card;
