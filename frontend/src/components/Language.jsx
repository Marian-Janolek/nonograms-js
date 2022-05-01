import styled from "styled-components";
import sk from "../assets/sk.svg";
import uk from "../assets/uk.svg";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

const Language = () => {
  const { toggleLanguage, languageSK } = useAppContext();
  const [checked, setChecked] = useState(languageSK);

  return (
    <Wrapper onClick={toggleLanguage}>
      <span>{languageSK ? "Výber jazyka" : "Choose language"}</span>
      <div className="toggle">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="toggleBtn">
          <img src={uk} alt="uk" className="icon en" />
          <img src={sk} alt="sk" className="icon sk" />
        </label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
  width: 75%;
  padding: 1rem;
  box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
  border-radius: 20px;

  span {
    font-size: var(--h2-font-size);
  }

  .toggle {
    width: 72px;
    height: 30px;
    border: 0.1px solid #ffffff;
    border-radius: 100px;
    background-color: #f0edf1;
    -webkit-box-shadow: inset 10px 10px 15px #a7aaaf,
      inset -10px -10px 15px #ffffff;
    box-shadow: inset 10px 10px 15px #a7aaaf, inset -10px -10px 15px #ffffff;
    position: relative;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .toggle .icon {
    width: 30px;
    height: 30px;
    border-radius: 100px;
    -webkit-box-shadow: 0px 0px 0px 3px #f0edf1, 4px 4px 7px #a7aaaf,
      -4px -4px 7px #ffffff;
    box-shadow: 0px 0px 0px 3px #f0edf1, 4px 4px 7px #a7aaaf,
      -4px -4px 7px #ffffff;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
  }
  .toggle::before {
    content: "SK ENG";
    color: #222;
    position: absolute;
    top: 10%;
    left: 10%;
    word-spacing: 5px;
  }
  .toggle .sk {
    opacity: 0;
  }
  .toggle input {
    opacity: 0;
    width: 100px;
    height: 30px;
    cursor: pointer;
  }
  .toggle input:checked + label .sk {
    opacity: 1;
  }
  .toggle input:checked + label .en {
    opacity: 0;
  }
  .toggle input:checked + label .icon {
    -webkit-transform: translateX(40px) rotate(360deg);
    -ms-transform: translateX(40px) rotate(360deg);
    transform: translateX(40px) rotate(360deg);
  }
  @media (max-width: 576px) {
    left: 9rem;
  }
  @media (max-width: 420px) {
    left: 4rem;
  }
  @media (max-width: 290px) {
    left: 3.5rem;
  }
`;

export default Language;
