import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const LevelCard = ({ level, icon, levelId }) => {
  const { closeModal, darkMode } = useAppContext();
  return (
    <Link to={`/selectGame/easy/${levelId}`} onClick={closeModal}>
      <Wrapper darkMode={darkMode}>
        <span className="icon">{icon}</span>
        <span>{level}</span>
      </Wrapper>
    </Link>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  box-shadow: ${(props) =>
    props.darkMode ? `none` : `5px 5px 10px #b1b1b1, -5px -5px 10px #fff`};
  border-radius: 1rem;
  position: relative;
  color: ${(props) => (props.darkMode ? `var(--dark-text)` : `black`)};
  background-color: ${(props) =>
    props.darkMode ? `var(--dark-bg)` : `var(--main-color)`};

  span {
    font-size: 3rem;
  }
  .icon {
    position: absolute;
    font-size: 5rem;
    opacity: 0.25;
    bottom: -40%;
    left: 0;
  }
`;

export default LevelCard;
