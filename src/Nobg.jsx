import React, { useRef } from "react";
import "./Nobg.css";
import upload_img from "./assets/img.png";
import warning from "./assets/warning.png";

const Nobg = (props) => {
  const inputElement = useRef();

  function choose_color_func() {
    inputElement.current.click(); // Trigger the color input click event
  }

  return (
    <div className="no_bg_cont">
      {props.title == "Nobg" ? (
        <>
          {" "}
          <div className="nobg_title">
            אל תשכח להוריד את הקבצים, הם ימחקו אוטומטית כשתצא מהדף
          </div>
          <img className="warning" src={warning} alt="warning" />
          <button className="choose_color" onClick={choose_color_func}>
            צבע רקע
          </button>
          <input type="color" ref={inputElement} className="input_color" />
        </>
      ) : (
        <></>
      )}
      <img className="uploaded_img" src={upload_img} alt="uploaded" />
    </div>
  );
};

export default Nobg;
