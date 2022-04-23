import styled, { keyframes } from 'styled-components';
import React from 'react';

const CircleProgress = ({ title, percentage }) => {
  return (
    <Wrapper title={title} percentage={percentage}>
      {' '}
      <div className="bar">
        <svg>
          <circle cx="50%" cy="50%" r="50%"></circle>
        </svg>
        <h1>{percentage}%</h1>
      </div>
      <h3>{title}</h3>
    </Wrapper>
  );
};

const animationOffset = (number) => keyframes`
0% {
  stroke-dashoffset: 315px;
}
100% {
  stroke-dashoffset: calc(
    315px - (315px * ${number}) / 100
  );
}
`;

const Wrapper = styled(CircleProgress)`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
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
  width: 160px;

  .bar {
    display: inline-block;
    height: 100px;
    width: 100px;
    border-radius: 50%;
    position: relative;
    box-shadow: -3px -3px 7px #ffffffb2, 4px 4px 5px rgba(94, 104, 121, 0.945);
    overflow: hidden;
    margin: 1rem;
  }
  .bar::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    height: 80%;
    width: 80%;
    border-radius: 50%;
    box-shadow: inset -3px -3px 7px #ffffffb0,
      inset 3px 3px 5px rgba(94, 104, 121, 0.692);
    -webkit-box-shadow: inset -3px -3px 7px #ffffffb0,
      inset 3px 3px 5px rgba(94, 104, 121, 0.692);
  }
  svg {
    width: 100%;
    height: 100%;
    position: relative;
  }

  svg circle {
    position: absolute;
    -webkit-transform: scale(0.939);
    -ms-transform: scale(0.939);
    transform: scale(0.939);
    -webkit-transform-origin: center;
    -ms-transform-origin: center;
    transform-origin: center;
    fill: none;
    stroke: var(--main-color);
    stroke-width: 20px;
    stroke-dasharray: 315px;
  }

  .bar svg circle {
    animation: ${(props) => animationOffset(props.percentage)} 2s ease forwards;
    -webkit-animation: ${(props) => animationOffset(props.percentage)} 2s ease
      forwards;
  }

  h1 {
    position: absolute;
    font-size: 20px;
    font-family: 'Montserrat';
    text-align: center;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  @media (max-width: 768px) {
    width: 120px;
    h3 {
      font-size: 1rem;
    }
  }
`;

export default CircleProgress;
