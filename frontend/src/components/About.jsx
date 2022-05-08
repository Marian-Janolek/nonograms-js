import React from "react";
import styled from "styled-components";
import logo from "../assets/logo256.png";
import { useAppContext } from "../context/appContext";
import Button from "./Button";
import Heading from "./Heading";

const About = () => {
  const { languageSK, darkMode } = useAppContext();
  return (
    <Wrapper className="wrapper" darkMode={darkMode}>
      <Heading heading={`${languageSK ? "O hre" : "About"}`} />
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
          {languageSK
            ? "Aplikácia zameraná na vytváranie a riešenie maľovaných krížoviek, ktoré pozostávajú z bielych a čiernych pixelov."
            : `
            The application is focused on the creation and solution of Nonograms,
            which consist of white and black pixels.
            `}
        </p>
        <p>
          {languageSK
            ? "V aktuálnej verzii je možné vytvoriť vlastnú maľovanú krížovku z obrázka uloženého vo vašom zariadení."
            : `In current version you can create your own crossword puzzle from image
          saved on your device.`}
        </p>
        <p>
          {languageSK
            ? "Ak nechcete použiť vlastný obrázok, aplikácia ponúka viacero vlastných levelov pochádzajúcich z databázy. Na výber je niekoľko úrovni obtiažnosti:"
            : `  However, If you choose not to, you can still choose from multiple
            levels coming from our database. You can choose your own difficulty
            level like:`}
        </p>
        <ul>
          <li>{languageSK ? "Ľahká" : "Easy"}</li>
          <li>{languageSK ? "Stredná" : "Medium"}</li>
          <li>{languageSK ? "Ťažká" : "Hard"}</li>
        </ul>
      </div>
      <div className="settings">
        <p>
          {languageSK
            ? "Aplikácia obsahuje 2 rôzne témy:"
            : "The application contains two different themes:"}
        </p>
        <ul>
          <li>{languageSK ? "Svetá téma" : "Light theme"}</li>
          <li>{languageSK ? "Tmavá téma" : "Dark Theme"} </li>
        </ul>
        <p>
          {" "}
          {languageSK
            ? "Ktorú je možné nájsť v nastaveniach."
            : `Which you can find in settings.`}
        </p>
      </div>
      <Button path="/" text={`${languageSK ? "späť" : "back"}`} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .copyright {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    gap: 2rem;
    padding: 1rem;
    box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
    -webkit-box-shadow: ${(props) =>
      props.darkMode ? `none` : `var(--neu-shadow)`};
    border-radius: 20px;

    img {
      width: 4.5rem;
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
    box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
    -webkit-box-shadow: ${(props) =>
      props.darkMode ? `none` : `var(--neu-shadow)`};
    border-radius: 20px;

    ul {
      padding-left: 1rem;
      list-style: circle;
    }
  }
  .settings {
    margin-bottom: 1.5rem;
  }

  @media (min-width: 1024px) {
    .copyright,
    .about,
    .settings {
      width: 45%;
    }
  }
  @media (max-width: 1024px) {
    .copyright,
    .about,
    .settings {
      width: 60%;
    }
  }
  @media (max-width: 776px) {
    .copyright,
    .about,
    .settings {
      width: 75%;
    }
  }
  @media (max-width: 565px) {
    .copyright,
    .about,
    .settings {
      width: 100%;
    }
  }
  @media (max-width: 430px) {
    .copyright {
      padding: 0.5rem 1rem;
      h3 {
        font-size: 1rem;
      }
      p {
        font-size: 0.8rem;
      }
    }
    .about,
    .settings {
      margin-top: 1rem;
    }
    .settings {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }
  @media (max-width: 360px) {
    .copyright {
      span {
        font-size: 13px;
      }
    }
    .about,
    .settings {
      font-size: 13px;
    }
  }
  @media (max-width: 300px) {
    .about,
    .settings {
      padding: 0rem 0.5rem;
    }
  }

  @media (max-height: 680px) {
    .copyright {
      padding: 0.5rem 1rem;
    }
    .about,
    .settings {
      margin-top: 1rem;
      font-size: 12px;
    }
    .settings {
      margin-bottom: 1rem;
      margin-top: 1rem;
    }
  }
`;

export default About;
