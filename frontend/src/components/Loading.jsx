import styled from 'styled-components';

const Loading = () => {
  return (
    <Wrapper>
      <div className="loading"></div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  min-height: 100vh;
  -webkit-transition: all 1s ease;
  -o-transition: all 1s ease;
  transition: all 1s ease;

  .loading {
    position: absolute;
    width: 150px;
    height: 150px;
    background: linear-gradient(to top, var(--main-color) 40%, #000);
    border-radius: 50%;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
    -webkit-animation: rotate 2s linear infinite;
    animation: rotate 2s linear infinite;
  }
  @-webkit-keyframes rotate {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes rotate {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  .loading::before {
    content: '';
    position: absolute;
    background-color: var(--main-color);
    inset: 20px 20px 0 0;
    border-radius: 50%;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
  .loading::after {
    content: '';
    position: absolute;
    top: 50px;
    right: -8px;
    width: 40px;
    height: 40px;
    background-color: #000;
    border-radius: 50%;
    -webkit-box-shadow: 0 0 5px #000, 0 0 25px #000, 0 0 50px #000, 0 0 75px;
    box-shadow: 0 0 5px #000, 0 0 25px #000, 0 0 50px #000, 0 0 75px;
    -webkit-transition: all 1s ease;
    -o-transition: all 1s ease;
    transition: all 1s ease;
  }
`;

export default Loading;
