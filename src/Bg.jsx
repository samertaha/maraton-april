import React from "react";
import "./Bg.css";
import close_x from "./assets/close.png";

export const Bg = () => {
  return (
    <div className="bg_general">
      <img src={close_x} alt="close" className="close_img" />
      <div className="title">העלאת תמונה כדי להסיר את הרקע</div>
    </div>
  );
};

export default Bg;
