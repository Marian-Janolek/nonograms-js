import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Cell } from ".";
import { useAppContext } from "../context/appContext";

const GridBoard = ({ result, currentID }) => {
  const [gameArray, setGameArray] = useState(Array(100).fill(2));
  const { iconState, openModal, setUserArray, darkMode } = useAppContext();

  useEffect(() => {
    const savedObject = JSON.parse(localStorage.getItem("save-progress"));
    if (savedObject === null) return;
    if (savedObject?.id === currentID) {
      let convertedArray = Object.keys(savedObject?.userArray).map(
        (key) => savedObject.userArray[key]
      );
      setGameArray(convertedArray);
    }
  }, []);

  const win = (candidateArray, winArray) => {
    return (
      Array.isArray(candidateArray) &&
      Array.isArray(winArray) &&
      candidateArray.length === winArray.length &&
      candidateArray.every((val, index) => val === winArray[index])
    );
  };

  let helper = [];
  const length = gameArray.length;
  for (let i = 0; i < length; i++) {
    if (gameArray[i] === 2) {
      helper[i] = 1;
    } else {
      helper[i] = gameArray[i];
    }
  }

  if (win(helper, result) === true) {
    openModal();
  }

  const handleClick = (i) => {
    const cells = [...gameArray];
    if (iconState === 2 || iconState === 0) {
      cells[i] = 0;
      setGameArray(cells);
    }
    if (iconState === 1) {
      cells[i] = 1;
      setGameArray(cells);
    }
    setUserArray({ ...gameArray });
  };

  return (
    <Wrapper darkMode={darkMode}>
      {gameArray.map((_, i) => (
        <Cell
          key={i}
          clicked={gameArray[i]}
          handleClick={() => handleClick(i)}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  background-color: ${(props) =>
    props.darkMode ? `var(--dark-text)` : `white`};
`;

export default GridBoard;
