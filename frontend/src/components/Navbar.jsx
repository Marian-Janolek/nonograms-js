import { AiOutlineUser, AiOutlineTrophy } from "react-icons/ai";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/appContext";

const Navbar = () => {
  const { darkMode } = useAppContext();
  return (
    <Wrapper darkMode={darkMode}>
      <Link to="/achievements" title="Achievement">
        {" "}
        <button type="button" title="AiOutlineTrophy">
          <AiOutlineTrophy />
        </button>
      </Link>
      <Link to="/profile" title="Profile">
        {" "}
        <button type="button" title="AiOutlineUser">
          <AiOutlineUser />
        </button>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 95%;
  button {
    background-color: ${(props) =>
      props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};
    color: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    box-shadow: ${(props) =>
      props.darkMode ? `none` : `5px 5px 10px #b1b1b1, -5px -5px 10px #fff`};

    &:active {
      box-shadow: inset 5px 5px 10px #b1b1b1, inset -5px -5px 10px #fff;
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
`;

export default Navbar;
