import React, { useEffect, useState } from "react";
import search from "../search.svg";
import emojis from "../emojis.svg";
import mic from "../mic.svg";
import attach from "../attach.svg";
import { uploadFile } from "../../services/api";
export default function ChatFooter({
  sendText,
  setValue,
  value,
  file,
  setFile,
}) {
  useEffect(() => {
    const getImage = async () => {
      if (file) {
        let data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        await uploadFile(data);
      }
    };
    getImage();
  }, [file]);

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
    setValue(e.target.files[0].name);
  };
  return (
    <div
      style={{
        backgroundColor: "#e2e2e2",
        padding: "8px",
        height: "60px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <img
        src={emojis}
        style={{
          height: "25px",
          width: "25px",
          marginLeft: "10px",
        }}
      />
      <label htmlFor="fileinput">
        <img
          src={attach}
          style={{
            height: "25px",
            width: "25px",
            marginLeft: "10px",
          }}
        />
      </label>

      <input
        type="file"
        id="fileinput"
        style={{ display: "none" }}
        onChange={onFileChange}
      />

      <input
        placeholder="Type a message"
        style={{
          height: "48px",
          width: "87%",
          borderRadius: "15px",
          outline: "none",
          border: "none",
          paddingLeft: "20px",
          paddingRight: "20px",
          marginLeft: "10px",
        }}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => sendText(e)}
        value={value}
      />
      <img
        src={mic}
        style={{
          height: "25px",
          width: "25px",
          marginLeft: "10px",
        }}
      />
    </div>
  );
}
