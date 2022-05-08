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
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppContext } from "../context/appContext";
import { level_url } from "../utils/constants";
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

const LevelPage = () => {
  const { levelId } = useParams();
  const {
    fetchSingleLevel,
    single_level_loading,
    single_level,
    saveProgress,
    userArray,
    languageSK,
    darkMode,
    path,
  } = useAppContext();
  const levelRef = useRef();
  const { setIconState } = useAppContext();

  const handleClick = (icon) => {
    if (!icon.state) return;
    setIconState(icon.state);
  };

  useEffect(() => {
    fetchSingleLevel(`${level_url}/${levelId}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelId]);

  if (single_level_loading) {
    return <Loading />;
  }

  const handleSave = () => {
    saveProgress();
    const progress = {
      id: single_level._id,
      userArray,
    };
    localStorage.setItem("save-progress", JSON.stringify(progress));
  };

  return (
    <Wrapper className="wrapper" darkMode={darkMode}>
      <Heading heading={`Level ${single_level.order}`} />
      <div className="board" ref={levelRef}>
        <div className="hor-flex">
          <Preview />
          <div className="hor-hints">
            <HorizontalHints hints={single_level.horHints} />
          </div>
        </div>
        <div className="game">
          <div className="ver-hints">
            <VerticalHints hints={single_level.verHints} />
          </div>
          <div className="grid">
            <GridBoard
              result={single_level.result}
              currentID={single_level._id}
            />
          </div>
        </div>
      </div>
      <div className="flex">
        <button className="save" onClick={handleSave}>
          <span> {languageSK ? "uložiť" : "save"} </span>
        </button>
        <Button
          text={`${languageSK ? "späť" : "back"}`}
          path={`/selectGame/${path}`}
        />
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
              filename={`nonogram-${single_level.order}.pdf`}
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
    -webkit-box-shadow: ${(props) =>
      props.darkMode ? `none` : `var(--neu-shadow)`};
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
      -webkit-box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
      box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
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
  @media (min-width: 1024px) {
    .btn-bar {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      justify-content: center;
      .container {
        width: 60%;
      }
    }
  }
  @media (min-width: 676px) {
    .btn-bar {
      bottom: 3%;
    }
    .flex {
      margin-top: 1.5rem;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -ms-flex-direction: row;
      flex-direction: row;
    }
  }
  @media (max-height: 680px) {
    .save {
      height: 3rem;
      width: 13rem;
      border-radius: 15px;
    }
    .flex {
      margin-top: 0.5rem;
      gap: 1rem;
    }
    .btn-bar {
      bottom: 2%;
      button {
        width: 3rem;
        height: 3rem;
      }
      .icon {
        font-size: 2rem;
      }
    }
  }
`;

export default LevelPage;
