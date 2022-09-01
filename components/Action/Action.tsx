import Link from "next/link";
import React from "react";

interface Props {
  label: string;
  btnLabel: string;
}

const Action = ({ label, btnLabel }: Props) => {
  return (
    <div className="flex w-full justify-between mt-14 mb-3 items-baseline">
      <div className="flex text-[#364066] text-2xl space-x-2 items-center">
        <Link href="">
          <a>
            <img src="/asset/Frame.png" alt="" />
          </a>
        </Link>
        <span>{label}</span>
      </div>
      <button className="bg-[#5248AC] text-white px-4 py-2 rounded">
        {" "}
        {btnLabel}{" "}
      </button>
    </div>
  );
};

export default Action;
