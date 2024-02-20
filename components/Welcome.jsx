import React from "react";

const Welcome = () => {
  return (
    <div className="flex items-center bg-[#2D2B42] p-2 rounded-md">
      <div className="">
        <img
          className="w-[30px] h-[30px] rounded-md mr-4 "
          src="/ali.png"
          alt="alison"
        />
      </div>
      <p className="text font-bold">Hello, I'm Alison De Best Ask me anything! </p>
    </div>
  );
};

export default Welcome;
