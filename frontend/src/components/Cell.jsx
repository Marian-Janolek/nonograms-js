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
    props.size === 10 ? "2rem" : props.size === 15 ? "1.5rem" : "1rem"};
  height: ${(props) =>
    props.size === 10 ? "2rem" : props.size === 15 ? "1.5rem" : "1rem"};
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
