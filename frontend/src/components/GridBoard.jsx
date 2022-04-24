import React, { useState } from "react";
import styled from "styled-components";
import { Cell } from ".";
import { useAppContext } from "../context/appContext";
import { resultArray } from "../utils/constants";

const GridBoard = () => {
  const [gameArray, setGameArray] = useState(Array(100).fill("0"));
  const { openModal } = useAppContext();

  const win = async (candidateArray, winArray) => {
    return (
      (await Array.isArray(candidateArray)) &&
      Array.isArray(winArray) &&
      candidateArray.length === winArray.length &&
      candidateArray.every((val, index) => val === winArray[index])
    );

    // if (candidateArray.length !== winArray.length) return false;
    // else {
    //   for (const i = 0; i < candidateArray.length; i++)
    //     if (candidateArray[i] !== winArray[i]) return false;
    //   return true;
    // }
  };

  const handleClick = (i) => {
    const cells = [...gameArray];
    // if (cells[i] === '1') {
    //    (cells[i] = '0');
    // }

    cells[i] = "1";
    setGameArray(cells);
    win(gameArray, resultArray);
    // win && openModal();
  };

  return (
    <Wrapper>
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
`;

export default GridBoard;
