import React from "react";
import styled from "styled-components";
import logo from "../assets/logo256.png";
import { useAppContext } from "../context/appContext";
import Button from "./Button";

const About = () => {
  const { languageSK } = useAppContext();
  return (
    <Wrapper className="wrapper">
      <div className="heading">About Game</div>
      <div className="copyright">
        <img src={logo} alt="about" />
        <div className="info">
          <h3>Nonograms</h3>
          <p>Version 1.0.0</p>
          <span>&copy; 2022 Majko Janolek.</span> <br />
          <span>All rights reserved.</span>
        </div>
      </div>
      <div className="about">
        <p>
          The application is focused on the creation and solution of Nonograms,
          which consist of white and black pixels.
        </p>
        <p>
          In current version you can create your own crossword puzzle from image
          saved on your device.
        </p>
        <p>
          However, If you choose not to, you can still choose from multiple
          levels coming from our database. You can choose your own difficulty
          level like:
        </p>
        <ul>
          <li>Easy</li>
          <li>Medium</li>
          <li>Hard</li>
        </ul>
      </div>
      <div className="settings">
        <p>The application contains two different themes:</p>
        <ul>
          <li>Light theme</li>
          <li>Dark Theme</li>
        </ul>
        <p>Which you can find in settings.</p>
      </div>
      <Button path="/" text={`${languageSK ? "späť" : "back"}`} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .copyright {
    display: flex;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
    border-radius: 20px;
    img {
      width: 20%;
    }
    span {
      font-weight: 200;
      font-size: 14px;
    }
  }
  .about,
  .settings {
    padding: 1rem;
    margin-top: 1.5rem;
    box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
    border-radius: 20px;
    ul {
      padding-left: 1rem;
      list-style: circle;
    }
  }
  .settings {
    margin-bottom: 1.5rem;
  }
`;

export default About;
