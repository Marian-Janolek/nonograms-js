import { Button, LevelCard, Navbar } from "../components";
import styled from "styled-components";

const DifficultyMenu = ({ heading, levels, difficulty }) => {
  return (
    <Wrapper className="wrapper">
      <Navbar />
      <div className="heading">{heading}</div>
      <div className="cards">
        {levels?.map((level, i) => {
          if (level.difficulty === difficulty) {
            return <LevelCard key={i} level={i + 1} levelId={level._id} />;
          }
          return null;
        })}
      </div>
      <div className="back-btn">
        <Button text="back" path="/selectGame" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .cards {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
    gap: 1rem;
    margin-top: 1.5rem;
    margin-left: 0.8rem;
  }
  .back-btn {
    margin-top: 2rem;
  }
`;

export default DifficultyMenu;
