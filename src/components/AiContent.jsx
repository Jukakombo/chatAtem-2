import React from "react";
// import Welcome from "./Welcome";
import Text from "./Text";
import InputQuestion from "./InputQuestion";
// import Question from "./Question";
import { useState } from "react";
const API_KEY = "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";
const systemMessage = {
  //  Explain things like you're talking to a software professional with 5 years of experience.
  role: "system",
  content:
    "Explain things like you're talking to a software professional with 2 years of experience.",
};
const AiContent = () => {
  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm Alison De Best Ask me anything!",
      sentTime: "just now",
      sender: "ChatGPT",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [inputMessage, setInputMessage] = useState("");

  const handleSend = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const newMessage = {
      message: inputMessage,
      direction: "outgoing",
      sender: "user",
    };

    const newMessages = [...messages, newMessage];

    setMessages(newMessages);
    setInputMessage("");

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message };
    });

    const apiRequestBody = {
      model: "gpt-3.5-turbo",
      messages: [systemMessage, ...apiMessages],
    };

    await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: "Bearer " + API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(apiRequestBody),
    })
      .then((data) => data.json())
      .then((data) => {
        setMessages([
          ...chatMessages,
          {
            message: data.choices[0].message.content,
            sender: "ChatGPT",
          },
        ]);
        setIsTyping(false);
      });
  }

  return (
    <div>
      {/* <Welcome /> */}
      {/* <Question /> */}
      <div className="h-screen flex flex-col justify-between">
        {messages.map((message, i) => (
          <div key={i}>
            {message.sender === "ChatGPT" ? (
              <Text aiText={message.message} />
            ) : (
              <p className="bg-[#2D2B42] p-2 rounded-md my-4">
                {message.message}
              </p>
            )}
          </div>
        ))}

        <InputQuestion
          isTyping={isTyping}
          handleSend={handleSend}
          inputMessage={inputMessage}
          setInputMessage={setInputMessage}
        />
      </div>
    </div>
  );
};

export default AiContent;