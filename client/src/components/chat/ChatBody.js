import React, { useContext, useEffect, useState } from "react";
import bodyBg from "../bodyBg.jpg";
import ChatFooter from "./ChatFooter.js";
import { AuthContext } from "../context/AccountAuth";
import { getMessages, newMessage } from "../../services/api";
import Message from "./Message.js";

export default function ChatBody({ person, conversation }) {
  const { account } = useContext(AuthContext);
  const [value, setValue] = useState("");
  const [messages, setMessages] = useState([]);
  const [flag, setFlag] = useState(false);
  const [file, setFile] = useState("");

  useEffect(() => {
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    };
    getMessageDetails();
  }, [person._id, conversation._id, flag]);

  const sendText = async (e) => {
    if (e.keyCode === 13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: "text",
        text: value,
      };

      await newMessage(message);
      setValue("");
      setFlag((prev) => !prev);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bodyBg})`,
          height: "78vh",
          overflow: "auto",
        }}
      >
        {messages && messages.map((message) => <Message message={message} />)}
      </div>
      <ChatFooter
        sendText={sendText}
        setValue={setValue}
        value={value}
        file={file}
        setFile={setFile}
      />
    </>
  );
}
