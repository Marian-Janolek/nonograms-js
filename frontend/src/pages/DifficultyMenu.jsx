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
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
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
  @media (max-height: 680px) {
    .cards {
      margin-top: 0;
    }
  }
  @media (min-width: 776px) {
    .cards {
      width: 70%;
    }
  }
`;

export default DifficultyMenu;
