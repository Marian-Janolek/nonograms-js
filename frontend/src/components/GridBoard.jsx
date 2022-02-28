import React from 'react';
import styled from 'styled-components';
import { Cell } from '.';

const GridBoard = () => {
  return (
    <Wrapper>
      {[...Array(100)].map((x, i) => (
        <Cell key={i} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

export default GridBoard;
