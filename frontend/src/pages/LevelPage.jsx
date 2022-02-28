import styled from 'styled-components';
import {
  BottonBar,
  Button,
  Cell,
  GridBoard,
  HorizontalHints,
  Preview,
  VerticalHints,
} from '../components';
import { BsArrowLeft } from 'react-icons/bs';

const LevelPage = () => {
  return (
    <Wrapper className="wrapper">
      <div className="heading">Level 1</div>
      <div className="board">
        <div className="preview">
          <Preview />
        </div>
        <div className="hor-hints">
          <HorizontalHints />
        </div>
        <div className="ver-hints">
          <VerticalHints />
        </div>
        <div className="game">
          <GridBoard />
        </div>
      </div>
      <div className="flex">
        <Button text="solve" path="/" />
        <Button text="back" path="/selectGame/easy" icon={<BsArrowLeft />} />
      </div>
      <div>
        <BottonBar />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;

  .board {
    display: grid;
    border-left: 2px solid black;
    border-top: 2px solid black;

    .preview {
      grid-column: 1 / span 3;
      grid-row: 1 / span 3;
    }
    .hor-hints {
      background-color: #000;
      grid-column: 3 / span 5;
      grid-row: 1 / span 3;
    }
    .game {
      grid-column: 3 / span 5;
      grid-row: 3 / span 5;
    }
    .ver-hints {
      background-color: #000;
      grid-column: 1 / span 3;
      grid-row: 3 / span 5;
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
