import styled from 'styled-components';
import { Navbar, Button } from '.';

const HomeMenu = () => {
  return (
    <Wrapper className="wrapper">
      <Navbar />
      <div className="select-btns">
        <Button text="play game" path="selectGame" />
        <Button text="custom game" path="customGame" />
        <Button text="settings" path="settings" />
        <Button text="about" path="about" />
        <Button text="exit game" path="exit" />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .select-btns {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding-bottom: 4rem;
  }
`;

export default HomeMenu;
