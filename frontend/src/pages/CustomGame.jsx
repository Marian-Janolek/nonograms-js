import { lazy, Suspense } from "react";
import styled from "styled-components";
import {
  Button,
  GridBoard,
  Heading,
  HorizontalHints,
  Loading,
  Preview,
  VerticalHints,
} from "../components";
import Modal from "../components/Modal";
import { useRef } from "react";
import { useAppContext } from "../context/appContext";
import Pdf from "react-to-pdf";

const FaPencilAlt = lazy(() => import("../utils/icons/pencil"));
const FaTimes = lazy(() => import("../utils/icons/times"));
const FaRegLightbulb = lazy(() => import("../utils/icons/hint"));
const GrDocumentPdf = lazy(() => import("../utils/icons/pdf"));

const bottonBarIcons = [
  { id: 1, icon: <FaPencilAlt />, state: 2, title: "pencil" },
  { id: 2, icon: <FaTimes />, state: 1, title: "times" },
  { id: 3, icon: <FaRegLightbulb />, title: "hint" },
];

const CustomGame = () => {
  const {
    languageSK,
    darkMode,
    my_level,
    single_level_loading: loading,
  } = useAppContext();
  const levelRef = useRef();
  const { setIconState } = useAppContext();

  const handleClick = (icon) => {
    if (!icon.state) return;
    setIconState(icon.state);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <Wrapper className="wrapper" darkMode={darkMode}>
      <Heading heading={`${languageSK ? "Vlastna" : "Custom"}`} />
      <div className="board" ref={levelRef}>
        <div className="hor-flex">
          <Preview />
          <div className="hor-hints">
            <HorizontalHints hints={my_level.horHints} />
          </div>
        </div>
        <div className="game">
          <div className="ver-hints">
            <VerticalHints hints={my_level.vertHints} />
          </div>
          <div className="grid">
            <GridBoard result={my_level.result} />
          </div>
        </div>
      </div>
      <div className="flex">
        <Button text={`${languageSK ? "späť" : "back"}`} path="/" />
      </div>
      <Suspense fallback={<Loading />}>
        <div className="btn-bar">
          <div className="container">
            {bottonBarIcons?.map((icon) => (
              <button
                type="button"
                title={icon.title}
                className="icon"
                key={icon.id}
                onClick={() => handleClick(icon)}
              >
                {icon.icon}
              </button>
            ))}
            <Pdf
              targetRef={levelRef}
              filename={`nonogram-my_level.pdf`}
              x={50}
              y={50}
              scale={1.1}
            >
              {({ toPdf }) => (
                <button
                  type="button"
                  className="icon"
                  title="pdf"
                  onClick={toPdf}
                >
                  <GrDocumentPdf className="pdf" />
                </button>
              )}
            </Pdf>
          </div>
        </div>
      </Suspense>
      <Modal />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  .save {
    text-transform: uppercase;
    width: 15rem;
    height: 4rem;
    box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
    border-radius: 20px;
    background-color: ${(props) =>
      props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};
    color: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};
    span {
      font-size: var(--bigger-font-size);
      letter-spacing: var(--spacing);
      font-weight: var(--font-bold);
      opacity: 0.75;
    }
    &:active {
      box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
      -webkit-box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
      -webkit-transform: scale(0.98);
      -ms-transform: scale(0.98);
      transform: scale(0.98);
    }
    @media (min-width: 450px) {
      width: 20rem;
      height: 5rem;
    }
  }

  .board {
    .hor-flex {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      .hor-hints {
        background-color: black;
        color: white;
      }
    }
    .game {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;

      .ver-hints {
        background-color: black;
        color: white;
      }
    }
  }
  .flex {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2rem;
  }
  .btn-bar {
    position: fixed;
    bottom: 5%;
    left: 0;
    width: 100%;
    .container {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      -webkit-box-pack: space-evenly;
      -ms-flex-pack: space-evenly;
      justify-content: space-evenly;
      gap: 0.75rem;
    }

    button {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
      -webkit-box-shadow: ${(props) =>
        props.darkMode ? `none` : `var(--neu-shadow)`};
      background-color: ${(props) =>
        props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};
      color: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};

      &:active {
        box-shadow: ${(props) =>
          props.darkMode
            ? `inset 3px 3px 5px var(--dark-text), inset -3px -3px 5px var(--dark-text)`
            : `inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff`};
        -webkit-box-shadow: ${(props) =>
          props.darkMode
            ? `inset 3px 3px 5px var(--dark-text), inset -3px -3px 5px var(--dark-text)`
            : `inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff`};
      }
    }
    .icon {
      font-size: 2.5rem;
      svg path {
        stroke: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};
      }
    }
  }
`;

export default CustomGame;
