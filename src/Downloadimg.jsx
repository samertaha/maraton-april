import React from "react";
import "./Download_img.css";
import newimg from "./assets/new.png";
import check from "./assets/check.png";

const Downloadimg = (props) => {
  return (
    <div
      className={
        "download_img_cont " +
        (props.top == "true" ? "download_img_cont_border" : "")
      }
    >
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

      <button className="download_btn">{props.btn_text}</button>

      <img src={check} className="check_img" alt="" />
      <div className="last_title">{props.last_title}</div>
    </div>
  );
};

export default Downloadimg;
