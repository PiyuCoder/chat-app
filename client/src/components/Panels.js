import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "./context/AccountAuth";
import setting from "./setting.svg";
import message from "./message.svg";
import search from "./search.svg";
import EmptyPanel from "./EmptyPanel";
import Drawer from "./Drawer";
import Conversations from "./Conversations.js";
import ChatBox from "./chat/ChatBox";

export default function Panels() {
  const { account, person } = useContext(AuthContext);
  const [isOpen, setOpen] = useState(false);
  const [text, setText] = useState("");

  function handleDrawer() {
    setOpen((prevState) => !prevState);
  }

  function openProfile() {
    setOpen((prevState) => !prevState);
  }

  function closeDrawer() {
    setOpen((prevState) => prevState && !prevState);
  }

  return (
    <div style={{ display: "flex", height: "100%" }} className="panel">
      <div
        style={{
          minWidth: "450px",
          height: "100%",
          backgroundColor: "#e2e2e2",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#e2e2e2",
            width: "100%",
            height: "60px",
          }}
        >
          <img
            className="icons"
            onClick={handleDrawer}
            style={{
              borderRadius: "50%",
              height: "50px",
              width: "50px",
              margin: "5px 0px 0px 10px",
            }}
            src={account.picture}
          />
          <div style={{ marginTop: "65px", position: "absolute" }}>
            <Drawer isOpen={isOpen} />
          </div>

          <h5>{account.name}</h5>
          <div
            style={{
              marginLeft: "auto",
              display: "flex",
            }}
          >
            <img
              className="icons"
              src={message}
              style={{
                height: "40px",
                width: "40px",
              }}
            />
            <div class="dropdown">
              <img
                className="icons btn btn-secondary dropdown-toggle"
                src={setting}
                data-bs-toggle="dropdown"
                aria-expanded="true"
                style={{
                  height: "40px",
                  width: "40px",
                }}
              />
              <ul className="dropdown-menu">
                <li>
                  <button
                    className="dropdown-item"
                    type="button"
                    onClick={openProfile}
                  >
                    Profile
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    My Account
                  </button>
                </li>
                <li>
                  <button className="dropdown-item" type="button">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          style={{ padding: "12px", display: "flex", backgroundColor: "white" }}
        >
          <img
            src={search}
            style={{
              height: "30px",
              width: "30px",
              backgroundColor: "rgba(0,0,0,0.1)",
              outline: "none",
              border: "none",
              borderRadius: "8px 0px 0px 8px",
              height: "40px",
              padding: "5px",
            }}
          />
          <input
            placeholder="Search or start new chat"
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "100%",
              height: "40px",
              backgroundColor: "rgba(0,0,0,0.1)",
              outline: "none",
              border: "none",
              borderRadius: "0px 8px 8px 0px",
              paddingLeft: "10px",
            }}
          />
        </div>
        <div>
          <Conversations text={text} />
        </div>
      </div>
      <div
        style={{
          boxSizing: "border-box",
          borderLeft: "1px solid #f3f3f3",
          backgroundColor: "rgba(0,0,0,0.01)",
          width: "100%",
        }}
      >
        <div style={{ width: "100%", height: "100%" }} onClick={closeDrawer}>
          {Object.keys(person).length ? <ChatBox /> : <EmptyPanel />}
        </div>
      </div>
    </div>
  );
}
