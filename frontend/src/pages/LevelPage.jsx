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
import { BsArrowLeft } from "react-icons/bs";
import Modal from "../components/Modal";
import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";
import { useAppContext } from "../context/appContext";
import { bottonBarIcons, level_url } from "../utils/constants";
import Pdf from "react-to-pdf";
import { GrDocumentPdf } from "react-icons/gr";

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
  } = useAppContext();
  const levelRef = useRef();
  const { setIconState } = useAppContext();

  const handleClick = (icon) => {
    if (!icon.state) return;
    setIconState(icon.state);
  };

  useEffect(() => {
    fetchSingleLevel(`${level_url}/${levelId}`);
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
    console.log({ progress });
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
          path="/selectGame/easy"
          icon={<BsArrowLeft />}
        />
      </div>
      <div className="btn-bar">
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
          <Pdf
            targetRef={levelRef}
            filename={`nonogram-${single_level.order}.pdf`}
            x={50}
            y={50}
            scale={1.1}
          >
            {({ toPdf }) => (
              <button type="button" className="icon" onClick={toPdf}>
                <GrDocumentPdf className="pdf" />
              </button>
            )}
          </Pdf>
        </div>
      </div>
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
    box-shadow: ${(props) =>
      props.darkMode ? `none` : `5px 5px 10px #b1b1b1, -5px -5px 10px #fff`};
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
      transform: scale(0.98);
    }
    @media (min-width: 450px) {
      width: 20rem;
      height: 5rem;
    }
  }

  .board {
    .hor-flex {
      display: flex;
      .hor-hints {
        background-color: black;
        color: white;
      }
    }
    .game {
      display: flex;

      .ver-hints {
        background-color: black;
        color: white;
      }
    }
  }
  .flex {
    display: flex;
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
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      gap: 0.75rem;
    }

    button {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
      box-shadow: ${(props) =>
        props.darkMode ? `none` : `5px 5px 10px #b1b1b1, -5px -5px 10px #fff`};
      background-color: ${(props) =>
        props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};
      color: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};

      &:active {
        box-shadow: ${(props) =>
          props.darkMode
            ? `inset 5px 5px 10px var(--dark-text), inset -5px -5px 10px var(--dark-text)`
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

export default LevelPage;
