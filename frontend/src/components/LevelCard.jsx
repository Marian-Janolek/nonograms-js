import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LevelCard = ({ level, icon }) => {
  return (
    <Wrapper>
      <Link to={`/selectGame/easy/${level}`}>
        <span className="icon">{icon}</span>
        <span>{level}</span>
      </Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 5rem;
  height: 5rem;
  box-shadow: 5px 5px 10px #b1b1b1, -5px -5px 10px #fff;
  border-radius: 1rem;
  position: relative;

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
