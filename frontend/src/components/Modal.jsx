import React from 'react';
import styled from 'styled-components';
import { GiCheckMark } from 'react-icons/gi';
import Button from './Button';
import { useAppContext } from '../context/appContext';

const Modal = () => {
  const { isModalOpen, closeModal } = useAppContext();

  console.log(isModalOpen);

  return (
    <Wrapper>
      <div
        className={`${
          isModalOpen ? 'modal-overlay show-modal' : 'modal-overlay'
        }`}
      >
        <div
          className={`${
            isModalOpen ? 'container show-container' : 'container'
          }`}
        >
          <h2>Congratulation!</h2>
          <div className="icon-cg">
            <GiCheckMark />
          </div>
          <h3>
            You completed this level. <br /> Press 'NEXT' to challenge yourself
            with another one.
          </h3>

          <Button text="NEXT" path="/selectGame/easy" onClick={closeModal} />
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
    background: rgba(0, 0, 0, 0.5);
    display: grid;
    place-items: center;
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
    display: flex;
    width: 90%;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 3px solid black;
    background-color: var(--main-color);
    transform: translate(0%, -100%) scale(0.1);
    visibility: hidden;
    transition: var(--transition);
  }
  .show-container {
    visibility: visible;
    transform: translate(0%, 0%) scale(1);
  }

  .icon-cg {
    width: 4rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    border: 3px solid black;
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
