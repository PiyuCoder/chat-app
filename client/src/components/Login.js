import React from "react";
import Dialog from "./Dialog";
import { useContext } from "react";
import { AuthContext } from "./context/AccountAuth";
import ChatPage from "./ChatPage.js";

export default function Login() {
  const { account } = useContext(AuthContext);
  return (
    <div>
      {account ? (
        <ChatPage />
      ) : (
        <>
          <div
            style={{
              backgroundColor: "green",
              height: "200px",
              width: "100%",
              zIndex: "-5",
            }}
          ></div>
          <div
            style={{ marginTop: "0px", position: "absolute", width: "100%" }}
          >
            <Dialog />
          </div>
        </>
      )}
    </div>
  );
}
