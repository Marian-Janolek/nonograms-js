import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import { bottonBarIcons } from "../utils/constants";

const BottonBar = () => {
  const { setIconState } = useAppContext();

  const handleClick = (icon) => {
    if (!icon.state) return;
    setIconState(icon.state);
  };

  return (
    <Wrapper>
      <div className="container">
        {bottonBarIcons.map((icon) => (
          <button
            type="button"
            className="icon"
            key={icon.id}
            onClick={() => handleClick(icon)}
          >
            {icon.icon}
          </button>
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 5%;
  left: 0;
  width: 100%;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 0.75rem;
  }

  button {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;

    &:active {
      box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
    }
  }

  .icon {
    font-size: 2.5rem;
  }
`;

export default BottonBar;
