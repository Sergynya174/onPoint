import React from "react";

import sperm1 from "../images/pink_sperm.png";
import sperm2 from "../images/pink_sperm_1.png";
import bacteria1 from "../images/bacteria1.png";
import bacteria2 from "../images/bacteria2.png";
import bacteria3 from "../images/bacteria3.png";
import bacteria4 from "../images/bacteria4.png";
import bacteria5 from "../images/bacteria6.png";
import bacteria6 from "../images/bacteria5.png";
import bacteria7 from "../images/bacteria7.png";

function First({ setSlide }) {
  return (
    <div className="slide">
      <div className="content__box-first">
        <h3 className="content__title">привет,</h3>
        <h1 className="content__subtitle">
          это <strong>не</strong> коммерческое задание
        </h1>
      </div>
      <button className="content__farther" onClick={setSlide(1)}></button>

      <img src={sperm1} className="sperm-1" />
      <img src={sperm2} className="sperm-2" />
      <img src={bacteria1} className="bacteria1" alt="bacteria" />
      <img src={bacteria2} className="bacteria2" alt="bacteria" />
      <img src={bacteria3} className="bacteria3" alt="bacteria" />
      <img src={bacteria4} className="bacteria4" alt="bacteria" />
      <img src={bacteria5} className="bacteria5" alt="bacteria" />
      <img src={bacteria6} className="bacteria6" alt="bacteria" />
      <img src={bacteria7} className="bacteria7" alt="bacteria" />
    </div>
  );
}

export default First;
