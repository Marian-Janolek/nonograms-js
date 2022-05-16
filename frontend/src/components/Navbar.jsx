import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";
import { AiOutlineUser, AiOutlineTrophy } from "react-icons/ai";

const Navbar = () => {
  const { darkMode } = useAppContext();
  return (
    <Wrapper darkMode={darkMode}>
      <button type="button" title="AiOutlineTrophy">
        <AiOutlineTrophy />
      </button>
      <Link to="/profile" title="Profile">
        <button type="button" title="AiOutlineUser">
          <AiOutlineUser />
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 95%;
  button {
    background-color: ${(props) =>
      props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};
    color: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: ${(props) => (props.darkMode ? `none` : `var(--neu-shadow)`)};
    -webkit-box-shadow: ${(props) =>
      props.darkMode ? `none` : `var(--neu-shadow)`};

    &:active {
      box-shadow: ${(props) =>
        props.darkMode
          ? `inset 3px 3px 5px var(--dark-text), inset -3px -3px 5px var(--dark-text)`
          : `inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff`};
      -webkit-box-shadow: ${(props) =>
        props.darkMode
          ? `inset 3px 3px 5px var(--dark-text), inset -3px -3px 5px var(--dark-text)`
          : `inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff`};
    }

    svg {
      font-size: 2.5rem;
      opacity: 0.75;
    }
  }

  @media (min-width: 450px) {
    button {
      height: 5rem;
      width: 5rem;
    }
  }
  @media (min-width: 776px) {
    width: 70%;
  }
  @media (min-width: 1024px) {
    width: 50%;
  }
`;

export default Navbar;
