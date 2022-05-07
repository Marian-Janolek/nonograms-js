import React from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const Heading = ({ heading }) => {
  const { darkMode } = useAppContext();
  return <Wrapper darkMode={darkMode}>{heading}</Wrapper>;
};

const Wrapper = styled.div`
  font-size: 3rem;
  font-weight: var(--font-bold);
  background: ${(props) => (props.darkMode ? `var(--dark-text)` : ` #b1b1b1`)};
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  text-transform: capitalize;
  text-shadow: ${(props) =>
    props.darkMode
      ? `var(--dark-text)`
      : `rgba(255, 255, 255, 0.5) 1px 2px 1px`};
`;

export default Heading;
