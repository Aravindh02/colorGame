import { useState } from "react";
import "./index.css";
import Modal from "./Modal";
import Button from "./Button";
import { keyframes } from "styled-components";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [colorCode, setColorCode] = useState("");
  const [id, setId] = useState("");

  const [firstBlock, setFirstBlock] = useState({
    id: "firstBlock",
    color: "",
  });
  const [secondBlock, setSecondBlock] = useState({
    id: "secondBlock",
    color: "",
  });
  const [thirdBlock, setThirdBlock] = useState({
    id: "thirdBlock",
    color: "",
  });
  const [fourthBlock, setFourthBlock] = useState({
    id: "fourthBlock",
    color: "",
  });

  function listener(e) {
    setOpenModal(true);
    setId(e.target.id);
  }
  const handleColorSelect = (color)=>{
    if ( firstBlock.id === id) {
      setFirstBlock((prev) => ({ ...prev, color: colorCode}));
    } else if ( secondBlock.id === id) {
      setSecondBlock((prev) => ({ ...prev, color: colorCode}));
    } else if (thirdBlock.id === id) {
      setThirdBlock((prev) => ({ ...prev, color: colorCode}));
    } else if ( fourthBlock.id === id) {
      setFourthBlock((prev) => ({ ...prev, color: colorCode}));
    }
  }
  return (
    <div className="App">
      {openModal && (
        <Modal
          setOpenModal={setOpenModal}
          handleColorSelect={handleColorSelect}
        />
      )}
      <div className="wrapper">
        <div className="Box1">
          <div
            style={{ backgroundColor: firstBlock.color }}
            id="firstBlock"
            className="block"
            onClick={(id) => listener(id)}
          ></div>
          <div
            style={{ backgroundColor: secondBlock.color }}
            id="secondBlock"
            className="block"
            onClick={(id) => listener(id)}
          ></div>
        </div>

        <div className="circleDiv">
          <div style={{animation:}} className="circle"></div>
        </div>
        {circleBtn && <Button circleFunction={circleFunction} />}
        <div className="Box2">
          <div
            style={{ backgroundColor: thirdBlock.color }}
            id="thirdBlock"
            className="block"
            onClick={(id) => listener(id)}
          ></div>
          <div
            style={{ backgroundColor: fourthBlock.color }}
            id="fourthBlock"
            className="block"
            onClick={(id) => listener(id)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default App;
