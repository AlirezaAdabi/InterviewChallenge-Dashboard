import React from "react";
import Action from "../Action";
import Card from "../Card";
import Line from "../Line";
interface Props {
  children?: JSX.Element;
}
const Content = ({ children }: Props) => {
  return (
    <div className="flex flex-col bg-[#F8F8FC] h-full px-6">
      <Action label="Manage Shifts" btnLabel="+ Add Shift" />
      <div>{children}</div>
    </div>
  );
};

export default Content;
