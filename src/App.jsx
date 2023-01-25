import { useState, useEffect } from "react";
import "./index.css";
import Modal from "./Modal";
import Button from "./Button";
import styled, { keyframes } from "styled-components";

const Circle = styled.div`
  height: 300px;
  width: 300px;
  background-color: #fff;
  border-radius: 50%;
  animation: ${(props) => props.startAnimation && props.colorTransition} 4s
    infinite;
`;

function App() {
  const [openModal, setOpenModal] = useState(false);
  const [showCircleBtn, setShowCircleBtn] = useState(false);
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
  const [startAnimation, setStartAnimation] = useState(false);

  const colorTransition = keyframes`
0%{
  background-color:${firstBlock.color};
  transform:scale(0.75);
}
25%{
  background-color:${secondBlock.color};
  transform:scale(1.1);
}
50%{
  background-color:${thirdBlock.color};
  transform:scale(1);
}
100%{
  background-color:${fourthBlock.color};
  transform:scale(0.75);
},
`;

  useEffect(() => {
    if (
      !!firstBlock.color &&
      !!secondBlock.color &&
      !!thirdBlock.color &&
      !!fourthBlock.color
    ) {
      setShowCircleBtn(true);
    }
  }, [firstBlock, secondBlock, thirdBlock, fourthBlock]);

  function listener(e) {
    setOpenModal(true);
    setId(e.target.id);
  }
  const handleColorSelect = (colorCode) => {
    if (firstBlock.id === id) {
      setFirstBlock((prev) => ({ ...prev, color: colorCode }));
    } else if (secondBlock.id === id) {
      setSecondBlock((prev) => ({ ...prev, color: colorCode }));
    } else if (thirdBlock.id === id) {
      setThirdBlock((prev) => ({ ...prev, color: colorCode }));
    } else if (fourthBlock.id === id) {
      setFourthBlock((prev) => ({ ...prev, color: colorCode }));
    }
  };
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
          <Circle
            colorTransition={colorTransition}
            startAnimation={startAnimation}
          />
        </div>
        {showCircleBtn && (
          <Button circleFunction={() => setStartAnimation(true)} />
        )}
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
