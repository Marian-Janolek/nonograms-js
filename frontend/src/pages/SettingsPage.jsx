import React from "react";
import styled from "styled-components";
import { Button, Heading, Language, Theme } from "../components";
import { useAppContext } from "../context/appContext";

const SettingsPage = () => {
  const { languageSK } = useAppContext();
  return (
    <Wrapper className="wrapper">
      <Heading heading={`  ${languageSK ? "Nastavenia" : "Settings"} `} />
      <Language />
      <Theme />
      <Button text={`${languageSK ? "späť" : "back"}`} path="/" />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default SettingsPage;
