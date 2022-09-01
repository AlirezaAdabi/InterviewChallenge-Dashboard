import React from "react";

interface Props {
  label: string;
  children?: JSX.Element;
}

const Line = ({ children, label }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#F8F8FC] w-full p-4 rounded mb-2">
      <div className="flex w-full justify-between">
        <span className="text-[#8A92A6]">{label}</span>
        <button>
          <img src="/asset/More.png" alt="" />
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Line;
