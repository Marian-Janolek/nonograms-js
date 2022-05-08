import React from "react";
import styled from "styled-components";
import { Button, Navbar } from "../components";
import { useAppContext } from "../context/appContext";

const CustomDIfficulty = () => {
  const { languageSK } = useAppContext();
  return (
    <Wrapper className="wrapper">
      <Navbar />
      <div className="select-btns">
        <Button text="15 x 15" path="/difficulty/medium" />
        <Button text="20 x 20" path="/difficulty/hard" />
        <Button text={`${languageSK ? "späť" : "back"}`} path="/" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
    margin-top: 4rem;
  }
`;

export default CustomDIfficulty;
