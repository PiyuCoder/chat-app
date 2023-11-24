import React from "react";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import { AuthContext } from "./context/AccountAuth";
import { addUser } from "../services/api";

export default function Dialog() {
  const { setAccount } = useContext(AuthContext);

  const onSuccess = async (res) => {
    const decoded = jwtDecode(res.credential);
    setAccount(decoded);
    await addUser(decoded);
  };

  const onError = (err) => {
    console.log(err);
  };

  const qr =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/QR_code_for_mobile_English_Wikipedia.svg/330px-QR_code_for_mobile_English_Wikipedia.svg.png";
  return (
    <div
      className="dialog"
      style={{
        width: "50%",
        height: "75vh",
        boxShadow: "0px 1px 15px 0px",
        display: "flex",
        marginTop: "0px",
        margin: "auto",
        padding: "30px",
        backgroundColor: "white",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <ol style={{ marginTop: "40px" }}>
          <li>To login scan the QR code.</li>
          <li>To login scan the QR code.</li>
        </ol>
        <img src={qr} style={{ width: "50%", height: "50%" }} />
        <div style={{ position: "absolute" }}>
          <GoogleLogin onSuccess={onSuccess} onError={onError} />
        </div>
      </div>
    </div>
  );
}
