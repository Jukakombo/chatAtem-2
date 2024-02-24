import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="flex items-center">
        <img src="/gear.gif" alt="" />
        <p className="font-bold">Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
