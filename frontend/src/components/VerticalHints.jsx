import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const VerticalHints = ({ hints }) => {
  const { darkMode, pathToNumber } = useAppContext();

  const [size, setSize] = useState();

  useEffect(() => {
    pathToNumber(setSize);
  }, []);

  return (
    <Wrapper darkMode={darkMode} size={size}>
      {hints?.map((hint, i) => {
        if (hint.length === 0) {
          return (
            <span key={i} className="zero-span">
              0
            </span>
          );
        }
        return (
          <div key={i} className="hints">
            {hint.map((h, j) => {
              return <span key={j}>{h}</span>;
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-left: 0.4rem;
  padding-right: 0.5rem;
  .zero-span {
    font-size: ${(props) =>
      props.size === 10 ? "1.2rem" : props.size === 15 ? "1rem" : ".8rem"};
    color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    text-align: right;
  }

  .hints {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    height: ${(props) =>
      props.size === 10 ? "2rem" : props.size === 15 ? "1.5rem" : "1rem"};
    span {
      font-size: ${(props) =>
        props.size === 10 ? "1.2rem" : props.size === 15 ? "1rem" : ".8rem"};
      color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    }
  }
`;

export default VerticalHints;
