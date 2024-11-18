import React from "react";
import "./Download_img.css";
import newimg from "./assets/new.png";

const Download_img = (props) => {
  return (
    <div className="download_img_cont">
      <div
        className={
          "download_img_title " +
          (props.top == "false" ? " padding_top_title " : "")
        }
      >
        {props.title}
      </div>
      {props.top === "true" ? (
        <img src={newimg} className={"download_img_new"} alt="" />
      ) : (
        <></>
      )}
      <div className="download_img_subtitle">{props.subtitle}</div>
    </div>
  );
};

export default Download_img;
