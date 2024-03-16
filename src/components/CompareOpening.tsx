import React from "react";
import Card from "./Card";

const CompareOpening = () => {
  return (
    <Card className="p-4 shadow-md max-w-xl space-y-4 py-10 ">
      <div>
        <p className="text-lg font-medium ">Javascript VS Python Job Opening</p>
      </div>
      <div className="flex flex-row justify-between">
        <div className="flex flex-col items-start">
          <p className="text-sm font-medium ">Javascript</p>
          <p className="text-lg font-semibold ">60%</p>
          <p className="text-xs">5643</p>
        </div>
        <div className="flex flex-col items-center mt-2 ">
          <div className="border-l h-4"></div>
          <p className="text-xs">vs</p>
          <div className="border-l h-4"></div>
        </div>
        <div>
          {" "}
          <div className="flex flex-col items-end">
            <p className="text-sm font-medium ">Python</p>
            <p className="text-lg font-semibold ">40%</p>
            <p className="text-xs">3526</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-row w-full space-x-1 ">
          <div className="bg-indigo-600 h-8 w-[60%] rounded-lg "/>
          <div className="bg-[#e3b022] h-8 w-[40%] rounded-lg "/>
        </div>
      </div>
    </Card>
  );
};

export default CompareOpening;
