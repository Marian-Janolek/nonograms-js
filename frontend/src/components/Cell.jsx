import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/appContext";

const Cell = ({ clicked, handleClick }) => {
  const { darkMode } = useAppContext();
  return (
    <Wrapper darkMode={darkMode}>
      <div
        className={`${clicked === 0 ? "black-bg" : "white-bg"}`}
        onClick={handleClick}
      >
        {clicked === 1 && (
          <span>
            <FaTimes />
          </span>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 2rem;
  height: 2rem;
  border: 1px solid black;
  .black-bg {
    height: 95%;
    width: 95%;
    background-color: black;
  }
  .white-bg {
    height: 95%;
    width: 95%;
  }
  span svg {
    font-size: 2rem;
    color: black;
  }
`;

export default Cell;
