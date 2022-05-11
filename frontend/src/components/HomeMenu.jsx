import styled from "styled-components";
import { Button, Navbar } from ".";
import { useAppContext } from "../context/appContext";

const HomeMenu = () => {
  const { languageSK, logoutUser } = useAppContext();
  return (
    <Wrapper className="wrapper">
      <Navbar />

      <div className="select-btns">
        <Button
          text={`${languageSK ? "hrať hru" : "play game"}`}
          path="selectGame"
        />
        <Button
          text={`${languageSK ? "vlastná hra" : "custom game"}`}
          path="difficulty"
        />
        <Button
          text={`${languageSK ? "nastavenia" : "settings"}`}
          path="settings"
        />
        <Button text={`${languageSK ? "o hre" : "about"}`} path="about" />
        <Button
          text={`${languageSK ? "ukončiť hru" : "exit game"}`}
          path="register"
          handleClick={logoutUser}
        />
      </div>
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
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;

  .select-btns {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    gap: 3rem;
    padding-bottom: 4rem;
  }
  @media (max-width: 700px) {
    .select-btns {
      padding-bottom: 1rem;
    }
  }
`;

export default HomeMenu;
