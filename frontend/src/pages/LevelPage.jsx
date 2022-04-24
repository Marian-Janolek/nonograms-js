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
import { useEffect, useState } from "react";
import { useAppContext } from "../context/appContext";
import { level_url } from "../utils/constants";

const LevelPage = () => {
  const { levelId } = useParams();
  const { fetchSingleLevel, single_level_loading, single_level } =
    useAppContext();
  // const [verticalHints, setVerticalHints] = useState();
  // const [horizontalHints, setHorizontalHints] = useState();

  useEffect(() => {
    fetchSingleLevel(`${level_url}/${levelId}`);
    // if (typeof verHints !== "undefined" && typeof horHints !== "undefined") {
    //   setVerticalHints(JSON.parse(single_level.verHints));
    //   setHorizontalHints(JSON.parse(single_level.horHints));
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [levelId]);

  if (single_level_loading) {
    return <Loading />;
  }

  return (
    <Wrapper className="wrapper">
      <div className="heading">Level </div>
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
            <GridBoard />
          </div>
        </div>
      </div>
      <div className="flex">
        <Button text="solve" path="/" />
        <Button text="back" path="/selectGame/easy" icon={<BsArrowLeft />} />
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
