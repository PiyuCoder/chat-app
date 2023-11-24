import React, { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getUser, setConversation } from "../services/api";
import { AuthContext } from "./context/AccountAuth";

export default function Conversations({ text }) {
  const [users, setUsers] = useState([]);
  const { account, setPerson } = useContext(AuthContext);

  const getPerson = () => {
    setPerson(users);
  };

  useEffect(() => {
    const fetchData = async () => {
      let data = await getUser();
      const filteredData = await data.filter((user) =>
        user.name.toLowerCase().includes(text.toLowerCase())
      );
      setUsers(filteredData);
    };

    fetchData();
  }, [text]);
  return (
    <div style={{ height: "81vh", overflow: "overlay" }}>
      <ul style={{ listStyle: "none", width: "100%", padding: "5px" }}>
        {users.map(
          (user) =>
            user.sub !== account.sub && (
              <li>
                <div
                  className="conversation"
                  onClick={async () => {
                    setPerson(user);
                    await setConversation({
                      senderId: account.sub,
                      receiverId: user.sub,
                    });
                  }}
                >
                  <img
                    src={user.picture}
                    style={{
                      height: "50px",
                      width: "50px",
                      borderRadius: "50%",
                      marginRight: "10px",
                    }}
                  />
                  {user.name}
                </div>
              </li>
            )
        )}
      </ul>
    </div>
  );
}
