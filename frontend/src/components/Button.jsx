import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Button = ({ text, path, icon, handleClick }) => {
  const { darkMode } = useAppContext();
  return (
    <Link to={path}>
      <Wrapper onClick={handleClick} darkMode={darkMode}>
        <span className="icon">{icon}</span>
        <span>{text}</span>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  text-transform: uppercase;
  width: 15rem;
  height: 4rem;
  box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
  background-color: ${(props) =>
    props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  &:active {
    box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
    transform: scale(0.98);
  }

  span {
    font-size: var(--bigger-font-size);
    letter-spacing: var(--spacing);
    font-weight: var(--font-bold);
    opacity: 0.75;
  }
  .icon {
    position: absolute;
    top: 15%;
    left: 10%;
    font-size: 2rem;
    opacity: 0.7;
  }
  @media (min-width: 450px) {
    width: 20rem;
    height: 5rem;
    .icon {
      font-size: 3rem;
    }
  }
`;

export default Button;
