import React from "react";
import Panels from "./Panels";

export default function ChatPage() {
  return (
    <div
      style={{
        padding: "20px",
        height: "100vh",
        width: "100%",
        backgroundColor: "#f3f6f4",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          height: "100%",
          boxShadow: "0px 0px 15px 0px",
        }}
      >
        <Panels />
      </div>
    </div>
  );
}
