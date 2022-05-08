import { lazy, Suspense, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";

const FaTimes = lazy(() => import("../utils/icons/times"));

const Cell = ({ clicked, handleClick }) => {
  const { darkMode, pathToNumber, setPath } = useAppContext();
  const [size, setSize] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    setPath(pathname.split("/")[2]);
    pathToNumber(setSize);
  }, []);

  return (
    <Wrapper darkMode={darkMode} size={size}>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: ${(props) =>
    props.size === 10 ? "2rem" : props.size === 15 ? "1.35rem" : "1rem"};
  height: ${(props) =>
    props.size === 10 ? "2rem" : props.size === 15 ? "1.35rem" : "1rem"};
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
  span {
    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      font-size: ${(props) =>
        props.size === 10 ? "2rem" : props.size === 15 ? "1.35rem" : "1rem"};

      color: black;
    }
  }
  @media (min-width: 676px) {
    width: ${(props) =>
      props.size === 10 ? "2.5rem" : props.size === 15 ? "1.85rem" : "1.45rem"};
    height: ${(props) =>
      props.size === 10 ? "2.5rem" : props.size === 15 ? "1.85rem" : "1.45rem"};
    span {
      svg {
        font-size: ${(props) =>
          props.size === 10
            ? "2.5rem"
            : props.size === 15
            ? "1.85rem"
            : "1.45rem"};
      }
    }
  }
  @media (min-width: 530px) {
    width: ${(props) =>
      props.size === 10 ? "2.3rem" : props.size === 15 ? "1.55rem" : "1.15rem"};
    height: ${(props) =>
      props.size === 10 ? "2.3rem" : props.size === 15 ? "1.55rem" : "1.15rem"};
    span {
      svg {
        font-size: ${(props) =>
          props.size === 10
            ? "2.3rem"
            : props.size === 15
            ? "1.55rem"
            : "1.15rem"};
      }
    }
  }

  @media (max-width: 395px) {
    width: ${(props) =>
      props.size === 10 ? "1.9rem" : props.size === 15 ? "1.3rem" : ".95rem"};
    height: ${(props) =>
      props.size === 10 ? "1.9rem" : props.size === 15 ? "1.3rem" : ".95rem"};
    span {
      svg {
        font-size: ${(props) =>
          props.size === 10
            ? "1.9rem"
            : props.size === 15
            ? "1.3rem"
            : ".95rem"};
      }
    }
  }
  @media (max-width: 375px) {
    width: ${(props) =>
      props.size === 10 ? "1.9rem" : props.size === 15 ? "1.25rem" : ".9rem"};
    height: ${(props) =>
      props.size === 10 ? "1.9rem" : props.size === 15 ? "1.25rem" : ".9rem"};
    span {
      svg {
        font-size: ${(props) =>
          props.size === 10
            ? "1.9rem"
            : props.size === 15
            ? "1.25rem"
            : ".9rem"};
      }
    }
  }
  @media (max-width: 360px) {
    width: ${(props) =>
      props.size === 10 ? "1.75rem" : props.size === 15 ? "1.2rem" : ".85rem"};
    height: ${(props) =>
      props.size === 10 ? "1.75rem" : props.size === 15 ? "1.2rem" : ".85rem"};
    span {
      svg {
        font-size: ${(props) =>
          props.size === 10
            ? "1.75rem"
            : props.size === 15
            ? "1.2rem"
            : ".85rem"};
      }
    }
  }
  @media (max-width: 340px) {
    width: ${(props) =>
      props.size === 10 ? "1.55rem" : props.size === 15 ? "1.15rem" : ".8rem"};
    height: ${(props) =>
      props.size === 10 ? "1.55rem" : props.size === 15 ? "1.15rem" : ".8rem"};
    span {
      svg {
        font-size: ${(props) =>
          props.size === 10
            ? "1.55rem"
            : props.size === 15
            ? "1.15rem"
            : ".8rem"};
      }
    }
  }
`;

export default Cell;
