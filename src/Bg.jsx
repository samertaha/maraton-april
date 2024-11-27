import React, { useRef, useState } from "react";
import "./Bg.css";
import close_x from "./assets/close.png";
import logo from "./assets/logo.png";
import banner from "./assets/banner.png";
import axios from "axios";

import Downloadimg from "./Downloadimg";
import Nobg from "./Nobg";
import Downloadpopup from "./Download_popup";
import Eula from "./Eula";

export const Bg = () => {
  const [selected_tab, setSelected_tab] = useState(true);
  const [show_download_popup, setshow_download_popup] = useState(false);
  const [show_eula_popup, setshow_eula_popup] = useState(false);

  function choose_tab() {
    setSelected_tab(!selected_tab);
  }

  function show_download_popup_func() {
    setshow_download_popup(true);
  }

  function close_popup_func() {
    setshow_download_popup(false);
  }

  function show_eula() {
    setshow_eula_popup(true);
  }

  function close_eula_func() {
    setshow_eula_popup(false);
  }

  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.click();
  };

  function uploaded_file(e) {
    let url = "http://localhost:5000/upload_file";

    let formData = new FormData();

    formData.append("name", "ABC");
    formData.append("age", "20");

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };

    axios
      .post(url, formData, config)
      .then((response) => {
        console.log(response.data);
      })
      .cach((error) => {
        console.log(error);
      });
  }

  return (
    <>
      <div className="bg_general">
        <img src={close_x} alt="close" className="close_img" />
        <div className="title">העלאת תמונה כדי להסיר את הרקע</div>
        <input
          type="file"
          ref={inputElement}
          className="input_file"
          onChange={uploaded_file}
        />
        <button className="upload_btn" onClick={focusInput}>
          העלאת תמונה
        </button>

        <div className="upload_text">פורמטים נתמכים .png,.jpg,.jpeg</div>

        <div className="middle_div">
          <div className="right_div">
            <div className="right_div_inner">
              <Downloadimg
                show_download_popup_func={show_download_popup_func}
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
              <button className="takanon_btn" onClick={show_eula}>
                תקנון החברה
              </button>
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

      {show_download_popup ? (
        <>
          <div className="layout"> </div>
          <Downloadpopup close_popup_func={close_popup_func}> </Downloadpopup>
        </>
      ) : (
        <></>
      )}

      {show_eula_popup ? (
        <>
          <div className="layout"> </div>
          <Eula close_eula_func={close_eula_func}> </Eula>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default Bg;
