import styled from "styled-components";
import moon from "../assets/moon.png";
import sun from "../assets/sun.svg";
import { useState } from "react";
import { useAppContext } from "../context/appContext";

const Theme = () => {
  const { darkMode, toggleTheme, languageSK } = useAppContext();
  const [checked, setChecked] = useState(darkMode);

  return (
    <Wrapper onClick={toggleTheme} darkMode={darkMode}>
      <span>{languageSK ? "Výber témy" : "Choose theme"}</span>
      <div className="toggle">
        <input
          type="checkbox"
          defaultChecked={checked}
          onChange={() => setChecked(!checked)}
        />
        <label htmlFor="toggleBtn">
          <img src={sun} alt="sun" className="icon en" />
          <img src={moon} alt="moon" className="icon sk" />
        </label>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin-bottom: 2rem;
  padding: 1rem;
  width: 20%;
  box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
  -webkit-box-shadow: ${(props) =>
    props.darkMode ? `none` : `var(--neu-shadow)`};
  border-radius: 20px;
  background-color: ${(props) =>
    props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};

  span {
    font-size: var(--h2-font-size);
  }

  .toggle {
    width: 72px;
    height: 30px;
    border: ${(props) =>
      props.darkMode ? "0.1px solid var(--dark-text)" : "0.1px solid #fff"};
    border-radius: 100px;
    background-color: ${(props) =>
      props.darkMode ? "var(--dark-text)" : "#f0edf1"};
    -webkit-box-shadow: inset 10px 10px 15px #a7aaaf,
      inset -10px -10px 15px #ffffff;
    box-shadow: ${(props) =>
      props.darkMode
        ? "inset 10px 10px 15px #a7aaaf, inset -10px -10px 15px var(--dark-text)"
        : "inset 10px 10px 15px #a7aaaf, inset -10px -10px 15px #ffffff"};
    -webkit-box-shadow: ${(props) =>
      props.darkMode
        ? "inset 10px 10px 15px #a7aaaf, inset -10px -10px 15px var(--dark-text)"
        : "inset 10px 10px 15px #a7aaaf, inset -10px -10px 15px #ffffff"};
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
    -webkit-box-shadow: ${(props) =>
      props.darkMode
        ? `0px 0px 0px 3px #f0edf199, 4px 4px 7px var(--dark-text),
      -4px -4px 7px var(--dark-text)`
        : `
    0px 0px 0px 3px #f0edf1, 4px 4px 7px #a7aaaf,
      -4px -4px 7px #ffffff`};
    box-shadow: ${(props) =>
      props.darkMode
        ? `0px 0px 0px 3px #f0edf199, 4px 4px 7px var(--dark-text),
      -4px -4px 7px var(--dark-text)`
        : `
    0px 0px 0px 3px #f0edf1, 4px 4px 7px #a7aaaf,
      -4px -4px 7px #ffffff`};
    -webkit-box-shadow: ${(props) =>
      props.darkMode
        ? `0px 0px 0px 3px #f0edf199, 4px 4px 7px var(--dark-text),
      -4px -4px 7px var(--dark-text)`
        : `
    0px 0px 0px 3px #f0edf1, 4px 4px 7px #a7aaaf,
      -4px -4px 7px #ffffff`};
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    -webkit-transition: all 0.4s;
    -o-transition: all 0.4s;
    transition: all 0.4s;
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

  @media (max-width: 1400px) {
    width: 30%;
  }
  @media (max-width: 896px) {
    width: 50%;
  }
  @media (max-width: 668px) {
    width: 75%;
  }
  @media (max-width: 430px) {
    width: 90%;
  }
  @media (max-width: 340px) {
    span {
      font-size: 1rem;
    }
  }
  @media (max-height: 680px) {
    width: 90%;
  }
`;

export default Theme;
