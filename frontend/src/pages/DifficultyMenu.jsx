import { lazy, Suspense } from "react";
import { Button, Loading, Navbar } from "../components";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const LevelCard = lazy(() => import("../components/LevelCard"));
const Heading = lazy(() => import("../components/Heading"));

const DifficultyMenu = ({ heading, levels, difficulty }) => {
  const { languageSK } = useAppContext();
  return (
    <Wrapper className="wrapper">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <Heading heading={heading} />
        <div className="cards">
          {levels?.map((level, i) => {
            if (level.difficulty === difficulty) {
              return (
                <LevelCard key={i} level={level.order} levelId={level._id} />
              );
            }
            return null;
          })}
        </div>
      </Suspense>
      <div className="back-btn">
        <Button text={`${languageSK ? "späť" : "back"}`} path="/selectGame" />
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
    height: 60%;
    overflow-x: hidden;
    overflow-y: auto;
    padding-bottom: 1rem;
    padding-top: 0.5rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .back-btn {
    margin-top: 2rem;
  }
`;

export default DifficultyMenu;
