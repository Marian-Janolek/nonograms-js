import styled from "styled-components";

const HorizontalHints = ({ hints }) => {
  return (
    <Wrapper>
      {hints?.map((hint, i) => {
        if (hint.length === 0) {
          return <span key={i}>0</span>;
        }
        return (
          <div key={i} className="hints">
            {hint.map((h, j) => {
              return <span key={j}>{h}</span>;
            })}
          </div>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 1.25rem;
  width: 100%;
  padding-right: 0.6rem;
  line-height: 1.4;

  span {
    font-size: 1.2rem;
    color: #fff;
  }

  .hints {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    span {
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;

export default HorizontalHints;
