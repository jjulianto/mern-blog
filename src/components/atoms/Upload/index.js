import React from "react";
import { LoginBackground } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img src={LoginBackground} alt="preview" className="preview" />
      <input type="file" />
    </div>
  );
};

export default Upload;
