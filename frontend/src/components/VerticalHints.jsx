import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const VerticalHints = ({ hints }) => {
  const { darkMode, pathToNumber, path } = useAppContext();

  const [size, setSize] = useState();

  useEffect(() => {
    pathToNumber(setSize);
  }, [path]);

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
  padding-left: ${(props) =>
    props.size === 10 ? ".4rem" : props.size === 15 ? ".2rem" : ".15rem"};
  padding-right: ${(props) =>
    props.size === 10 ? ".5rem" : props.size === 15 ? ".35rem" : ".2rem"};
  .zero-span {
    font-size: ${(props) =>
      props.size === 10 ? "1.2rem" : props.size === 15 ? ".95rem" : ".8rem"};
    color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    height: ${(props) =>
      props.size === 10 ? "2rem" : props.size === 15 ? "1.35rem" : "1rem"};
    text-align: right;
  }

  .hints {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: ${(props) =>
      props.size === 10 ? ".5rem" : props.size === 15 ? ".25rem" : ".3rem"};
    height: ${(props) =>
      props.size === 10 ? "2rem" : props.size === 15 ? "1.35rem" : "1rem"};
    span {
      font-size: ${(props) =>
        props.size === 10 ? "1.2rem" : props.size === 15 ? ".95rem" : ".8rem"};
      color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    }
  }
  @media (min-width: 676px) {
    padding-left: 1rem;
    padding-right: 0.5rem;
    .zero-span {
      font-size: ${(props) =>
        props.size === 10
          ? "1.7rem"
          : props.size === 15
          ? "1.45rem"
          : "1.3rem"};
      height: ${(props) =>
        props.size === 10
          ? "2.5rem"
          : props.size === 15
          ? "1.85rem"
          : "1.45rem"};
    }
    .hints {
      height: ${(props) =>
        props.size === 10
          ? "2.5rem"
          : props.size === 15
          ? "1.85rem"
          : "1.45rem"};
      gap: ${(props) =>
        props.size === 10 ? ".9rem" : props.size === 15 ? ".7rem" : ".5rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? "1.7rem"
            : props.size === 15
            ? "1.45rem"
            : "1.3rem"};
      }
    }
  }
  @media (min-width: 530px) {
    padding-left: 1rem;
    padding-right: 0.5rem;
    .zero-span {
      font-size: ${(props) =>
        props.size === 10
          ? "1.5rem"
          : props.size === 15
          ? "1.25rem"
          : "1.05rem"};
      height: ${(props) =>
        props.size === 10
          ? "2.3rem"
          : props.size === 15
          ? "1.55rem"
          : "1.15rem"};
    }
    .hints {
      height: ${(props) =>
        props.size === 10
          ? "2.3rem"
          : props.size === 15
          ? "1.55rem"
          : "1.15rem"};
      gap: ${(props) =>
        props.size === 10 ? ".9rem" : props.size === 15 ? ".7rem" : ".5rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? "1.5rem"
            : props.size === 15
            ? "1.25rem"
            : "1.05rem"};
      }
    }
  }
  @media (max-width: 395px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10 ? "1.15rem" : props.size === 15 ? ".9rem" : ".75rem"};
      height: ${(props) =>
        props.size === 10 ? "1.9rem" : props.size === 15 ? "1.3rem" : ".95rem"};
    }
    .hints {
      height: ${(props) =>
        props.size === 10 ? "1.9rem" : props.size === 15 ? "1.3rem" : ".95rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? "1.15rem"
            : props.size === 15
            ? ".9rem"
            : ".75rem"};
      }
    }
  }
  @media (max-width: 375px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10 ? "1.1rem" : props.size === 15 ? ".85rem" : ".7rem"};
      height: ${(props) =>
        props.size === 10 ? "1.9rem" : props.size === 15 ? "1.25rem" : ".9rem"};
    }
    .hints {
      height: ${(props) =>
        props.size === 10 ? "1.9rem" : props.size === 15 ? "1.25rem" : ".9rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? "1.1rem"
            : props.size === 15
            ? ".85rem"
            : ".7rem"};
      }
    }
  }
  @media (max-width: 360px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10 ? "1.05rem" : props.size === 15 ? ".8rem" : ".65rem"};
      height: ${(props) =>
        props.size === 10
          ? "1.75rem"
          : props.size === 15
          ? "1.2rem"
          : ".85rem"};
    }
    .hints {
      height: ${(props) =>
        props.size === 10
          ? "1.75rem"
          : props.size === 15
          ? "1.2rem"
          : ".85rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? "1.05rem"
            : props.size === 15
            ? ".8rem"
            : ".65rem"};
      }
    }
  }
  @media (max-width: 340px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10 ? "1rem" : props.size === 15 ? ".75rem" : ".6rem"};
      height: ${(props) =>
        props.size === 10
          ? "1.55rem"
          : props.size === 15
          ? "1.15rem"
          : ".8rem"};
    }
    .hints {
      height: ${(props) =>
        props.size === 10
          ? "1.55rem"
          : props.size === 15
          ? "1.15rem"
          : ".8rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? "1.05rem"
            : props.size === 15
            ? ".75rem"
            : ".6rem"};
      }
    }
  }
`;

export default VerticalHints;
