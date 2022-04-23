import styled from "styled-components";
import {
  BottonBar,
  Button,
  GridBoard,
  HorizontalHints,
  VerticalHints,
} from "../components";
import { BsArrowLeft } from "react-icons/bs";
import Modal from "../components/Modal";

const LevelPage = () => {
  return (
    <Wrapper className="wrapper">
      <div className="heading">Level 1</div>
      <div className="board">
        <div className="hor-hints">
          <HorizontalHints />
        </div>
        <div className="game">
          <div className="ver-hints">
            <VerticalHints />
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
    .hor-hints {
      background-color: black;
      color: white;
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
