import React, { useContext } from "react";
import { formatDate } from "../../utils/common-utils.js";
import { AuthContext } from "../context/AccountAuth.js";

export default function Message({ message }) {
  const { account } = useContext(AuthContext);
  return (
    <>
      {account.sub == message.senderId ? (
        <div
          style={{
            backgroundColor: "green",
            maxWidth: "60%",
            width: "fit-content",
            padding: "5px",
            margin: "5px",
            borderRadius: "10px",
            wordBreak: "break-word",
            marginLeft: "auto",
            minWidth: "15%",
            boxShadow: "0px 0px 5px",
            marginRight: "15px",
          }}
        >
          <h6
            style={{
              margin: "0",
              padding: "0",
              wordBreak: "break-word",
              color: "#f3f6f4",
            }}
          >
            {message.text}
          </h6>
          <p
            style={{
              margin: "0",
              padding: "0",
              wordBreak: "keep-all",
              fontSize: "10px",
              color: "#eeeeee",
              textAlign: "end",
            }}
          >
            {formatDate(message.createdAt)}
          </p>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: "white",
            maxWidth: "60%",
            width: "fit-content",
            padding: "5px",
            margin: "5px",
            borderRadius: "10px",
            wordBreak: "break-word",
            minWidth: "15%",
            boxShadow: "0px 0px 5px",
            marginLeft: "15px",
          }}
        >
          <h6 style={{ margin: "0", padding: "0", wordBreak: "break-word" }}>
            {message.text}
          </h6>
          <p
            style={{
              margin: "0",
              padding: "0",
              wordBreak: "keep-all",
              fontSize: "10px",
              color: "#919191",
              textAlign: "end",
            }}
          >
            {formatDate(message.createdAt)}
          </p>
        </div>
      )}
    </>
  );
}
