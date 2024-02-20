import React from "react";
import { LuSendHorizonal } from "react-icons/lu";

const InputQuestion = ({
  handleSend,
  inputMessage,
  setInputMessage,
  isTyping,
}) => {
  return (
    <div className="mt-4">
      {isTyping && <div>Thinking...</div>}

      <div className="bg-[#2D2B42] p-2 rounded-md">
        <form
          onSubmit={handleSend}
          className="flex items-center justify-between "
        >
          <textarea
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            rows={1}
            cols={5}
            type="text"
            placeholder="Type your query here..."
            className="w-full input_query outline-none"
          />
          <button type="submit">
            <LuSendHorizonal size={25} className="text-white " />
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputQuestion;
