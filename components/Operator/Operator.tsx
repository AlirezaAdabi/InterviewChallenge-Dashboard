import React from "react";
interface Props {
  name: string;
  station: number;
}

const Operator = ({ name, station }: Props) => {
  return (
    <div className="bg-white flex justify-between w-[318px] h-[60px] items-center rounded mt-4 px-4">
      <div className="flex items-center space-x-6">
        <img src="/asset/profile.png" />
        <span className="capitalize text-[#8A92A6]">{name}</span>
      </div>

      <span className="text-[#8A92A6]/60"> STATION-{station}</span>
    </div>
  );
};

export default Operator;
