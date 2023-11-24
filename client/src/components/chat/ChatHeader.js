import React, { useContext } from "react";
import setting from "../setting.svg";
import search from "../search.svg";
import dp from "../dp.png";

export default function ChatHeader({ person }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px",
        paddingLeft: "12px",
        paddingRight: "12px",
        backgroundColor: "green",
      }}
    >
      <img
        src={person.picture}
        style={{
          height: "40px",
          width: "40px",
          borderRadius: "50%",
          marginRight: "12px",
        }}
      />
      <div>
        <p style={{ margin: "0", padding: "0", color: "white" }}>
          {person.name}
        </p>
        <p
          style={{
            margin: "0",
            padding: "0",
            fontSize: "11px",
            color: "white",
          }}
        >
          Online
        </p>
      </div>

      <div
        style={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
      >
        <img
          src={search}
          style={{
            height: "25px",
            width: "25px",
          }}
        />

        <img
          className="icons"
          src={setting}
          // data-bs-toggle="dropdown"
          // aria-expanded="true"
          style={{
            height: "25px",
            width: "25px",
            marginLeft: "20px",
          }}
        />
      </div>
    </div>
  );
}
