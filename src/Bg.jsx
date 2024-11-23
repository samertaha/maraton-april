import React, { useState } from "react";
import "./Bg.css";
import close_x from "./assets/close.png";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";

import Downloadimg from "./Downloadimg";
import Nobg from "./Nobg";
import Downloadpopup from "./Download_popup";

export const Bg = () => {
  const [selected_tab, setSelected_tab] = useState(true);

  function choose_tab() {
    setSelected_tab(!selected_tab);
  }

  return (
    <>
      <div className="bg_general">
        <img src={close_x} alt="close" className="close_img" />
        <div className="title">העלאת תמונה כדי להסיר את הרקע</div>

        <button className="upload_btn">העלאת תמונה</button>
        <div className="upload_text">פורמטים נתמכים .png,.jpg,.jpeg</div>

        <div className="middle_div">
          <div className="right_div">
            <div className="right_div_inner">
              <Downloadimg
                title="תמונה חינם"
                subtitle="תצוגה מקדימה של תמונה"
                top="false"
                btn_text="הורד"
                last_title="איכות טובה עד 0.25 מגה פיקסל"
              ></Downloadimg>

              <Downloadimg
                title="Pro"
                subtitle="תמונה מלאה"
                top="true"
                btn_text="הורד HD"
                last_title="האיכות הטובה ביותר עד 25 מגה פיקסל"
              ></Downloadimg>
            </div>
          </div>
          <div className="left_div">
            <div className="tabs_cont">
              <div
                className={"tab " + (selected_tab ? "selected_tab" : "")}
                onClick={choose_tab}
              >
                הוסר רקע
              </div>
              <div
                className={"tab " + (!selected_tab ? "selected_tab" : "")}
                onClick={choose_tab}
              >
                מקורי
              </div>
            </div>

            <div className="left_div_inner">
              {selected_tab ? (
                <Nobg title="Nobg"></Nobg>
              ) : (
                <Nobg title="original"></Nobg>
              )}
            </div>

            <div className="left_div_footer">
              <button className="takanon_btn">תקנון החברה</button>
              <div className="takanon_text">
                על ידי העלאת תמונה אתה מסכים לתנאים וההגבלות שלנו. אתר זה מוגן
                וחלים מדיניות ופרטיון.
              </div>
            </div>
          </div>
        </div>
        <div className="footer_cont">
          <img src={logo} className="footer_logo" alt="" />
          <img src={banner} className="footer_banner" alt="" />
        </div>
      </div>
      <Downloadpopup></Downloadpopup>
    </>
  );
};

export default Bg;
