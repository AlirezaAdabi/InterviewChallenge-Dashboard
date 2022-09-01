import React from "react";
import Action from "../Action";
import Card from "../Card";

const Content = () => {
  return (
    <div className="flex flex-col bg-[#F5F5F5] h-screen px-6">
      <Action label="Manage Shifts" btnLabel="+ Add Shift" />
      <div className="flex flex-col md:flex-row w-full justify-between">
        <Card date="Morning" startTime="7:00 AM" endTime="2:00 PM"></Card>
        <Card date="Afternoon" startTime="2:00 PM" endTime="9:00 PM"></Card>
        <Card date="Night" startTime="9:00 AM" endTime="4:00 AM"></Card>
      </div>
    </div>
  );
};

export default Content;
