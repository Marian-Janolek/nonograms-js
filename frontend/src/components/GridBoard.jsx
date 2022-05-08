import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { Cell } from ".";
import { useAppContext } from "../context/appContext";

const GridBoard = ({ result, currentID }) => {
  const {
    iconState,
    openModal,
    setUserArray,
    darkMode,
    setPath,
    pathToNumber,
    path,
  } = useAppContext();
  const [size, setSize] = useState();
  const [gameArray, setGameArray] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    const savedObject = JSON.parse(localStorage.getItem("save-progress"));
    if (savedObject === null) return;
    if (savedObject?.id === currentID) {
      let convertedArray = Object.keys(savedObject?.userArray).map(
        (key) => savedObject.userArray[key]
      );
      setGameArray(convertedArray);
    }
    setPath(pathname.split("/")[2]);
    pathToNumber(setSize);
    if (size === 10) {
      setGameArray(Array(100).fill(2));
    } else if (size === 15) {
      setGameArray(Array(225).fill(2));
    } else if (size === 20) {
      setGameArray(Array(400).fill(2));
    }
  }, [size, path]);

  const win = (candidateArray, winArray) => {
    return (
      Array.isArray(candidateArray) &&
      Array.isArray(winArray) &&
      candidateArray?.length === winArray.length &&
      candidateArray.every((val, index) => val === winArray[index])
    );
  };

  let helper = [];
  const length = gameArray?.length;
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
    <Wrapper darkMode={darkMode} size={size}>
      {gameArray?.map((_, i) => (
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
  grid-template-columns: ${(props) =>
    props.size === 10
      ? `repeat(${props.size}, 1fr)`
      : props.size === 15
      ? `repeat(${props.size}, 1fr)`
      : `repeat(${props.size}, 1fr)`};
  background-color: ${(props) =>
    props.darkMode ? `var(--dark-text)` : `white`};
`;

export default GridBoard;
