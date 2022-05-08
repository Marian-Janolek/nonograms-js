import styled from "styled-components";
import { Button } from ".";
import { useAppContext } from "../context/appContext";

const SelectGame = () => {
  const { languageSK } = useAppContext();
  return (
    <Wrapper>
      <Button text="10 x 10" path="/selectGame/easy" />
      <Button text="15 x 15" path="/selectGame/medium" />
      <Button text="20 x 20" path="/selectGame/hard" />
      <Button text={`${languageSK ? "späť" : "back"}`} path="/" />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 3rem;
  padding-bottom: 4rem;
  padding-top: 10rem;
`;

export default SelectGame;
