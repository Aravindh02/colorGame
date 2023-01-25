import React, { useState } from "react";
import "./Modal.css";

function Modal({ setOpenModal, handleColorSelect }) {
  const [color, setColor] = useState("");

  const handleClick = () => {
    handleColorSelect(color);
    setOpenModal(false);
  };
  return (
    <div className="modalContainer">
      <div className="wrapperModal">
        <div className="header">
          <div className="headerColumn1">
            <h3> Enter a Hex code</h3>
            <input
              onChange={(e) => setColor(e.target.value)}
              className="input"
            ></input>
          </div>
          <div className="headerColumn2">
            <h3> preview</h3>
            <div style={{ backgroundColor: color }} className="colorBox"></div>
          </div>
        </div>
        <div className="footer">
          <button onClick={handleClick} className="setBtn">
            Set color
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
