import React from "react";

export default function EmptyPanel() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        border: "none",
      }}
    >
      <img
        src="https://images.news18.com/ibnlive/uploads/2023/04/untitled-design-2023-04-04t124923.888.jpg?impolicy=website&width=510&height=356"
        style={{ borderRadius: "0px", width: "40%" }}
      />
      <div>
        <h1
          style={{ textAlign: "center", marginTop: "30px", color: "#5b5b5b" }}
        >
          WhatsApp for Web
        </h1>
        <h4
          style={{ textAlign: "center", marginTop: "10px", color: "#5b5b5b" }}
        >
          Now send and receive messages without keeping your phone online
        </h4>
      </div>
    </div>
  );
}
