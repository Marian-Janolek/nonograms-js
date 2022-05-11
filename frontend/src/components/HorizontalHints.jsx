import { useEffect, useState } from "react";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const HorizontalHints = ({ hints }) => {
  const { darkMode, pathToNumber, path } = useAppContext();
  const [size, setSize] = useState();

  useEffect(() => {
    pathToNumber(setSize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path]);

  return (
    <Wrapper darkMode={darkMode} size={size}>
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
    font-size: ${(props) =>
      props.size === 10 ? "1.2rem" : props.size === 15 ? ".95rem" : ".8rem"};
    color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    width: ${(props) =>
      props.size === 10 ? "2rem" : props.size === 15 ? "1.5rem" : "1rem"};
    text-align: center;
  }

  .hints {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: ${(props) =>
      props.size === 10 ? "2rem" : props.size === 15 ? "1.35rem" : "1rem"};
    span {
      font-size: ${(props) =>
        props.size === 10 ? "1.2rem" : props.size === 15 ? ".95rem" : ".8rem"};
      color: ${(props) => (props.darkMode ? `var(--dark-text)` : `white`)};
    }
  }
  @media (min-width: 676px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10
          ? "1.7rem"
          : props.size === 15
          ? "1.45rem"
          : "1.3rem"};
      width: ${(props) =>
        props.size === 10
          ? "2.5rem"
          : props.size === 15
          ? "1.85rem"
          : "1.45rem"};
    }
    .hints {
      width: ${(props) =>
        props.size === 10
          ? "2.5rem"
          : props.size === 15
          ? "1.85rem"
          : "1.45rem"};
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
  /* @media (min-width: 530px) {
    .zero-span {
      font-size: ${(props) =>
    props.size === 10 ? "1.5rem" : props.size === 15 ? "1.25rem" : "1.05rem"};
      width: ${(props) =>
    props.size === 10 ? "2.3rem" : props.size === 15 ? "1.55rem" : "1.15rem"};
    }
    .hints {
      width: ${(props) =>
    props.size === 10 ? "2.3rem" : props.size === 15 ? "1.55rem" : "1.15rem"};
      span {
        font-size: ${(props) =>
    props.size === 10 ? "1.5rem" : props.size === 15 ? "1.25rem" : "1.05rem"};
      }
    }
  } */
  @media (max-width: 395px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10 ? "1.15rem" : props.size === 15 ? ".9rem" : ".75rem"};
      width: ${(props) =>
        props.size === 10 ? "1.9rem" : props.size === 15 ? "1.3rem" : ".95rem"};
    }
    .hints {
      width: ${(props) =>
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
      width: ${(props) =>
        props.size === 10 ? "1.9rem" : props.size === 15 ? "1.25rem" : ".9rem"};
      text-align: center;
    }
    .hints {
      width: ${(props) =>
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
      width: ${(props) =>
        props.size === 10
          ? "1.75rem"
          : props.size === 15
          ? "1.2rem"
          : ".85rem"};
      text-align: center;
    }
    .hints {
      width: ${(props) =>
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
      width: ${(props) =>
        props.size === 10
          ? "1.55rem"
          : props.size === 15
          ? "1.15rem"
          : ".8rem"};
      text-align: center;
    }
    .hints {
      width: ${(props) =>
        props.size === 10
          ? "1.55rem"
          : props.size === 15
          ? "1.15rem"
          : ".8rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? "1.0rem"
            : props.size === 15
            ? ".75rem"
            : ".6rem"};
      }
    }
  }
  @media (max-width: 320px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10 ? ".95rem" : props.size === 15 ? ".7rem" : ".55rem"};
      width: ${(props) =>
        props.size === 10
          ? "1.45rem"
          : props.size === 15
          ? "1.05rem"
          : ".75rem"};
      text-align: center;
    }
    .hints {
      width: ${(props) =>
        props.size === 10
          ? "1.45rem"
          : props.size === 15
          ? "1.05rem"
          : ".75rem"};
      span {
        font-size: ${(props) =>
          props.size === 10
            ? ".95rem"
            : props.size === 15
            ? ".7rem"
            : ".55rem"};
      }
    }
  }
  @media (max-width: 300px) {
    .zero-span {
      font-size: ${(props) =>
        props.size === 10 ? ".9rem" : props.size === 15 ? ".65rem" : ".5rem"};
      width: ${(props) =>
        props.size === 10 ? "1.4rem" : props.size === 15 ? "1rem" : ".7rem"};
      text-align: center;
    }
    .hints {
      width: ${(props) =>
        props.size === 10 ? "1.4rem" : props.size === 15 ? "1rem" : ".7rem"};
      span {
        font-size: ${(props) =>
          props.size === 10 ? ".9rem" : props.size === 15 ? ".65rem" : ".5rem"};
      }
    }
  }
`;

export default HorizontalHints;
