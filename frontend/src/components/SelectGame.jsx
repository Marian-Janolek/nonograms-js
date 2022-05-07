import { lazy, Suspense } from "react";
import styled from "styled-components";
import { Button } from ".";
import { useAppContext } from "../context/appContext";
import Loading from "./Loading";

const BsArrowLeft = lazy(() => import("../utils/icons/arrowLeft"));

const SelectGame = () => {
  const { languageSK } = useAppContext();
  return (
    <Wrapper>
      <Button text="10 x 10" path="/selectGame/easy" />
      <Button text="15 x 15" path="/selectGame/medium" />
      <Button text="20 x 20" path="/selectGame/hard" />
      <Suspense fallback={<Loading />}>
        <Button
          text={`${languageSK ? "späť" : "back"}`}
          path="/"
          icon={<BsArrowLeft />}
        />
      </Suspense>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
  padding-top: 10rem;
`;

export default SelectGame;
