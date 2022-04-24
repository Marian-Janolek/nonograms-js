import styled from "styled-components";

const VerticalHints = ({ hints }) => {
  return (
    <Wrapper>
      {hints?.map((hint, i) => {
        if (hint.length === 0) {
          return (
            <span key={i} style={{ textAlign: "right" }}>
              0
            </span>
          );
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
  width: 100%;
  flex-direction: column;
  padding-left: 0.4rem;
  padding-right: 0.5rem;
  gap: 0.09rem;
  span {
    font-size: 1.2rem;
    color: #fff;
  }

  .hints {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    gap: 0.5rem;
    span {
      font-size: 1.2rem;
      color: #fff;
    }
  }
`;

export default VerticalHints;
