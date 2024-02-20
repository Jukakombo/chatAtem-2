import React from "react";
const Text = ({ aiText }) => {
  return (
    <div className="  flex bg-[#333333] mt-4 p-2 rounded-md">
      <img
        src="/ali.png"
        alt="alison"
        className="h-[25px] w-[25px] mr-2 rounded-md"
      />
      <pre style={{ maxWidth: "100%", whiteSpace: "pre-wrap" }}> {aiText}</pre>
    </div>
  );
};

export default Text;
