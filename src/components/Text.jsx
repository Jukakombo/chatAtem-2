import React from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { FaRegCopy } from "react-icons/fa";
import { useTypewriter } from "react-simple-typewriter";
const Text = ({ aiText, copy, setCopy, message }) => {
  const [text] = useTypewriter({
    words: [`${aiText}`],
    loop: 1,
    typeSpeed: 50, 
  });
  return (
    <div className="flex bg-gray-500 mt-4 p-2 rounded-md">
      <img
        src="/ali.png"
        alt="alison"
        className="h-[25px] w-[25px] mr-2 rounded-md"
      />

      <pre
        style={{ maxWidth: "100%", whiteSpace: "pre-wrap" }}
        className="text-black"
      >
        <span>{text}</span>
        {message.sender === "ChatGPT" && (
          <div className="flex items-center mt-2">
            <CopyToClipboard
              text={aiText}
              onCopy={() => setCopy((prev) => !prev)}
            >
              <button>
                <FaRegCopy size={20} className="text-white" />
              </button>
            </CopyToClipboard>
            {copy && <span className="text-blue-900 ml-4">Copied</span>}
          </div>
        )}
      </pre>
    </div>
  );
};

export default Text;
