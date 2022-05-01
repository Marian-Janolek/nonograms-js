import React from "react";
import styled from "styled-components";
import { Button, Language } from "../components";
import { useAppContext } from "../context/appContext";

const SettingsPage = () => {
  const { languageSK } = useAppContext();
  return (
    <Wrapper className="wrapper">
      <div className="heading"> {languageSK ? "Nastavenia" : "Settings"} </div>
      <Language />
      <Button text={`${languageSK ? "späť" : "back"}`} path="/" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SettingsPage;
