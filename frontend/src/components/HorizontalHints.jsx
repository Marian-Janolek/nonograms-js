import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const HorizontalHints = ({ hints }) => {
  const { darkMode } = useAppContext();
  return (
    <Wrapper darkMode={darkMode}>
      {hints?.map((hint, i) => {
        if (hint.length === 0) {
          return (
            <span className="zero-span" key={i}>
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
  align-items: flex-end;
  justify-content: flex-end;
  width: 100%;
  line-height: 1.4;

  .zero-span {
    font-size: 1.2rem;
    color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    width: 2rem;
    text-align: center;
  }

  .hints {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 2rem;
    span {
      font-size: 1.2rem;
      color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    }
  }
`;

export default HorizontalHints;
