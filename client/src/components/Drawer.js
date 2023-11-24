import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/AccountAuth";
import arrow from "./arrow.svg";

export default function Drawer({ isOpen }) {
  const { account } = useContext(AuthContext);
  const disp = !isOpen ? "none" : "block";
  function arrowfn() {
    isOpen = false;
    console.log(isOpen);
  }

  useEffect(() => {}, [isOpen]);
  return (
    <div
      className="drawer"
      style={{
        display: disp,
        zIndex: "3",
        position: "absolute",
      }}
    >
      <div
        style={{
          width: "450px",
          height: "640px",
          boxShadow: "0px 0px 30px 0px",
        }}
      >
        <div
          style={{
            display: "flex",
            backgroundColor: "green",
            padding: "80px 10px 10px 10px",
          }}
        >
          <img
            src={arrow}
            onClick={arrowfn}
            style={{
              height: "30px",
              width: "30px",
              margin: "5px",
            }}
          />
          <h3 style={{ color: "white", marginLeft: "30px" }}>Profile</h3>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "#d5d2d2",
            height: "200px",
          }}
        >
          <img
            src={account.picture}
            style={{ borderRadius: "50%", height: "150px", width: "150px" }}
          />
        </div>
        <div
          style={{
            boxShadow: "0px 0px 1px 0px",
            height: "100px",
            padding: "10px",
          }}
        >
          <p style={{ color: "green", fontWeight: "500" }}>Your name</p>
          <h5>{account.name}</h5>
        </div>
        <div
          style={{
            padding: "5px 10px 5px 10px",
            backgroundColor: "#d5d2d2",
          }}
        >
          <p
            style={{ color: "#727171", fontWeight: "100", wordSpacing: "-1px" }}
          >
            This is not your username or pin. This name will be visible to your
            WhatsApp contacts
          </p>
        </div>
        <div
          style={{
            boxShadow: "0px 0px 1px 0px",
            height: "100px",
            padding: "10px",
          }}
        >
          <p style={{ color: "green", fontWeight: "500" }}>About</p>
          <h5>Hey there! I'm using WhatsApp</h5>
        </div>
        <div
          style={{ backgroundColor: "rgba(0,0,0,0.05)", height: "50px" }}
        ></div>
      </div>
    </div>
  );
}
