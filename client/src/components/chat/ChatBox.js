import React, { useContext, useEffect, useState } from "react";
import ChatHeader from "./ChatHeader.js";
import ChatBody from "./ChatBody.js";

import { getConversation } from "../../services/api.js";
import { AuthContext } from "../context/AccountAuth";

export default function ChatBox() {
  const { person, account } = useContext(AuthContext);
  const [conversation, setConversation] = useState({});

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({
        senderId: account.sub,
        receiverId: person.sub,
      });
      setConversation(data);
    };

    getConversationDetails();
  }, [person.sub]);

  return (
    <div>
      <ChatHeader person={person} />
      <ChatBody person={person} conversation={conversation} />
    </div>
  );
}
