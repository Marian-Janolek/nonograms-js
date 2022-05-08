import React from "react";
import styled from "styled-components";
import { GiCheckMark } from "react-icons/gi";
import Button from "./Button";
import { useAppContext } from "../context/appContext";

const Modal = () => {
  const { isModalOpen, closeModal, languageSK, darkMode } = useAppContext();

  return (
    <Wrapper darkMode={darkMode}>
      <div
        className={`${
          isModalOpen ? "modal-overlay show-modal" : "modal-overlay"
        }`}
      >
        <div
          className={`${
            isModalOpen ? "container show-container" : "container"
          }`}
        >
          <h2>{languageSK ? "Gratulujeme!" : "Congratulation"}!</h2>
          <div className="icon-cg">
            <GiCheckMark />
          </div>
          <h3>
            {languageSK
              ? "Úspešne si dokončil level."
              : "  You completed this level."}
            <br />
            {languageSK
              ? "Pre výber ďalšieho levela stlač tlačidlo 'ĎALŠÍ'"
              : 'Press "NEXT" to challenge yourself with another one.'}
          </h3>

          <Button
            text={`${languageSK ? "ďalší" : "next"}`}
            path="/selectGame/easy"
            onClick={closeModal}
          />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${(props) =>
      props.darkMode ? "rgba(31, 31, 35, .7)" : `rgba(0, 0, 0, 0.5)`};
    display: -ms-grid;
    display: grid;
    place-items: center;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
    visibility: hidden;
    z-index: -1;
    text-align: center;
  }
  .show-modal {
    visibility: visible;
    z-index: 1;
  }

  .container {
    position: absolute;
    border-radius: 1rem;
    padding: 2rem 1.5rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    width: 90%;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    border: 3px solid black;
    background-color: ${(props) =>
      props.darkMode ? "black" : "var(--main-color)"};
    -webkit-transform: translate(0%, -100%) scale(0.1);
    -ms-transform: translate(0%, -100%) scale(0.1);
    transform: translate(0%, -100%) scale(0.1);
    visibility: hidden;
    -webkit-transition: var(--transition);
    -o-transition: var(--transition);
    transition: var(--transition);
  }
  .show-container {
    visibility: visible;
    -webkit-transform: translate(0%, 0%) scale(1);
    -ms-transform: translate(0%, 0%) scale(1);
    transform: translate(0%, 0%) scale(1);
  }

  .icon-cg {
    width: 4rem;
    height: 4rem;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    border-radius: 50%;
    border: ${(props) =>
      props.darkMode ? "3px solid var(--dark-text)" : "3px solid black"};
    margin: 1rem 0;
    svg {
      width: 2.5rem;
      height: 2.5rem;
    }
  }
  h3 {
    line-height: 2rem;
    margin-bottom: 1rem;
  }
`;

export default Modal;
