import styled from "styled-components";
import {
  BottonBar,
  Button,
  GridBoard,
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
import { level_url } from "../utils/constants";

const LevelPage = () => {
  const { levelId } = useParams();
  const {
    fetchSingleLevel,
    single_level_loading,
    single_level,
    saveProgress,
    userArray,
    languageSK,
  } = useAppContext();
  const levelRef = useRef();

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
  };

  return (
    <Wrapper className="wrapper" ref={levelRef}>
      <div className="heading">Level {single_level.order} </div>
      <div className="board">
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
      <div>
        <BottonBar />
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
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
    border-radius: 20px;
    background-color: var(--main-color);
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
`;

export default LevelPage;
