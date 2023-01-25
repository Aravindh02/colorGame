import React from "react";
import "./Modal.css";

function Modal({
  setOpenModal,
handleColorSelect
}) {
  
  const setColor = () => {
    setOpenModal(false);

setColorCode("");
setId("");
  };
  return (
    <div className="modalContainer">
      <div className="wrapperModal">
        <div className="header">
          <div className="headerColumn1">
            <h3> Enter a Hex code</h3>
            <input
              onChange={(e) => setColorCode(e.target.value)}
              className="input"
            ></input>
          </div>
          <div className="headerColumn2">
            <h3> preview</h3>
            <div
              style={{ backgroundColor: colorCode }}
              className="colorBox"
            ></div>
          </div>
        </div>
        <div className="footer">
          <button onClick={setColor} className="setBtn">
            {" "}
            Set color
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
